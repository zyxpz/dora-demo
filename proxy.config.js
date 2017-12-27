const Mock = require('mockjs');
const dowm = require('./mock/data/down');

module.exports = {
  'GET /down.json': Mock.mock(dowm),

  'GET /getdata.json': function (req, res) {
    res.jsonp({
      stat: 'ok',
      data: {
        one: '我是请求回来的hello',
        tow: '我是请求回来的promise'
      }
    }, '_callback');
  },

  'GET /getdata2.json': function (req, res) {
    res.jsonp({
      stat: 'ok',
      data: {
        one: '我是请求回来的async',
      }
    }, '_callback');
  }
};
