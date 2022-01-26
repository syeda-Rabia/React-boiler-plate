import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
// import reportWebVitals from "./reportWebVitals";

import { ConnectedRouter } from "connected-react-router";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
// import Notification from './helpers/Notifications';

import { store, persistor, history } from "./Store";

const app = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <PersistGate persistor={persistor}>
        {/* <Notification /> */}
        <App />
      </PersistGate>
    </ConnectedRouter>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
