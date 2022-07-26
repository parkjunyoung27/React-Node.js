import React,{ useEffect } from 'react'
import axios from 'axios';

function LandingPage() {

  useEffect(() => {
    axios.get('/api/hello') // 서버로 보낸다. (index.js)
    .then(response => console.log(response.data)) // 돌아오는 response를 보여준다.
  },[])

  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center'
      , width: '100%', height: '100vh'
    }}>
      <h2>시작 페이지</h2>
    </div>
  )
} 

export default LandingPage