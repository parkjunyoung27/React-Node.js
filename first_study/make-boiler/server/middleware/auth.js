const { User } = require("../models/User");

let auth = (req, res, next) => {

    //인증 처리를 하는곳

    //클라이언트 쿠키에서 토큰을 가져온다. //cookie-parser이용
    let token = req.cookies.x_auth; // 쿠키스로 가져와야됨** 중요

    //토큰을 복호화 한후 유저를 찾는다.
    User.findByToken(token, (err,user) => {
        if(err) throw err;
        if(!user) return res.json({isAuth: false, error:true})

        //token과 user를 request에 넣어줌으로써 사용할 수 있게 하기위해 
        req.token = token;
        req.user = user;
        next(); //다음으로 넘어갈 수 있게  
    })

    //유저가 있으면 인증 0kay

    //유저가 없으면 인증 No!
}

module.exports = { auth };