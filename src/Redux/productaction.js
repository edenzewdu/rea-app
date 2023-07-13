import { PRODUCT_LIST } from "./constant";

export const productList = () => {
    let data = "hello, how are you"
    console.warn("action is called", data)
    return {
        type: PRODUCT_LIST,
        data
    }

}