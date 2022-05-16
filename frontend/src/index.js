import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import Home from './containers/home';
import store from './store/store';
import './static/styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Home />
  </Provider>
);