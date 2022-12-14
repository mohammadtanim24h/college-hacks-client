import { toast } from "react-hot-toast";
import { deleteBlog } from "../../actions/blogActions";

const deleteBlogData = (id) => {
    return async (dispatch) => {
        const resp = await fetch(`http://localhost:5000/blog/${id}`, {
            method: "DELETE",
        });
        const data = await resp.json();
        if (data.acknowledged) {
            dispatch(deleteBlog(id));
            setTimeout(() => {
                toast.success("Blog deleted successfully");
            }, 1000);
        }
    };
};

export default deleteBlogData;
