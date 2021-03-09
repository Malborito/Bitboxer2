import { createStore, combineReducers } from "redux";
import { authReducer } from "../reducers/authReducer";
import { itemsReducer } from "../reducers/itemsReducer";

const reducers = combineReducers({
    auth: authReducer,
    items: itemsReducer,
})

export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);