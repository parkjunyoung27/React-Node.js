const express = require('express') // 1.express 모듈 가져오기 
const app = express() // 2.새로운 express앱 만들기
const port = 5000 // 3.포트 빽서버 
const bodyParser = require('body-parser');

const config = require('./config/key');

//application/x-www-form-urlencoded 서버에서 받아온것을 분석해서 가져올 수 있게 해주는 것 
app.use(bodyParser.urlencoded({extended: true}));
//application/json
app.use(bodyParser.json());

const { User } = require("./models/User");
const mongoose = require('mongoose')

<<<<<<< HEAD
mongoose.connect(config.mongoURI)
=======
mongoose.connect('DB주소')
>>>>>>> 9cb0fe997a8aef0e8167357a1dde54db35a31da2
 .then(()=> console.log('MongDB Connected...')) //연결이 잘 되면
 .catch(err => console.log(err)); //오류나면 잡는용도

        //루트디렉토리                   Hello World 뜨게 
app.get('/', (req, res) => res.send('Hello World ~ 안녕하세요'))  // Hello World 

//postman 에서 확인하기 
app.post('/register',(req, res)=>{
        //회원 가입 할때 필요한 정보들을 client에서 가져오면 
        //그것들을 데이터베이스에 넣어준다. 
        
        /*   {
                id:"hello",
                password:"123"
              }*/


        const user = new User(req.body)//정보들을 넣기위해서 req.body 
        //위에 처럼 들어와서 넣어줄수있는게 body.parser때문
        user.save((err, userInfo)=> {
                if(err) return res.json({success: false, err})
                return res.status(200).json({
                        success: true
                })
        })

})

 
// 출력
app.listen(port, console.log(`Example app listening on port ${port}!`))
