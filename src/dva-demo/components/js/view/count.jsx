import React, { Component } from 'react';
import { connect } from 'dva';
import '../../css/index.less';

// export const App = connect(({ count }) => ({
//   count
// }))(function (props) {
//   return (
//     <div>
//       <h2>{props.count}</h2>
//       <button key="add" onClick={() => { props.dispatch({ type: 'count/add' }) }}>+</button>
//       <button key="minus" onClick={() => { props.dispatch({ type: 'count/minus' }) }}>-</button>
//     </div>
//   );
// })

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="box">
        <h2>{this.props.count}</h2>
        <button key="add" onClick={() => { this.props.dispatch({ type: 'count/add' }) }}>+</button>
        <button key="minus" onClick={() => { this.props.dispatch({ type: 'count/minus' }) }}>-</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count,
  };
}

export default connect(mapStateToProps)(App);