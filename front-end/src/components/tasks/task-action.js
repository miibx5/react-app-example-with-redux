import { METHODS } from "./task-constants";

export const changeDescription = event => ({
    type: METHODS.DESCRIPTION_CHANGED,
    payload: event.target.value
})