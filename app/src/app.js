import React, { Component } from 'react';
import { Provider } from 'react-redux';
import App from './containers/list';
import store from './store';

export default class Main extends Component {
  render() {
    return (
      <Provider store={store} >
        <App />
      </Provider>
    );
  }
}
