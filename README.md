# bili-mock 
mock server for front-end developer, fork from imock, support ssi and restful api

## Install

```bash
$ npm install bili-mock -g
```

## Usage

```bash
$ bili-mock -j json -b api
```

## Options

-j --json 可选，mock 文件目录，该目录下存放所有处理请求的 js

-b --base 可选，指定 mock 请求的 base path(若 base = api，则请求 mock 数据的地址为 http://localhost:{port}/api/{js-filename})

-p --port 可选，指定 mock server 端口号，默认 3000

-w --www 可选，指定静态服务器根目录(express.directory)，默认当前目录 

-R --RESTful 可选，支持RESTful API，请求中的斜杠需要对于文件名中的横杠（如/api/shop/1234 -> api-shop-id.js）


注: 

    1. www 与 base 可以是同层级或 www 是 base 的父目录，base 不能是 www 的父目录;
    2. 通常 base 为 /mock 或 /api;
    3. 前端 js 中请求地址为 http://localhost:3000/mock 或 http://localhost:3000/api


## mock 请求处理文件 example

filename: shop-id.js

```javascript
// request path: /mock/shop/1234
// request method: get
exports.get = function (req, res) {
    res.json(200, {
        code: 1,
        msg: {
            name: '小南国',
            shopId: 1234,
            level: 3
        }
    });
}

// request path: /mock/shop/1234 
// request method: put
exports.put = function (req, res) {
    res.json(200, {
        code: 1,
        msg: '修改成功'
    });
}
```

filename: shop.js

```javascript
// request path: /mock/shop
// request method: post
exports.post = function (req, res) {
    res.json(200, {
        code: 1,
        msg: '保存成功'
    });
}
```
