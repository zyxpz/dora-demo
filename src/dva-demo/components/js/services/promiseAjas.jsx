import { fetch } from './fetch';

// 异步promise
export function promiseAjax({ url }, cb) {
  return new Promise((resolve, reject) => {
    fetch({
      url,
      ok(d) {
        resolve(d);
      },
      fail() {
        reject('请求失败了');
      }
    });
  })
}

// 异步async
export async function asyncAjax({ url }) {
  return await new Promise((resolve, reject) => {
    fetch({
      url,
      ok(d) {
        resolve(d);
      },
      fail() {
        reject('请求失败了');
      }
    });
  });
}
