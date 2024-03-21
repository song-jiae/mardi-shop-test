import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header2 = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setLoggedIn] = useState(false);

  const toggleLoginStatus = () => {
    // 로그인 상태를 토글
    setLoggedIn(!isLoggedIn);
  };

  const handleLogout = () => {
    // 로그아웃 처리 또는 상태 업데이트
    setLoggedIn(false);
  };

  const search = (event) => {
    if (event.key === "Enter") event.preventDefault();
    let keyword = event.target.value;
    console.log("keyword", keyword);
    navigate(`/?q=${keyword}`);
  };

  return (
    <div className="Header">
      <div className="HeaderInner">
        <div className="TopBanner">
          KAKAOTALK FRIENDS 10% OFF SPECIAL COUPON
        </div>
        <div className="Nav">
          <Link to="/">
            <img src={process.env.PUBLIC_URL + "/images/logo.svg"} alt="Logo" />
          </Link>
          <ul>
            <li>SHOP</li>
            <li>BRAND</li>
            <li>COLLAB.</li>
            <li>STYLING</li>
            <li>STORES</li>
          </ul>
          <div className="User">
            {isLoggedIn ? (
              // 로그인 상태일 때 로그아웃 버튼 표시
              <button onClick={handleLogout}>로그아웃</button>
            ) : (
              // 로그아웃 상태일 때 로그인 버튼 표시
              <span to="/login" className="login" onClick={toggleLoginStatus}>
                로그인
              </span>
            )}
            <form>
              <input
                type="text"
                id="searchInput"
                className="login-link"
                onKeyPress={search}
              />
              <img
                src={process.env.PUBLIC_URL + "/images/search.png"}
                alt="Search"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header2;
