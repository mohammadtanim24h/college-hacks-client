import {
    ADD_BLOG,
    CLEAR_BLOG_DATA,
    DELETE_BLOG,
    LOAD_BLOGS,
    SELECT_BLOG_TO_UPDATE,
    VIEW_BLOG,
} from "../actionTypes/actionTypes";

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

export const selectBlogToUpdate = (blog) => {
    return {
        type: SELECT_BLOG_TO_UPDATE,
        payload: blog,
    };
};

export const clearBlogData = (source) => {
    return {
        type: CLEAR_BLOG_DATA,
        payload: source,
    };
};

export const viewBlog = (blog) => {
    return {
        type: VIEW_BLOG,
        payload: blog,
    };
};
