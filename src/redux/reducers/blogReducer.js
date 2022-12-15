import {
    ADD_BLOG,
    DELETE_BLOG,
    LOAD_BLOGS,
    SELECT_BLOG_TO_UPDATE,
} from "../actionTypes/actionTypes";

const initialState = {
    blogs: [],
    selectedBlog: {},
};

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_BLOGS:
            return {
                ...state,
                blogs: action.payload,
            };
        case ADD_BLOG:
            return {
                ...state,
                blogs: [...state.blogs, action.payload],
            };
        case DELETE_BLOG:
            return {
                ...state,
                blogs: state.blogs.filter(
                    (blog) => blog._id !== action.payload
                ),
            };
        case SELECT_BLOG_TO_UPDATE:
            return {
                ...state,
                selectedBlog: state.blogs.find(
                    (blog) => blog._id === action.payload
                ),
            };
        default:
            return state;
    }
};

export default blogReducer;
