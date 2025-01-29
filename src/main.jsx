import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import {appStore,appPersister} from "./utils/appStore";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={appStore}>
      <PersistGate loading={null} persistor={appPersister}>
      <App />

      </PersistGate>
    </Provider>
  </StrictMode>
);
