import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom'
import UserContextProvider from "./utils/UserContext";
import App from "./App";

ReactDOM.render(
  <ChakraProvider>
    <BrowserRouter>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </BrowserRouter>
  </ChakraProvider>,
  document.getElementById('root')
);