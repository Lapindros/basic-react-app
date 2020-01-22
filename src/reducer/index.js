import {combineReducers} from "redux";
import counterReducer from "./counterReducer";
import articleReducer from "./articleReducer";
import selectReducer from './selectReducer'
import localeReducer from './localeReducer'

export default combineReducers({
    counter: counterReducer,
    articles: articleReducer,
    select: selectReducer,
    locale: localeReducer
})