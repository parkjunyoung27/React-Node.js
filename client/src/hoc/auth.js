import React, { useEffect } from 'react';
import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action'

export default function (SpecificComponent, oprion, adminRoute = null){

    // null => 아무나 출입이 가능한 페이지
    // true => 로그인한 유저만 출입이 가능한 페이지
    // false => 로그인한 유저는 출입 불가능한 페이지

    // adminRoute => 관리자 권한 사용
    
    function AuthenticationCheck(props){

        const dispatch = useDispatch();

        useEffect(() => {
            
            dispatch(auth()).then(response => {
                console.log(response)

                // 로그인 하지 않은 상태 
                if(!response.payload.isAuth){

                }else{
                    // 로그인 한 상태

                }

            })
        },[])

        return(
            <SpecificComponent />
        )
    }

    return AuthenticationCheck
}