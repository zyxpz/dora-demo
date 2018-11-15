/**
 * babel-polyfill 为支持Generator函数 
 * 
 * 或在webpack.json 添加babel-plugin-transform-runtime 支持
 * 
 * effects redux-saga https://github.com/dvajs/dva-knowledgemap
 *                    http://leonshi.com/redux-saga-in-chinese/
 * 
 * subscriptions  异步数据初始化
 * 
 */

import { promiseAjax, asyncAjax } from '../services/promiseAjas';


export default {

  // 当前 Model 的名称
  namespace: 'Count',

  // 该 Model 当前的状态
  state: {
    value: 0,
    ajaxData: ''
  },

  // Action 处理器，处理同步动作
  reducers: {
    add(state, action) {
      return {
        value: state.value + 1
      };
    },
    minus(state, action) {
      return {
        value: state.value - 1
      };
    },
    getData(state, action) {
      return {
        ...state,
        data: action.data.ajaxData.data,
      }
    },
    asyncData(state, action) {
      return {
        ...state,
        asyncData: action.asyncData.data,
      }
    }
  },

  // Action 处理器，处理异步动作
  effects: {
    *save({ payload: { page = 1 } }, action) {
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
    },

    *getAjax({ }, action) {
      const y = yield action.call(promiseAjax, { url: 'getdata.json' });
      yield action.put({
        type: 'getData',
        data: {
          ajaxData: y
        },
      });
    },

    *asyncAjaxData({ }, action) {
      const z = yield action.call(asyncAjax, { url: 'getdata2.json' });
      yield action.put({
        type: 'asyncData',
        asyncData: z
      });
    }
  },
  subscriptions: {
    setup({ dispatch, history }) {
      // console.log(dispatch, history);
      return history.listen(({ pathname, search }) => {
        // console.log(pathname, search);
        // const query = queryString.parse(search);
        // if (pathname === '/users') {
        //   dispatch({ type: 'fetch', payload: query });
        // }
      });
    },
  },
}

function a({ page }) {
  console.log(page, 11);
  const y = 3;
  return page + y;

}