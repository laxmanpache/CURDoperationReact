import { combineReducers } from "redux";
import usersReducer from "./Reducer";

const rootReducer = combineReducers({
    data:usersReducer
})

export default rootReducer;