import { METHODS } from "./task-constants";
const INITIAL_STATE = { description: "", list: [] }

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case METHODS.DESCRIPTION_CHANGED:
            return { ...state, description: action.payload }
        case METHODS.TASK_SEARCH:
            return { ...state, list: action.payload.data }
        default:
            return state
    }
}