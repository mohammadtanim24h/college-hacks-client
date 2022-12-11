import { loadBlog } from "../../actions/blogActions";

const loadBlogData = () => {
    return async (dispatch) => {
        const resp = await fetch("http://localhost:5000/blogs");
        const data = await resp.json();
        if (data.data.length) {
            dispatch(loadBlog(data.data));
        }
    };
};

export default loadBlogData;
