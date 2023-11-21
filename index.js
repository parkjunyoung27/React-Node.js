const express = require('express') // express 호출
const app = express() // express 서버 실행
const port = 5000 // 서버 포트 5000
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const config = require('./config/key');
const { auth } = require('./middleware/auth');
const { User } = require("./models/User");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());


const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log('MongoDB Connected...'))
 .catch(err => console.log(err))

app.get('/', (req,res) => res.send('Hello World!!!')) // 루트 디렉토리오면 메세지 출력되게

app.post('/api/users/register', async (req, res) =>{
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

app.post('/api/users/login', (req, res) => {

    // console.log(req.body.email);
    // 요청된 이메일을 데이터베이스에서 있는지 찾는다.
    User.findOne({email: req.body.email})
    .then(user=>{
        if(!user){
            return res.json({
                loginSuccess: false,
                message: "제공된 이메일에 해당하는 유저가 없습니다."
            })
        }
        // 요청된 이메일이 데이터 베이스에 있다면 비밀번호가 맞는 비밀번호인지 확인.
        user.comparePassword(req.body.password ,(err, isMatch) => {
            // console.log(isMatch);
            if(!isMatch) return res.json({loginSuccess : false, message: "비밀번호가 틀렸습니다."})
            //비밀번호까지 맞다면 토큰을 생성하기
            user.generateToken((err, user) => {
                if(err) return res.status(400).send(err);
                // 토큰을 저장한다. 어디에? 쿠키? 로컬스토리지?
                res.cookie("x_auth", user.token) 
                .status(200)
                .json({ loginSuccess: true, userId: user._id})
            })
        })
    })   
    .catch((err)=>{
        return res.status(400).send(err);
    })
})

app.get('/api/users/auth', auth, (req, res) => {

    // 여기까지 미들웨어를 통해서 왔다는 건 Authentication이 True라는 말 
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth : true,
        email: req.user.email,
        name: req.user.name,
        lastname : req.user.lastnamem,
        role: req.user.role,
        image: req.user.image
    })
})

app.get('/api/users/logout', auth, (req, res) => {
    
    User.findOneAndUpdate({_id: req.user._id},
        { token : ""}
        ,(err, user) => {
            if(err) return res.json({success : false, err});
            return res.status(200).send({
                success: true
            })
        })
})

// 5000번 포트에서 HTTP 서버실행
app.listen(port, () => console.log(`Example app listening on port ${port}!`))