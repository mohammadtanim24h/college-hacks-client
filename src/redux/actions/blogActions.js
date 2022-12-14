import { ADD_BLOG, DELETE_BLOG, LOAD_BLOGS } from "../actionTypes/actionTypes";

export const loadBlog = (data) => {
    return {
        type: LOAD_BLOGS,
        payload: data,
    };
};

export const addBlog = (blog) => {
    return {
        type: ADD_BLOG,
        payload: blog,
    };
};

export const deleteBlog = (id) => {
    return {
        type: DELETE_BLOG,
        payload: id,
    };
};
