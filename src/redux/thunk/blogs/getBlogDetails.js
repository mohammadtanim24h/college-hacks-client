import { viewBlog } from "../../actions/blogActions";

const GET_BLOG_DETAILS = (id) => {
    return async (dispatch) => {
        const resp = await fetch(`http://localhost:5000/get-blog/${id}`);
        const data = await resp.json();
        if (data) {
            dispatch(viewBlog(data));
        }
    };
};

export default GET_BLOG_DETAILS;
