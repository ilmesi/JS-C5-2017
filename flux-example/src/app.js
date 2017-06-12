import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import css from './assets/base.css';

const render = Component => {
  ReactDOM.render(
    <AppContainer />,
    document.getElementById('root')
  )
}
render();

if(module.hot) {
  module.hot.accept();
}
