/**
 * babel-polyfill 为支持Generator函数 
 * 
 * effects redux-saga https://github.com/dvajs/dva-knowledgemap
 *                    http://leonshi.com/redux-saga-in-chinese/
 * 
 */
import 'babel-polyfill';

export default {

  // 当前 Model 的名称
  namespace: 'Count',

  // 该 Model 当前的状态
  state: {
    value: 0,
  },

  // Action 处理器，处理同步动作
  reducers: {
    add(state, action) {
      console.log(state, action);
      return {
        value: state.value + 1
      };
    },
    minus(state, action) {
      console.log(state, action, 2);
      return {
        value: state.value - 1
      };
    },
  },

  // Action 处理器，处理异步动作
  effects: {
    *save({ payload: { page = 1 }  }, action) {
      console.log(page);
      const xx = yield action.call(a, {
        page
      });

      yield action.put({
        type: 'minus',
        data: {
          page: xx
        }
      })
    }
  }
}

function a({page}) {
  console.log(page, 11);
  const y = 3;
  return page + y;

}