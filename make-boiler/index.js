const express = require('express') // 1.express 모듈 가져오기 
const app = express() // 2.새로운 express앱 만들기
const port = 5000 // 3.포트 빽서버 
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const config = require('./config/key');

//application/x-www-form-urlencoded 서버에서 받아온것을 분석해서 가져올 수 있게 해주는 것 
app.use(bodyParser.urlencoded({extended: true}));
//application/json
app.use(bodyParser.json());
app.use(cookieParser());

const { User } = require("./models/User");
const mongoose = require('mongoose')

mongoose.connect(config.mongoURI)

 .then(()=> console.log('MongDB Connected...')) //연결이 잘 되면
 .catch(err => console.log(err)); //오류나면 잡는용도

        //루트디렉토리                   Hello World 뜨게 
app.get('/', (req, res) => res.send('Hello World ~ 안녕하세요'))  // Hello World 

//postman 에서 확인하기 
app.post('/register',(req, res) => { 
        //회원 가입 할때 필요한 정보들을 client에서 가져오면 
        //그것들을 데이터베이스에 넣어준다. 
        const user = new User(req.body)//정보들을 넣기위해서 req.body 
        //아래 save 하기전에 비밀번호 암호화하기 

        //위에 처럼 들어와서 넣어줄수있는게 body.parser때문
        user.save((err, userInfo) => {
                if (err) return res.json({ success: false, err })
                return res.status(200).json({
                        success: true
                })
        })

})

app.post('/login', (req,res) => {

    // 요청된 이메일을 데이터베이스에서 있는지 찾는다. 
    User.findOne({ email: req.body.email }, (err, user) => {
        if(!user){
            return res.json({
                loginSuccess: false,
                message: "제공된 이메일에 해당하는 유저가 없습니다."
            })
        }
        // 이메일이 있다면 비밀번호가 같은지 확인

        user.comparePassword(req.body.password, (err, isMatch) => {
            if(!isMatch)
                return res.json({ loginSuccess: false, message: "비밀번호가 틀렸습니다."})
        
            // 비밀번호까지 같다면 Token 생성
            user.generateToken((err, user) => {
                if(err) return res.status(400).send(err);
 
                // 토근을 저장한다. 어디에? 쿠키, 로컬스토리지 //어디가 안전한지에 대한 정답은 없다 
                // 쿠키에 저장한다. 
                res.cookie("x_auth",user.token)
                .status(200)
                .json({loginSuccess: true, userId: user._id})
             })
        })
    })
}) 


// 출력
app.listen(port, console.log(`Example app listening on port ${port}!`));
