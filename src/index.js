import React from "react";
import ReactDOM from "react-dom/client";
// import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.scss";
import App from "./App";
import { HashRouter } from "react-router-dom";

import { setupStore } from "./store/store";

const store = setupStore();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);
