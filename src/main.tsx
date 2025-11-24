import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { store } from "./app/store.ts";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <h1 style={{ color: "white" }}>Redux Toolkit App</h1>
        <img
          src="https://www.mitrais.com/wp-content/uploads/2022/12/Blog_Banner_-_The_Easy_Way_to_Use_Redux_Toolkit_in_React.png"
          alt=""
          style={{ width: "45%", marginBottom: "30px", borderRadius: "10px"}}
        />
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
