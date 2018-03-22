import axios from "axios";

import { METHODS, URL } from "./task-constants";

export const changeDescription = event => ({
    type: METHODS.DESCRIPTION_CHANGED,
    payload: event.target.value
});

export const search = () => {
    const request = axios.get(`${URL}?sort=-dateCreation`);
    console.log("request na action", request);
    return {
        type: METHODS.TASK_SEARCH,
        payload: request
    }
}
export const add = (description) => {
    const request = axios.post(URL, { description });
    console.log("request na action", request);
    return {
        type: METHODS.TASK_ADD,
        payload: request
    }
}