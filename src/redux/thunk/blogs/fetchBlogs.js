import { loadBlog } from "../../actions/blogActions";

const GET_CONTENT = () => {
    return async (dispatch) => {
        const resp = await fetch("http://localhost:5000/blogs");
        const data = await resp.json();
        if (data.data.length) {
            dispatch(loadBlog(data.data));
        }
    };
};

export default GET_CONTENT;
