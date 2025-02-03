import React from "react";
import { Link } from "react-router-dom"; // React Router의 Link를 사용해 네비게이션 구현
import "./Menu.css";

function Menu() {
  return (
    <nav className="menu">
      <ul className="menu-list">
        <li>
          <Link to="/">🏠 홈</Link>
        </li>
        <li>
          <Link to="/slideshow">📷 앨범</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
