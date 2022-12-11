import { LOAD_BLOGS } from "../actionTypes/actionTypes";

export const loadBlog = (data) => {
    return {
        type: LOAD_BLOGS,
        payload: data,
    };
};
