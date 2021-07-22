//var server = require("./server");  // 呼叫 自己寫的 server.js 物件
//server.start();

const express = require('express'); 
const app = express();  // 產生 Express app 物件 
 
// ==== 1 GET : HELLO WORL  =====
app.get('/',  (req, res)=>{  // req 是用戶請求, res 是回應
    res.send('Hello World Express 4');
    console.log("->", req.url)
 })

// === 2. SHOW JSON ====
app.get('/json', function (req, res) {  // 返回JSON 格式, 給 API 的呼叫 
    res.json({
        result_json: "okss"
    });
    console.log("->", req.url)
})
  
// ==== 3. POST ====

// For Express version less than 4.16.0   Depredecaded
// ------------------------------------
//const bodyParser = require('body-parser');
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());
// May NOT need to NPM INSTALL BODY-PARSER 

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.post('/login', (req, res)=>{   
    res.json({
        Post_result: "OK4",
        req_body: req.body
    });
   console.log("Got POST request and response --->",req.body);   
})

// Static files like HTML. CSS, JPG, JS. ...
app.use(express.static('public'))

app.listen(8888, function () {
   console.log("Example app listening at http://localhost:8888")
})