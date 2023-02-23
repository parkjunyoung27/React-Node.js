import { createAction, handleActions } from 'redux-actions';
import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
const INCREASE_ASYNC = 'counter/INCREASE_ASYNC';
const DECREASE_ASYNC = 'counter/DECREASE_ASYNC';


function* increaseSaga(){
    yield delay(1000); // 1초를 기다립니다.
    yield put(increase()); // 특정 액션을 디스패치합니다.
}

function* decreaseSaga(){
    yield delay(1000); // 1초를 기다립니다.
    yield put(decrease()); // 특정 액션을 디스패치합니다.
}

export function* counterSaga(){
    //takeEvery는 들어오는 모든 액션에 대해 특정 작업을 처리해 줍니다.
    yield takeEvery(INCREASE_ASYNC, increaseSaga);
    //takeLatest는 기존에 진행중이던 작어이 있다면 취소 처리하고
    //가장 마지막으로 실행된 작업만 수행합니다.
    yield takeEvery(DECREASE_ASYNC, decreaseSaga);
}


// 이쪽 부분 중요
const initialState = 0; // 상태는 꼭 객체일 필요가 없습니다. 숫자도 작동해요.

const counter = handleActions(
    {
        [INCREASE]: state => state + 1,
        [DECREASE]: state => state - 1 
    },
    initialState
);

export default counter;