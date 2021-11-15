import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios';

import './index.scss';
import 'bootstrap/dist/css/bootstrap.css';

// REDUX
import thunk from "redux-thunk"
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux"
import rootReducer from "./redux/reducers"

// REDUX PERSIST
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"

// SET REDUX STORE
const store = createStore(rootReducer, applyMiddleware(thunk))
const persistor = persistStore(store)

// SET AXIOS
axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT;

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
