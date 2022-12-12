import { FILTER_BY_UPLOAD_DATE } from "../actionTypes/actionTypes";

export const filterByUploadDate = (filterType) => {
    return {
        type: FILTER_BY_UPLOAD_DATE,
        payload: filterType,
    };
};
