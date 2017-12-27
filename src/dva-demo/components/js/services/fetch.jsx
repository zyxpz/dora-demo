function fetch(opts = {}) {
  let url = opts.url,
    data = opts.data || {},
    type = opts.type || 'GET',
    timeout = opts.timeout || '3000',
    cache = opts.cache || false,
    ok = opts.ok,
    fail = opts.fail,
    complete = opts.complete;
  $.ajax({
    url,
    data,
    type,
    timeout,
    cache,
    dataType: 'jsonp',
    jsonp: '_callback',
    success(d = {}) {
      if (d.stat === 'ok') {
        ok && ok(d);
      } else {
        fail && fail();
      }
    },
    error() {
      fail && fail();
    },
    complete() {
      complete && complete();
    }
  })
}

module.exports = {
  fetch,
}