import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux"; // Import Provider from react-redux
import { MantineProvider } from "@mantine/core";
import App from "./App";
import { store } from "./app/store"; // Import your store
import "./index.css";
import "./i18n";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      {" "}
      {/* Add Provider and pass the store as a prop */}
      <MantineProvider withCssVariables>
        <App />
      </MantineProvider>
    </Provider>
  </React.StrictMode>,
);
