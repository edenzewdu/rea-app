import { combineReducers } from "redux";
import { cartData } from "./reducer";
import { productData } from "./productaction";
export default combineReducers({
    cartData,
    productData
})