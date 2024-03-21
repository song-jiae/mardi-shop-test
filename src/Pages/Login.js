import React from "react";
import { useNavigate } from "react-router-dom";

//로그인 다시 연습하느라 밖으로 뺌
// const navigate = useNavigate();
// const loginUser = (event) => {
//   event.preventDefault(); //submit 기본 속성없애기
//   console.log("로그인됨");
//   setAuthentication(true);
//   navigate("/");
// };
const Login = ({ setAuthentication }) => {
  const navigate = useNavigate();
  const loginUser = (event) => {
    event.preventDefault();
    console.log("로그인 버튼 동작");
    navigate("/");
    setAuthentication(true);
  };
  return (
    <div className="Login">
      <h3>SIGN IN</h3>
      {/* form 요소 잠시삭제>> onSubmit={(event) => loginUser(event)}  */}
      <form onSubmit={(event) => loginUser(event)}>
        <input type="email" id="email" placeholder="이메일을 입력해 주세요" />
        <br />
        <input
          type="password"
          id="password"
          placeholder="비밀번호를 입력해주세요"
        />
        <br />
        <div className="CheckboxWrap">
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox">Remember me</label>
        </div>
        <br />
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
};

export default Login;
