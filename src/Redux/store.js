// import {createStore} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import productSaga from './productSaga';
import createSagamiddleware from './redux-saga';
// const store = createStore(rootReducer);
const store = configureStore({
    reducer: rootReducer,
    middleware: ()=>{sagaMiddleware}
  });
export default store;
sagaMiddleware.run(productSaga);