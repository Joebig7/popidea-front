import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="index" element={<App />} />
    </Routes>
  </BrowserRouter>
);
