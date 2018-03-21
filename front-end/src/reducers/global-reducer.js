import { combineReducers } from "redux";
import taskReducer from "../components/tasks/task-reducer";

const rootReducer = combineReducers({
    task: taskReducer
});

export default rootReducer;