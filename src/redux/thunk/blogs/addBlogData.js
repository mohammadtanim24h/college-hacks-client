import { addBlog } from "../../actions/blogActions";

const addBlogData = (blog) => {
    return async (dispatch) => {
        const resp = await fetch("http://localhost:5000/add-blog", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(blog),
        });
        const data = await resp.json();
        if (data.acknowledged) {
            dispatch(addBlog({ _id: data.insertedId, ...blog }));
        }
    };
};

export default addBlogData;
