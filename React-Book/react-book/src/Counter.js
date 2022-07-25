import { Component } from 'react';

class Counter extends Component{
    constructor(props){ // 생성자 호출시 
        super(props);//반드시 호출  // 현재 클래스형 컴포넌트가 상속받고 있는 리액트의 component 클래스가 지닌 생성자 함수를 호출해줌 
        //state의 초깃값 설정하기
        this.state = {
            number: 0,
            fixedNumber: 0 
        };
    }
    render(){
        const { number, fixedNumber } = this.state; // state를 조회할 때는 this.state로 조회합니다.
        return (
            <div>
                <h1>{number}</h1>
                <button
                //onClick를 통해 버튼이 클릭되었을 때 호출할 함수를 지정합니다.
                onClick={()=>{
                    //this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다.
                    this.setState(
                        {
                        number: number + 1
                        },
                        () => {
                          console.log('방금 setState가 호출되었습니다.');
                          console.log(this.state);
                        }
                    );
                }}
            >
                +1
                </button>
            </div>
        )
    }
}

export default Counter;