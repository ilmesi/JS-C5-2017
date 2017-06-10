import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';
import css from './base.css';

const render = Component => {
  ReactDOM.render(
    <Home />,
    document.getElementById('root')
  )
}
render();

if(module.hot) {
  module.hot.accept();
}
