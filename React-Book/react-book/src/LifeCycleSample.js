import { Component } from 'react';

class LifeCycleSample extends Component {
    state = {
        number: 0,
        color: null,
    }

    myRef = null; // ref를 설정할 부분

    constructor(props){
        super(props);
        console.log('constructor');
    }

    // getDerivedStateFromProps => Props에 받아올값을 State에 동기화
    static getDerivedStateFromProps(nextProps, prevState){
        console.log('getDerivedStateFromProps');
        if(nextProps.color !== prevState.color){
            return{color: nextProps.color};
        }
    }

    //랜더링 후 비동기 작업 
    componentDidMount(){
        console.log('componentDidMound');
    }

    //리랜더링 여부 결정 
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate', nextProps, nextState);
        //숫자의 마지막 자리가 4면 리랜더링하지 않습니다.
        return nextState.number % 10 !== 4;
    }

    //컴포넌트를 돔에서 제거시 사용
    componentWillUnmount(){
        console.log('componentWillmount');
    }

    handleClick = () => {
        this.setState({
            number: this.state.number + 1
        });
    }

    //업데이트 직전값 참고시 사용
    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('getSnapshopBeforeUpdate');
        if(prevProps.color !== this.props.color){
            return this.myRef.style.color;
        }
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('componentDidUpdate', prevProps, prevState);
        if(snapshot){
            console.log('업데이트되기 직전 색상 : ', snapshot);
        }
    }

    render(){
        console.log('render');

        const style = {
            color: this.props.color
        };

        return(
            <div>
                <h1 style={style} ref={ref => this.myRef=ref}>
                    {this.state.number}
                </h1>
                <p>color: {this.state.color}</p>
                <button onClick={this.handleClick}>
                    더하기
                </button>
            </div>
        )
    }
}

export default LifeCycleSample;