import {
    LOGIN_USER,
    REGISTER_USER
} from '../_actions/types';

export default function (state = {}, action) {
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload }
                 // ...는 빈상태로 가져오는 뜻
            break;
        case REGISTER_USER:
            return { ...state, register: action.payload }
                // ...는 빈상태로 가져오는 뜻
            break;
        default:
            return state;
    }
}