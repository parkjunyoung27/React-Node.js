if(process.env.NODE_ENV === 'production'){ //process.env가 환경정보 배포한 후에는 production  
    module.exports = require('./prod'); // 이 파일에서 가져옴
} else {
    module.exports = require('./dev'); // dev에서 가져옴
}