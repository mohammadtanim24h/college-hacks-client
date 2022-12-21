import { viewBlog } from "../../actions/blogActions";

const GET_BLOG_DETAILS = (id) => {
    return async (dispatch) => {
        const resp = await fetch(`https://college-hacks.onrender.com/get-blog/${id}`);
        const data = await resp.json();
        if (data) {
            dispatch(viewBlog(data));
        }
    };
};

export default GET_BLOG_DETAILS;
