import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import App from "./App";
import "./index.css";
import "fontsource-roboto";
// import rootReducer from './redux';
import persistedReducer from "./redux";
import axios from "axios";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

const accessString = localStorage.getItem("token");
axios.defaults.headers.common["authorization"] = `${accessString}`;

const store = configureStore({
  reducer: persistedReducer,
  // middleware: [logger],
});

let persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
