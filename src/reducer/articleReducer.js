import {DELETE_ARTICLE} from './../constants/index'
import {FILTER_SELECTED_ITEMS, REMOVE_FILTER_SELECTED_ITEMS} from './../constants/index'
import defaultArticles from './../fixtures'

const initialState = {
    defaultArticles,
    filteredArticles: []
};


export default (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case DELETE_ARTICLE:
            return {
                ...state,
                defaultArticles: state.defaultArticles.filter(article => article.id !== payload.id)
            };

        case FILTER_SELECTED_ITEMS:

            return {
                ...state,
                filteredArticles: [
                    ...state.filteredArticles.filter(article => article.id !== payload.id),
                    ...state.defaultArticles.filter(article => article.id === payload.id),
                ]
            };

        case REMOVE_FILTER_SELECTED_ITEMS:
            return {
                ...state,
                filteredArticles: []
            };

        default:
            return state
    }
}