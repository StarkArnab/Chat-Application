import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, firebaseConfig } from "../firebase";
import Signin from "./Signin";
import LogOut from "./LogOut";

const style = {
  nav: `bg-gray-800 h-20 flex justify-between items-center p-4`,
  heading: `text-white text-3xl`,
  userName: `text-white`,
};

const Navbar = () => {
  const [user] = useAuthState(auth);
  console.log(user);
  return (
    <div className={style.nav}>
      <h1 className={style.heading}>Chat OP</h1>
      {user ? (
        <>
          <p className={style.userName}>Hi {user.displayName}</p>
          <LogOut />
        </>
      ) : (
        <>
          <Signin />
        </>
      )}
    </div>
  );
};

export default Navbar;
