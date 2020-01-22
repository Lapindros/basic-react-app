import {
    INCREMENT,
    DELETE_ARTICLE,
    FILTER_SELECTED_ITEMS,
    REMOVE_FILTER_SELECTED_ITEMS,
    SET_LOCALE
} from './../constants/index'

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: {id}
    }
}

export function filterSelectedItems(id) {
    return {
        type: FILTER_SELECTED_ITEMS,
        payload: {id}
    }
}

export function RemoveSelectedItems() {
    return {
        type: REMOVE_FILTER_SELECTED_ITEMS,
    }
}

export function setLocale(locale) {
    return {
        type: SET_LOCALE,
        payload: locale
    }
}