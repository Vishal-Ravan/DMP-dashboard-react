import React, { useRef } from "react";
import Routess from "../Routess";
import cuberoot from "./source/cuberoot.png";

const Login = () => {
  const email = useRef();
  const password = useRef();
  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");

  const handlesubmit = () => {
    if (
      email.current.value === "info@cuberoot.tech" &&
      password.current.value === "12"
    ) {
      localStorage.setItem("emailData", "info@cuberoot.tech");
      localStorage.setItem("passwordData", "12");
    }
  };

  return (
    <>
      {getEmail && getPassword ? (
        <Routess />
      ) : (
        <div className="login">
          <div className="login-left">
            <img src={cuberoot} alt="" />
          </div>
          <div className="login-right">
            <form onSubmit={handlesubmit}>
              <input type="text" placeholder="Enter Your Email" ref={email} />
              <input
                type="password"
                placeholder="Enter Your Password"
                ref={password}
              />
              <button> Login</button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
