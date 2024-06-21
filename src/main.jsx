import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Layout.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import SendCompliment from "./pages/SendCompliment.jsx";
import Wrap from "./pages/Wrap.jsx";
import Profile from "./pages/Profile.jsx";
import CheckIn from "./pages/CheckIn.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ChakraProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="sendCompliment" element={<SendCompliment />} />
          <Route path="wrap" element={<Wrap />} />
          <Route path="profile" element={<Profile />} />
          <Route path="checkIn" element={<CheckIn />} />
        </Route>
      </Routes>
    </ChakraProvider>
  </BrowserRouter>
);
