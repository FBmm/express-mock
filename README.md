# Express-mock

极简的基于 express 的 mock 服务器，主要用于前端模拟数据创建。

## 开始

```bash
# 克隆项目
git clone 

# 进入项目
cd express-mock

# 安装依赖
npm i

# 启动mock
npm run mock
```

浏览器访问测试接口 [http://localhost:8010/test/get](http://localhost:8010/test/get)

## 扩展

### 引入 lodash

使用lodash可以更容易生成各种模拟数据 [lodash文档](https://www.lodashjs.com/)

```bash
# 引入 lodash 依赖
npm i lodash -S
```

使用 lodash API - random 生成随机数

```js
// js 引入 random
const random = require("lodash/random")
module.exports = function (router) {
  // 测试接口 人员列表
  router.get('/test/user/list', (req, res) => {
    const users = ['张珊','李斯','王敏']
    let data = []
    for(let i = 0; i < 20; i++) {
      data.push({
        id: random(10000, 20000),
        name: users[random(0, users.length - 1)]
      })
    }
    res.send({
      code: 0,
      data,
    });
  })
}
```