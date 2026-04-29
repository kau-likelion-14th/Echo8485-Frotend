import React from 'react';
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import "./App.css";

import { Routes, Route, useLocation } from "react-router-dom";

import MainPage from "./pages/Mainpage/MainPage.js";
import LoginPage from "./pages/LoginPage/Loginpage.js";
import MyPage from "./pages/Mypage/MyPage.js";

function App() {

  // 현재 경로 정보 가져오기
  const location = useLocation();

  // 로그인 페이지인지 여부 판단
  const isLoginPage = location.pathname === "/login";

  return (
    <div>

      {/* 로그인 페이지에서는 Header와 Footer를 숨김 */}
      {!isLoginPage && <Header />}

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>

      {!isLoginPage && <Footer />}

    </div>
  );
}

export default App;
