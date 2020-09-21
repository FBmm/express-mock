// const random = require("lodash/random")
module.exports = function (router) {
  // 测试请求: localhost:8010/test/get
  router.get('/test/get', (req, res) => {
    res.send({
      code: 0,
      data: '服务器请求成功'
    });
  })
  // 测试接口 人员列表
  // router.get('/test/user/list', (req, res) => {
  //   const users = ['张珊','李斯','王敏']
  //   let data = []
  //   for(let i = 0; i < 20; i++) {
  //     data.push({
  //       id: random(10000, 20000),
  //       name: users[random(0, users.length - 1)]
  //     })
  //   }
  //   res.send({
  //     code: 0,
  //     data,
  //   });
  // })
}
