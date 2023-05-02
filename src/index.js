import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "zustand-persist";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <PersistGate> */}
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
    {/* </PersistGate> */}
  </React.StrictMode>
);
