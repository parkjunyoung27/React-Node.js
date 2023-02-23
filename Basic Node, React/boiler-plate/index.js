const express = require('express') //package.json 에 있는 express 모듈
const app = express()
const port = 5000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// app이 5000에 listen 하면 메세지가 나옴
app.listen(port, () => { 
  console.log(`Example app listening on port ${port}`)
})