import {applyMiddleware, combineReducers, createStore} from "redux";
import authReducer from "./reducers/authReducer";
import cartReducer from "./reducers/cartReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducers = combineReducers({ authReducer, cartReducer })

const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)))

export default store