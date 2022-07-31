import './App.css';
import { Component } from 'react';
//import Counter from './Counter';
//import Say from './say';
//import EventPractice from './EventPractice';
//import IterationSample from './IterationSample';
//import ValidationSample from './ValidationSample';
//import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';


class App extends Component{
  render(){
    return(
      <div>
        <ScrollBox ref={(ref) => this.ScrollBox=ref}/>
        <button onClick={() => this.ScrollBox.scrollToBottom()}>
          맨 밑으로
        </button>
        {/* <ValidationSample/> */}
      </div>
    );
  }
}

export default App;
