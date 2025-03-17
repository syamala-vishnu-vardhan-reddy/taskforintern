import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // Import Redux Provider
import store from "./store"; // Import the store
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {" "}
      {/* Ensure Provider wraps App */}
      <App />
    </Provider>
  </React.StrictMode>
);
