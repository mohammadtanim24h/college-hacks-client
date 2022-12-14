import { toast } from "react-hot-toast";
import { deleteBlog } from "../../actions/blogActions";

const DELETE_CONTENT = (id) => {
    return async (dispatch) => {
        const resp = await fetch(`https://college-hacks.onrender.com/blog/${id}`, {
            method: "DELETE",
        });
        const data = await resp.json();
        if (data.acknowledged) {
            dispatch(deleteBlog(id));
            setTimeout(() => {
                toast.success("Blog deleted successfully");
            }, 100);
        }
    };
};

export default DELETE_CONTENT;
