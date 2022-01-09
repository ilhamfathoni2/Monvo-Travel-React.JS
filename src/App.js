import React, { useEffect, useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { UserContext } from "./context/userContext";
import { API, setAuthToken } from "./config/api";

import LogIn from "./components/auth/login";
import Register from "./components/auth/register";
import Home from "./pages/home";
import AccountUser from "./components/user/account";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cart" element={<Home />} />
        <Route path="/notif" element={<Home />} />
        <Route path="/user" element={<AccountUser />} />
      </Routes>
    </>
  );
}

export default App;
