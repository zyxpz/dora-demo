const Mock = require('mockjs');
const dowm = require('./mock/data/down');

module.exports = {
 'GET /down.json': Mock.mock(dowm),
};
