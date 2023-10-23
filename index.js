const express = require('express') // express 호출
const app = express() // express 서버 실행
const port = 5000 // 서버 포트 5000
const bodyParser = require('body-parser');
const { User } = require("./models/User");

// application/x-www-form-urlencoded 서버에서 분석해서 가져올 수 있게 
app.use(bodyParser.urlencoded({extended: true}));
// application/json으로
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://test:1234qwer!@cluster0.aoyo5oi.mongodb.net/?retryWrites=true&w=majority', {})
 .then(() => console.log('MongoDB Connected...'))
 .catch(err => console.log(err))

app.get('/', (req,res) => res.send('Hello World!!!')) // 루트 디렉토리오면 메세지 출력되게

app.post('/register', async (req, res) =>{
    //회원 가입할 때 필요한 정보들을 client에서 가져오면 그것들을 데이터베이스에 넣어준다.
    const user = new User(req.body)

    await user 
    .save() //mongoDB에서 오는 정보
    .then(() => {
        res.status(200).json({
            success: true,
        });
    })
    .catch((err) => {
        console.error(err);
        res.json({
            success: false,
            err: err,
        });
    });
});

// 5000번 포트에서 HTTP 서버실행
app.listen(port, () => console.log(`Example app listening on port ${port}!`))