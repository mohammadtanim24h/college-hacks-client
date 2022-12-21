import { toast } from "react-hot-toast";
import { addBlog } from "../../actions/blogActions";

const ADD_CONTENT = (blog) => {
    return async (dispatch) => {
        const resp = await fetch("https://college-hacks.onrender.com/add-blog", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(blog),
        });
        const data = await resp.json();
        if (data.acknowledged) {
            dispatch(addBlog({ _id: data.insertedId, ...blog }));
            setTimeout(() => {
                toast.success("Blog added successfully");
            }, 500);
        }
    };
};

export default ADD_CONTENT;
