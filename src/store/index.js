import {createStore, applyMiddleware} from "redux";
import reducer from './../reducer/index'
import logger from '../middlewares/logger'

const enhancer = applyMiddleware(logger)
const store = createStore(reducer, enhancer);

export default store;