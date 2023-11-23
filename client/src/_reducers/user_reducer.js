import { LOGIN_USER } from "../_actions/types";

export default function (state = {}, action){
    switch (action.type) {
        case LOGIN_USER:
            return { ...state, loginSuccess: action.payload}
            // 로그인 응답을 action.payload에서 받음
            break;
    
        default:
            return state;
    }
}