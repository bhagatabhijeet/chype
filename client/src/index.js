import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import App from "./App";
import "./index.css";
import "fontsource-roboto";
import rootReducer from './redux';
import axios from "axios";

const accessString = localStorage.getItem('token');
axios.defaults.headers.common['authorization'] = `${accessString}`;

const store = configureStore({
  reducer: rootReducer,
  // middleware: [logger],
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
