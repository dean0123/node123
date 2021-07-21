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
- 寫個檔案叫做 `server.js` 內容如下
```
var http = require("http");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello Web");
  response.end();
}).listen(8888);
```
