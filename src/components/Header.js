import { NavLink } from "react-router-dom";
import "../styles/Header.css";
import logo from "../assets/img/logo.png";
import logoutIcon from "../assets/icon/logout.png";

function Header() {
  return (
    <header className="header">
      {/* 왼쪽 */}
      <div className="header-left">
        <img src={logo} alt="LTE 로고" className="header-logo" />
        <span className="header-title">Lion To-do Everyday</span>
      </div>

      {/* 가운데 */}
      <nav className="header-nav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
        >
          홈
        </NavLink>
        <NavLink
          to="/friends"
          className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
        >
          친구
        </NavLink>
        <NavLink
          to="/mypage"
          className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
        >
          마이페이지
        </NavLink>
      </nav>

      {/* 오른쪽 */}
      <div className="header-right">
        <span className="user-name">김지훈님</span>

        <img
          src={logoutIcon}
          alt="로그아웃"
          className="logout-icon"
        />
      </div>
    </header>
  );
}

export default Header;