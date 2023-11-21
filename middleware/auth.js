const { User } = require('../models/User.js');

let auth = (req, res, next) => {

    // 인증 처리를 하는 곳

    // 클라이언트 쿠키에서 토큰을 가져온다.
    let token = req.cookies.x_auth;

    // 토큰을 복호화 한 후 유저를 찾는다. 
    User.findByToken(token, (err, user) =>{
        if(err) throw err;
        if(!user) return res.json({ isAuth: false, error: true })
        
        // 유저가 있으면 인증 Okay
        // 유저가 없으면 인증 No!
        req.token = token;
        req.user = user;
        next(); // next하는 이유는 미들웨어에서 계속 갈 수 있게 안머물도록
    })


}

// 다른 파일에서 쓸 수 있게 선언해야됨
module.exports = { auth };