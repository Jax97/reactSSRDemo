import ReactDOM from 'react-dom';
import React from 'react';
import App from '../shared/App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createClientStore } from '../shared/store/index';

ReactDOM.hydrate(
  <Provider store={createClientStore()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
