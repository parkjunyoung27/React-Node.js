import { Component, useReducer } from 'react';

function reducer(state, action){
    //action.type에 따라 다른 작업 수행
    switch(action.type){
        case 'INCREMENT':
            return { value: state.value + 1 };
        case 'DECREMENT':
            return { value: state.value - 1 };
        default : 
        // 아무것도 해당되지 않을 때 기존 상태 반환             
            return state;
    }
}

const Counter = () => {
    const[state, dispatch] = useReducer(reducer, {value : 0});

    return(
        <div>
            <p>
                현재 카운터 값은 <b>{state.value}</b>입니다.
            </p>
            <button onClick={() => dispatch({ type: 'INCREMENT'})}>+1</button>
            <button onClick={() => dispatch({ type: 'DECREMENT'})}>-1</button>
        </div>
    )
};


// class Counter extends Component{
//     constructor(props){ // 생성자 호출시 
//         super(props);//반드시 호출  // 현재 클래스형 컴포넌트가 상속받고 있는 리액트의 component 클래스가 지닌 생성자 함수를 호출해줌 
//         //state의 초깃값 설정하기
//         this.state = {
//             number: 0,
//             fixedNumber: 0 
//         };
//     }
//     render(){
//         const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회합니다.
//         return (
//             <div>
//                 <h1>{number}</h1>
//                 <button
//                 //onClick를 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
//                 onClick={()=>{
//                     //this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
//                     this.setState(
//                         {
//                         number: number + 1
//                         },
//                         () => {
//                           console.log('방금 setState가 호출되었습니다.');
//                           console.log(this.state);
//                         }
//                     );
//                 }}
//             >
//                 +1
//                 </button>
//             </div>
//         )
//     }
// }

export default Counter;