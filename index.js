//var server = require("./server");  // 呼叫 自己寫的 server.js 物件
//server.start();

var express = require('express'); 
var app = express();  // 產生 Express app 物件 
 
app.get('/', function (req, res) {  // req 是用戶請求, res 是回應
    res.send('Hello World Express');
    console.log("->", req.url)
 })
 app.get('/blog', function (req, res) {  // 重訂路徑 不想讓用戶使用, 
    res.redirect('/');
    console.log("->", req.url)
 })
 app.get('/json', function (req, res) {  // 返回JSON 格式, 給 API 的呼叫 
    res.json({
        result_json: "okss"
    });
    console.log("->", req.url)
 })
  
 app.get('/login', function (req, res) {   
    res.json({
        Post_result: "OK2"
    });
    console.log(req.body)
 })

app.get('/setup', function (req, res) {    // 其他路徑 回應 
    res.send('This is Setup  Paths');
 })
 

app.listen(8888, function () {
   console.log("Example app listening at http://localhost:8888")
})