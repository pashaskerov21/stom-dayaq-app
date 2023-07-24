import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './scss/app.scss'
import { Provider } from 'react-redux';
import store from './redux/store'
import MainContextProvider from './context/MainContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <MainContextProvider>
      <App />
    </MainContextProvider>
  </Provider>
);

