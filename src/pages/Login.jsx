import React from "react";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">ChatOP</span>
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="E-mail ID" />
          <input type="password" placeholder="Password" />

          <button>Sign in</button>
        </form>
        <p>If you do not have an account, Register</p>
      </div>
    </div>
  );
};

export default Login;
