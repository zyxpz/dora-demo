import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//redux
import { bindActionCreators } from 'redux';
import * as creators from '../actions/home';
import { connect } from 'react-redux';

// import '../css/Home.scss';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleAdd = this.handleAdd.bind(this);
    this.handleReduce = this.handleReduce.bind(this);
  }
  handleAdd() {
    this.props.actions.countAdd();
  }
  handleReduce() {
    this.props.actions.countReduce();
  }
  render() {
    return (
      <div>
        <span onClick={this.handleAdd}>+</span>
        当前数字{this.props.home.count}
        <span onClick={this.handleReduce}>-</span>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    home: state.home
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(creators, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Container);