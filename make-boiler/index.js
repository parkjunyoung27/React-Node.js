const express = require('express') // 1.express 모듈 가져오기 
const app = express() // 2.새로운 express앱 만들기
const port = 5000 // 3.포트 빽서버 

const mongoose = require('mongoose')

mongoose.connect('DB주소')
 .then(()=> console.log('MongDB Connected...')) //연결이 잘 되면
 .catch(err => console.log(err)); //오류나면 잡는용도

        //루트디렉토리                   Hello World 뜨게 
app.get('/', (req, res) => res.send('Hello World'))  // Hello World 
 
// 출력
app.listen(port, console.log(`Example app listening on port ${port}!`))
