import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./reducers/productReducer";

const initialState = {};
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : (null || compose);
const store = createStore(combineReducers({
    products: productReducer,
}),
    initialState,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;

