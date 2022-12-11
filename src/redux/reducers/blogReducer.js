import { LOAD_BLOGS } from "../actionTypes/actionTypes";

const initialState = {
    blogs: [],
};

const blogReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_BLOGS:
            return {
                ...state,
                blogs: action.payload,
            };
        default:
            return state;
    }
};

export default blogReducer;
