import {
    CLEAR_FILTER_TAG,
    FILTER_BY_TAG_NAME,
    FILTER_BY_UPLOAD_DATE,
} from "../actionTypes/actionTypes";

export const filterByUploadDate = (filterType) => {
    return {
        type: FILTER_BY_UPLOAD_DATE,
        payload: filterType,
    };
};

export const filterByTagName = (tagName) => {
    return {
        type: FILTER_BY_TAG_NAME,
        payload: tagName,
    };
};

export const clearFilterTag = () => {
    return {
        type: CLEAR_FILTER_TAG,
    };
};
