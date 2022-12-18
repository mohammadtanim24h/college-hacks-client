import {
    ADD_BLOG,
    CLEAR_BLOG_DATA,
    DELETE_BLOG,
    LOAD_BLOGS,
    MANAGE_READING_HISTORY,
    SELECT_BLOG_TO_UPDATE,
    VIEW_BLOG,
} from "../actionTypes/actionTypes";

const initialState = {
    blogs: [],
    selectedBlog: {},
    blog: {},
    readingHistory: [],
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
                selectedBlog: action.payload,
            };
        case CLEAR_BLOG_DATA:
            if (action.payload === "view") {
                return {
                    ...state,
                    blog: {},
                };
            } else {
                return {
                    ...state,
                    selectedBlog: {},
                };
            }
        case VIEW_BLOG:
            return {
                ...state,
                blog: action.payload,
            };
        case MANAGE_READING_HISTORY:
            return {
                ...state,
                readingHistory: [action.payload, ...state.readingHistory],
            };
        default:
            return state;
    }
};

export default blogReducer;
