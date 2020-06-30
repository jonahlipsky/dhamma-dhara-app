import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';

export default ({ store }) => {
  return(
    <Provider store={store}>
      <HashRouter>
        <React.StrictMode><App/></React.StrictMode>
      </HashRouter>
    </Provider>
  )
};