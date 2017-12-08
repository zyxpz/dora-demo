import React, { Component } from 'react';
import { connect } from 'dva';
import '../../css/index.less';

// class DPlus extends Component {
//   render() {
//     console.log(this.props, this.state, 11);
//     return (
//       <h1>{this.props.value}</h1>
//     );
//   }
// }

// UI 组件
function Count({ dispatch, value }) {
  return (
    <div className="box">
      <h1>{value}</h1>
      <button onClick={() => dispatch({ type: 'Count/add' })}>+</button>
      <button onClick={() => dispatch({ type: 'Count/minus' })}>-</button>
    </div>
  );
}

// const Count = ({value}) => <h1>{value}</h1>;

// 定义一个 mapStateToProps 函数。该函数返回一个对象，建立 State 到 Props 的映射关系。
function mapStateToProps(state) {
  return {
    props: state.Count,
    value: state.Count.value
  };
}

// 使用 connect 方法建立 Count 组件与 State 之间的联动。
export default connect(mapStateToProps)(Count);