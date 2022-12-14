import { deleteBlog } from "../../actions/blogActions";

const deleteBlogData = (id) => {
    return async (dispatch) => {
        const resp = await fetch(`http://localhost:5000/blog/${id}`, {
            method: "DELETE",
        });
        const data = await resp.json();
        if (data.acknowledged) {
            dispatch(deleteBlog(id));
        }
    };
};

export default deleteBlogData;
