import { FILTER_BY_UPLOAD_DATE } from "../actionTypes/actionTypes";

const initialState = {
    blogsFilterType: "",
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
        default:
            return state;
    }
};

export default filterReducer;
