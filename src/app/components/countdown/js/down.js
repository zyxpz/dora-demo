'use strict';

export default class Countdown {
  constructor(opts = {}) {
    this.attrs = {
      warp: opts.warp,
      url: opts.url || '',
      down: opts.down || 60,
      run: true,
    }
    Object.assign(this.attrs, opts);
    this.findEl();
  }

  findEl() {
    const $ele = document.querySelector(`.${this.get('warp')}`);
    if (!$ele) {
      console.warn('warp is empry');
      return;
    } else {
      this.set('$ele', $ele);
      this.init();
    }
  }

  init() {
    const $doBox = this.get('$ele').firstElementChild;
    this.set('$doBox', $doBox);
    if ($doBox) {
      this.handleClick();
    }
  }

  handleAjax(opts = {}) {
    const url = opts.url,
      data = opts.data,
      type = opts.type || 'GET',
      dataType = opts.dataType || '',
      ok = opts.ok,
      fail = opts.fail;
    $.ajax({
      url,
      data,
      type,
      dataType,
      success(d) {
        if (d.stat === 'ok') {
          ok && ok(d);
        } else {
          fail && fail();
        }
      },
      error() {
        fail && fail();
      }
    });
  }

  handleClick() {
    const $clickBox = this.get('$ele');
    const self = this;
    $clickBox.addEventListener('click', (e) => {
      e.preventDefault();
      this.handleAjax({
        url: this.get('url'),
        ok(d) {
          if ($clickBox.getAttribute('disabled') === 'false') {
            return;
          }
          $clickBox.setAttribute('disabled', false);
          $clickBox.style.backgroundColor = 'blue';
          self.handleIntervalText();
        },
        fail(d) {
          console.log('请求失败');
        }
      });
    })
  }

  handleInterval() {
    const interval = setInterval(() => {
      if (this.get('down') > 1 && this.get('down') <= 60) {
        this.set('down', this.get('down') - 1);
        this.get('$doBox').innerText = `倒计时${this.get('down')}`;
      } else {
        this.set('down', 60);
        interval && clearInterval(interval);
        this.get('$ele').style.backgroundColor = 'red';
        this.get('$ele').setAttribute('disabled', true);
        this.get('$doBox').innerText = `验证码`;
      }
    }, 1000);
  }

  handleIntervalText() {
    this.get('$doBox').innerText = `倒计时${this.get('down')}`;
    this.handleInterval();
  }

  set(key, val) {
    return this.attrs[key] = val;
  }

  get(key) {
    return this.attrs[key];
  }
}