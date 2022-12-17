import {
    FILTER_BY_TAG_NAME,
    FILTER_BY_UPLOAD_DATE,
} from "../actionTypes/actionTypes";

const initialState = {
    blogsFilterType: "",
    topicsFilterTag: "",
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_BY_UPLOAD_DATE:
            if (state.blogsFilterType === action.payload) {
                return {
                    ...state,
                    blogsFilterType: "",
                };
            } else {
                return {
                    ...state,
                    blogsFilterType: action.payload,
                };
            }
        case FILTER_BY_TAG_NAME:
            if (state.topicsFilterTag === action.payload) {
                return {
                    ...state,
                    topicsFilterTag: "",
                };
            } else {
                return {
                    ...state,
                    topicsFilterTag: action.payload,
                };
            }
        default:
            return state;
    }
};

export default filterReducer;
