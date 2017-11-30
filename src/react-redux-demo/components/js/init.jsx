import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Home from './containers/home';
import '../css/init.less';

/**
 * redux
 */
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers/index';

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

class Init extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

ReactDom.render(
  <Init />,
  document.getElementById('root')
)