const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;  
const jwt = require('jsonwebtoken');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email:{
        type: String,
        trim: true,
        unique: 1
    },
    password:{
        type: String,
        minlength: 5,
        maxlength: 300
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

//저장하기전에 함수실행을 한다
userSchema.pre('save', function( next ){
    var user = this; //위에서 가져온 password를 가져올수있음

     if(user.isModified('password')){
            //비밀번호를 암호화 시킨다.
            bcrypt.genSalt(saltRounds, function(err, salt){
            if(err) return next(err) // next하면 바로 다음함수로 넘어감
            bcrypt.hash(user.password, salt, function(err, hash){ //salt 제대로 생성시
                if(err) return next(err)
                user.password = hash
                next()
            })
        })
     }else{ //이게 없으면 바꾸지않는경우 넘어갈수없다.
        next()
     }
})

userSchema.methods.comparePassword = function(plainPassword, cb){
    //plainPassword 1234567 ==  암호화된 비밀번호 같은지 체크를 해야됨 
    //plainPawword를 암호화해서 같은지 확인해야됨 (복호화 할 순 없음)

    bcrypt.compare(plainPassword, this.password, function(err, isMatch){
        if(err) return cb(err)
        cb(null, isMatch); //error가 없으면 true
    })

}

userSchema.methods.generateToken = function(cb){

    var user = this;

    //jsonwebtoken을 이용해서 token을 생성하기 
    var token = jwt.sign(user._id.toHexString(), 'secretToken') //db아이디 
    //user._id + 'secretTOken' = token

    user.token = token
    user.save(function(err, user){
        if(err) return cb(err) 
        cb(null, user)
        // 토근을 저장한다. 어디에? 쿠키, 로컬스토리지 //어디가 안전한지에 대한 정답은 없다 
        // 쿠키에 저장한다. 
    })
}

userSchema.statics.findByToken = function(token, cb){
    var user = this;

    //토큰을 decode 한다.
    jwt.verify(token, 'secretToken', function(err, decoded){
        //유저아이디를 이용해서 유저를 찾은 다음에 
        //클라이언트에서 가져온 token과 DB에 보관된 토큰이 일치하는지 확인 

        user.findOne({"_id": decoded, "token": token}, function(err, user){
            if(err) return cb(err);
            cb(null, user)
        })
    })
}

const User = mongoose.model('User', userSchema)  // 모델화 

module.exports = { User }  // 다른곳에서도 쓸 수 있게 export 


  




