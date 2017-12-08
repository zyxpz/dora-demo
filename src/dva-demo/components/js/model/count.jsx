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
      return {
        value: state.value + 1
      };
    },
    minus(state, action) {
      return {
        value: state.value - 1
      };
    },
  },

  // Action 处理器，处理异步动作
  effects: {

  }
}