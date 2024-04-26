import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App/App.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-ws-test-task">
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
