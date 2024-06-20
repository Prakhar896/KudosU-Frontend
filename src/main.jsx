import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Layout.jsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./pages/Home.jsx";
import SendCompliment from "./pages/SendCompliment.jsx";
import Profile from "./pages/Profile.jsx";
import CheckIn from "./pages/CheckIn.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="sendCompliment" element={<SendCompliment />} />
        <Route path="Profile" element={<Profile />} />
        <Route path="CheckIn" element={<CheckIn />} />



      </Route>
    </Routes>
  </BrowserRouter>
);
