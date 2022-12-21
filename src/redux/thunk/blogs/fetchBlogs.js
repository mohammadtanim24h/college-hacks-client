import { loadBlog } from "../../actions/blogActions";

const GET_CONTENT = () => {
    return async (dispatch) => {
        const resp = await fetch("https://college-hacks.onrender.com/blogs");
        const data = await resp.json();
        if (data.data.length) {
            dispatch(loadBlog(data.data));
        }
    };
};

export default GET_CONTENT;
