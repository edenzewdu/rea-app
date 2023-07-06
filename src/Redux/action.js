// import { type } from "@testing-library/user-event/dist/type";
import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART } from "./constant";
export const addToCart = (data) => {
    console.warn("action is called", data)
    return {
        type: ADD_TO_CART,
        data
    }

}

export const removeFromCart = (data) => {
    console.warn("action removeFromCart", data)
    return {
        type: REMOVE_FROM_CART,
        data
    }

}



export const EmptyCart = (data) => {
    console.warn("action EmptyCart", data)
    return {
        type: EMPTY_CART,
        data
    }

}