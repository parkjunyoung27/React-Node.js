import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import Library from './chapter_03/Library';
import Clock from './chapter_04/Clock';
import CommentList from './chapter_05/CommentList';
import NotificationList from './chapter_06/NotificationList';
import Accommodate from './chapter_07/Accommodate';
import ConfirmButton from './chapter_08/ConfirmButton';
import LandingPage from './chapter_09/LandingPage';
import AttendanceBook from './chapter_10/AttendanceBook';
import SignUp from './chapter_11/SignUp';
import Calculator from './chapter_12/Caculator';
import ProfileCard from './chapter_13/ProfileCard';
import DarkOrLight from './chapter_14/DarkOrLight';

// 만든 파일을 실제로 랜더링 하려면 index.js 파일을 수정해야됨 

//chapter_05
ReactDOM.render(
  <React.StrictMode>
    <ProfileCard/>    
  </React.StrictMode>,
  document.getElementById('root')
);

// chapter_04
// setInterval(()=> { 
//   ReactDOM.render(
//     <React.StrictMode>
//       <Clock/>
//     </React.StrictMode>,
//     document.getElementById('root')
//   );
// },1000); //1초마다 갱신 

// chapter_03
// ReactDOM.render(
//   <React.StrictMode>
//     <Library/>
//   </React.StrictMode>,
//   document.getElementById('root')
// )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
