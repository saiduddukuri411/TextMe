import { combineReducers } from "redux";

import { switchUserAuth } from "./login";

const RootReducer = combineReducers({
    switchUserAuth
})

export default RootReducer;
