const express = require('express')
const app = express();
const http = require('http').Server(app);

app.get('/randomNumber', (req, res)=>{
  res.send(`${Math.random()}`);
})

http.listen(8000, ()=>{
  console.log('app running...');
});
