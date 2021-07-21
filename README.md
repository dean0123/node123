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
