import { Component } from 'react';

class EventPractice extends Component {

    state = {
        username: '',
        message: ''
    }

    //함수 따로 만들기 
    // constructor(props){
    //     super(props);
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // }

    handleChange = (e) => { //=>를 하게됨으로써 constructor 안해도된다. transform-class-properties 문법 
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleClick = () => {
        alert(this.state.username + ': ' + this.state.message);
        this.setState({
            username: '',
            message: ''
        });
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }

    //render 메서드 안에 작성
    render(){
        return(
            <div>
                <h1>이벤트 연습</h1> 
                <input
                    type="text" name="username" placeholder="사용자명"
                    value={this.state.username}
                    // onChange={(e) => {console.log(e)}}
                    onChange={this.handleChange}
                />
                <input
                    type="text" name="message" placeholder="아무거나 입력해 보세요"
                    value={this.state.message}
                    // onChange={(e) => {console.log(e)}}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                
                {/* <button onClick={
                    () => {
                        alert(this.state.message);
                        this.setState({
                            message: ''
                        });
                    }}>
                        확인
                </button> */}

                <button onClick={this.handleClick}>확인</button>
                
            </div>
        );
    }
}

export default EventPractice;