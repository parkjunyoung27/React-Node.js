const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, // email 사이에 space를 없앰
        unique: 1
    },
    password:{
        type: String,
        minlength: 5
    },
    lastname:{
        type: String,
        maxlength: 50
    },
    role:{
        type: Number,
        default: 0
    },
    image: String,
    token:{
        type: String
    },
    tokenExp:{
        type: Number
    }
})

// save 실행되기 전에 하는 작업 설정
userSchema.pre('save',function(next){
    var user = this; // userShema를 가리킴

    if(user.isModified('password')){
        // 비밀번호를 암호화 시킨다.
        bcrypt.genSalt(saltRounds,function(err, salt){
            if(err) return next(err)
            
            bcrypt.hash(user.password, salt, function(err, hash){
                if(err) return next(err)
                user.password = hash
                next() // 다음으로 넘어간다
            })
        })
    }else{
        next()
    }
})

userSchema.methods.comparePassword = function(plainPassword, cb){

    //plainPassword 1234567 암호화된 비밀번호 
    bcrypt.compare(plainPassword, this.password, function(err, isMatch){
        if(err) return cb(err);
            cb(null, isMatch);
    })
}

userSchema.methods.generateToken = function(cb){
    
    var user = this;
    //jsonwebtoken을 이용해서 token을 생성하기
    console.log('user._id', user._id);
    var token = jwt.sign(user._id.toHexString(), 'secretToken')

    user.token = token
    user.save(function(err, user){
        if(err) return cb(err)
        cb(null, user)
    }) 

    // user._id + 'secretToken' = token
}

// model의 이름과 스키마 넣어주기 
const User = mongoose.model('User', userSchema)

// 이 모델을 다른 파일에서도 쓰려면
module.exports = { User }