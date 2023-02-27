const express = require('express') //package.json 에 있는 express 모듈
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const { User } = require("./models/User");

//aplication/x-www-form-urlencoded\
app.use(bodyParser.urlencoded({extended: true}))

//aplication/json
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://jyp:1234qwer!@boilerplate.ynbvpya.mongodb.net/?retryWrites=true&w=majority').then(() => console.log('MongoDB Connected...'))
.catch(err => console.log(err))


app.get('/', (req, res) => { res.send('Hello World! ~ 자동재시작!') })

// 회원가입 위한 Route 만들기 
app.post('/register', (req, res) =>{ 
  // 회원 가입 할때 필요한 정보들을 client에서 가져오면
  // 그것들을 데이터 베이스에 넣어준다.
  const user = new User(req.body)

  user.save((err, userInfo) => {
    if(err) return res.json({ success: false, err }) // 통신이 안되면
    return res.status(200).json({ // 통신이 되면
      success: true
    })
  }) 
})

// app이 5000에 listen 하면 메세지가 나옴
app.listen(port, () => { console.log(`Example app listening on port ${port}`) })