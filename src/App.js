import React from 'react';
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import "./App.css"
import {Routes, Route,useLocation}from "react-router-dom";
import MainPage from "./pages/Mainpage/MainPage.js";
import LoginPage from "./pages/LoginPage/Loginpage.js";

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  return (
    <div>
      {!isLoginPage&& <Header/>}
      <Routes>
        <Route path="/" element={<MainPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
      </Routes>
      {!isLoginPage&& <Footer/>}
      
    </div>
  );
}

export default App;
