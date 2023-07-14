import {takeEvery} from 'redux-saga/effects'
import { PRODUCT_LIST } from './constant';

function getProducts(){
    
    let data = await fetch
    console.warn("action is called", data)
}

function productSaga(){
    yield takeEvery(PRODUCT_LIST, getProducts)
}
export default productSaga;