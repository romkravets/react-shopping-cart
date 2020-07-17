import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import thunk from "redux-thunk";
import { productReducer } from "./reducers/productReducer";
import {cartReducer} from "./reducers/cartReducer";

const initialState = {};
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : (null || compose);
const store = createStore(combineReducers({
    products: productReducer,
    cart: cartReducer,
}),
    initialState,
    composeEnhancers(applyMiddleware(thunk))
);

export default store;

