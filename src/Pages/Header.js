import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = ({ setAuthentication, authentication }) => {
  const navigate = useNavigate();
  const goToLogin = () => {
    console.log("로그인페이지로 이동");
    navigate("/login");
  };
  const search = (event) => {
    console.log("키가 입력되는 중");
    if (event.key === "Enter") {
      event.preventDefault();
      console.log("click Enter key", event.key);
      let keyword = event.target.value;
      console.log("keyword", keyword);
      navigate(`/?q=${keyword}`);
    }
  };
  const clickLogout = () => {
    setAuthentication(false);
    navigate("/");
  };
  return (
    <div className="Header">
      <div className="HeaderInner">
        <div className="TopBanner">
          <p>KAKAOTALK FRIENDS 10% OFF SPECIAL COUPON</p>
        </div>
        <div className="nav">
          <Link to="/">
            <img src={process.env.PUBLIC_URL + "./img/logo.png"} alt="로고" />
          </Link>
          <ul>
            <li>SHOP</li>
            <li>BRAND</li>
            <li>COLLAB.</li>
            <li>STYLING</li>
            <li>STORES</li>
          </ul>
          <div className="User">
            <form className="Search">
              <input type="text" placeholder="SEARCH" onKeyDown={search} />
              <img
                src={process.env.PUBLIC_URL + "/img/search.png"}
                alt="search_icon"
              />
            </form>
            <p
              to="/Login"
              className="Login"
              onClick={authentication == true ? clickLogout : goToLogin}
            >
              {authentication == true ? "Log-out🖐🏻" : "Log-in 🤍"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

