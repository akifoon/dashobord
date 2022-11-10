import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Login from './LoginPages/Login'
import NewLogin from "./LoginPages/NewLogin";
import PasswordFrom from "./LoginPages/PasswordForm";


function Top() {



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Password" element={<PasswordFrom />} />
          <Route path="/NewLogin" element={<NewLogin />} />
        </Routes>
      </BrowserRouter>

    </>

  );
}

export default Top;