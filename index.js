const express = require('express') // express 호출
const app = express() // express 서버 실행
const port = 5000 // 서버 포트 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://test:1234qwer!@cluster0.aoyo5oi.mongodb.net/?retryWrites=true&w=majority', {
}).then(() => console.log('MongoDB Connected...'))
 .catch(err => console.log(err))

app.get('/', (req,res) => res.send('Hello World!')) // 루트 디렉토리오면 메세지 출력되게

// 5000번 포트에서 HTTP 서버실행
app.listen(port, () => console.log(`Example app listening on port ${port}!`))