import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from './root';
import configuredStore from './store/store';

import * as serviceWorker from './serviceWorker';

document.addEventListener('DOMContentLoaded', () => {
  let store = configuredStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
