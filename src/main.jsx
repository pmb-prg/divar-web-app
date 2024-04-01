import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

import "styles/index.css";
import "styles/fonts.css";
import { NextUIProvider } from "@nextui-org/react";


ReactDOM.createRoot(document.getElementById("root")).render(
  <NextUIProvider>
    <App />
  </NextUIProvider>
);
