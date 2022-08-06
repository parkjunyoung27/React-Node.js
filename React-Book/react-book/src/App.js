import './App.css';
import { Component } from 'react';
//import Counter from './Counter';
//import Say from './say';
//import EventPractice from './EventPractice';
//import IterationSample from './IterationSample';
//import ValidationSample from './ValidationSample';
//import ValidationSample from './ValidationSample';
//import ScrollBox from './ScrollBox';
//import IterationSample from './IterationSample';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoundary from './ErrorBoundary';
import { useState } from 'react'
import Info from './Info'
import Average from './Average';

const App = () => {

  return <Average/>

  // const[visible, setVisible] = useState(false);
  // return(
  //   <div>
  //     <button onClick={()=> {
  //       setVisible(!visible);
  //     }}
  //     >
  //       {visible ? '숨기기' : '보이기'}
  //     </button>
  //     <hr />
  //     {visible && <Info/>}
  //   </div>
  // )

}

export default App;
