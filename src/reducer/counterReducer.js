import {INCREMENT} from './../constants/index'

export default (counterState = 0, action) => {
    return action.type === INCREMENT ? ++counterState : counterState;
}