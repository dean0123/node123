# 1. 開始安裝設定 node.js 寫程式的環境

- 網頁在這裏 https://dean0123.github.io/node123/ 
- `google node.js` 並下載安裝 Node.js
- 完了 之後 測試  
```
$ node --version  (有顯示版本號碼 就對了)
$ npm --version   (有顯示版本號碼 就對了)
```
> npm = node package manager, 用來安裝node相關軟體 package

# 2. 寫個簡單的 node 程式. 
- `cd` 到工作目錄, 寫個簡單的檔案 叫做 `hello.js`,  
內容一行 `console.log("Hello !!")`, 然後執行 
```
$ node hello.js  就會看到 "Hello !!"
```


# 3. 弄個 Web Server 試試看
- 寫個檔案叫做 `server.js` 內容這樣
```
var http = require("http");
http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Web");
  response.end();
}).listen(8888);
```
- 然後 terminal 執行 
```
$ node server.js
```
- 再開本機 browser 看 `http://localhost:8888` 看到 Hello Web 網頁就對了




# 4. npm 裝 express Web Framework 寫一個 index.js
- why 爲什麼要 express , 因爲他是 node 中好用的 web framework
- how 安裝 
``` 
$ npm init                    (全部用預設, 會產生 package.json)
$ npm install express --save  (多了 node_modules)
``` 
- 加一個檔案 .gitignore 裏面放 `/node_modules/*` 這樣就不必把 這些檔案都放入 github 了, 沒必要, 因爲不會改

- 寫一個 index.js  
```
var express = require('express');
var app = express();  // 產生 Express app 物件 
// ----- 
app.get('/', function (req, res) {
   res.send('Hello World Express');
})
// -----
app.listen(8888, function () {
   console.log("Example app listening at http://localhost:8888")
})
```
- 然後 測試啓動後在 browser 上驗證
```
$ node index.js
```  


> 因爲常常要 control - C 重啓 node index.js   
>安裝使用 **nodemon** 可以自動偵測檔案變化, 重load, 開發上比較方便. (Mac 上可能要 `$ sudo npn i -g nodeman` )
```
$ npm install -g nodemon
$ nodemon index.js
```


# 6. 測試 get 透過 URL 傳 Param 給 Server
- 可以使用 URL 傳 參數 param 如: res.param.user
- 測 Json `index.js` 加入
```
app.get('/json', function (req, res) => {
   res.json({
       Result: "ok"
   });
})
```

# 7. 測試 post 透過 BODY 傳 JSON 給 Server
- 因爲 GET 只能由 URL 傳參數, POST 可以由 FORM BODY 傳 參數. 如 res.body.user
- ~~Post 要裝一 --$ npm install body-parser --save-- 新版已經不需要裝了, 包含在 express 裏面~~
- index.js 裏面加入
```
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.post('/login', (req, res)=>{   
    res.json({
        Post_result: "OK4",
        req_body: req.body
    });
   console.log("Got POST request and response --->",req.body);   
})
```
- 然後用 Postman 或 Chrome Postman(已經deprecated) 測試傳入跟回應
  1. 打開 postman 選 POST 網址打 http://localhost:8888/login
  2. 選 Body -> raw -> JSON
  3. 打入 Json 類似  {"user":"David"} 然後送出, 可以看到回應跟 console.log
- 也可以在Terminal 用 curl 指令來測試, 注意在Windows 上 JSON裏面的雙引號 \" 要 加 escape, 在 Linux/Mac 可以用 單引號包 JSON '{"user":"Amy"}'
```
$ curl -X POST -H "Content-Type: application/json" -d "{\"user\":\"Amy\"}" http://localhost:8888/login
```

# 8. 設定靜態的檔案  html, css, js, JPG 等
```
app.use(express.static('public'))
```
- datatable 測試在這 https://dean0123.github.io/node123/public/datatable.html
- echart 測試在這 https://dean0123.github.io/node123/public/echart.html
- chart 測試在這 https://dean0123.github.io/node123/public/chart.html

