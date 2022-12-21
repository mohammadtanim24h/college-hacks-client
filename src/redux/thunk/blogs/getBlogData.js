import { selectBlogToUpdate } from "../../actions/blogActions";

const GET_SINGLE_BLOG = (id, reset) => {
    return async (dispatch) => {
        const resp = await fetch(`https://college-hacks.onrender.com/get-blog/${id}`);
        const data = await resp.json();
        if (data) {
            reset(data);
            dispatch(selectBlogToUpdate(data));
        }
    };
};

export default GET_SINGLE_BLOG;
