import {SET_LOCALE} from './../constants/index'

const initialState = {
    locale: 'en'
};

export default (state = initialState, action) => {
    const {type, payload} = action;

    switch (type) {
        case SET_LOCALE:
            return {
                locale: payload
            };

        default:
            return state
    }
}