# 1. 開始安裝設定 node.js 寫程式的環境

- `google node.js` 並下載安裝 Node.js
- 完了 之後 測試  
```
$ node --version  (有顯示版本號碼 就對了)
$ npm --version   (有顯示版本號碼 就對了)
```
  npm = node package manager, 用來安裝node相關軟體 package

# 2. 寫個簡單的 node 程式. 
- `cd` 到工作目錄, 寫個簡單的檔案 叫做 `hello.js`, 內容一行 `console.log("Hello !!")`, 然後執行 
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
- 然後 執行
```
$ node server.js
```
- 再開本機 browser 看 `http://localhost:8888` 看到 Hello Web 網頁就對了

# 4. 裝 express
- why 爲什麼要 express , 因爲他是 node 中好用的 web framework
- how 安裝 
``` 
$ npm init                    (全部用預設, 會產生 package.json)
$ npm install express --save  (多了 node_modules)
``` 
- 加一個檔案 .gitignore 裏面放 `/node_modules/*` 這樣就不必把 這些檔案都放入 github 了, 沒必要, 因爲不會改

# 5. 寫一個 index.js  內容如下
```
var express = require('express');
var app = express();  // 產生 Express app 物件 
 
app.get('/', function (req, res) {
   res.send('Hello World Express');
})
 
app.listen(8888, function () {
   console.log("Example app listening at http://localhost:8888")
})
```
然後 測試啓動後在 browser 上驗證
```
$ node index.js
``` 
