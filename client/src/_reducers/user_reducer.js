import { LOGIN_USER, REGISTER_USER, AUTH_USER } from "../_actions/types";

export default function (state = {}, action){
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload }
            // 로그인 응답을 action.payload에서 받음
            break;
        case REGISTER_USER:
            return { ...state, register: action.payload }
            // 로그인 응답을 action.payload에서 받음
            break;
        case AUTH_USER:
            return { ...state, userData: action.payload }
            // 로그인 응답을 action.payload에서 받음
            break;
        default:
            return state;
    }
}