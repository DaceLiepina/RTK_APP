import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { persistor, store } from "./app/store.ts";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
 import { PersistGate } from 'redux-persist/integration/react'

 window.addEventListener("storage", () => {
  persistor.persist(); // Принудительно активировать восстановление persisted state
});


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
       <PersistGate loading={null} persistor={persistor}>
        <App />
        </PersistGate>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
