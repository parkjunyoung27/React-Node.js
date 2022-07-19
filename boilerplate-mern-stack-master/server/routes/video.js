const express = require('express');
const router = express.Router();
//const { Video } = require("../models/Video");

const { auth } = require("../middleware/auth");
const multer = require("multer");


// STROAGE MULTER CONFIG
// 비디오 저장 프로세스 //중요
let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // 밖에 upload 폴더로 저장 
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_${file.originalname}`); //파일 이름으로 저장 
    },
    fileFilter: (req, file, cb) => {
        const ext = path.extname(file.originalname)
        if(ext !== '.mp4' || ext !== '.png'){ //mp4만 올림 
            return cb(res.status(400).end('only jpg, png, mp4 is allowed'), false);
        }
        cb(null,true)
    }
});

const upload = multer({storage: storage }).single("file"); // 파일은 우선 하나만 저장 

//=================================
//             video
//=================================

router.post('/uploadfiles', (req, res) => { //req를 통해서 파일을 받는다. 

    //비디오를 서버에 저장한다.
    upload(req, res, err => {
        if(err){ //만약 error가 나면  
            return res.json({ success: false, err }) // err를 나타내면 success를 false로 보냄
        }
        return res.json({ success: true, url: res.req.file.path, filename: res.req.file.filename})
    })

})



module.exports = router;
