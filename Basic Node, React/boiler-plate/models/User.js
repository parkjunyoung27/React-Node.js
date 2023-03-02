const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

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

userSchema.methods.comparePassword = function(plainPawword, cb){

    //plainPassword 1234567 암호화된 비밀번호 
    bcrypt.compare(plainPawword, this.plainPawword, function(err, isMatch){
        if(err) return cb(err),
            cb(null, isMatch)
    })


}

// model의 이름과 스키마 넣어주기 
const User = mongoose.model('User', userSchema)

// 이 모델을 다른 파일에서도 쓰려면
module.exports = { User }