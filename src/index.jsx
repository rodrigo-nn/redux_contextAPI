import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./app/store";
import { CarProvider } from "./contexts/Contexts";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CarProvider>
        <App />
      </CarProvider>
    </Provider>
  </React.StrictMode>
);
