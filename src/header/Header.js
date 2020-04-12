import React, { useState } from "react";

const Header = () => {
  const [enlightenment, becomeEnlightened] = useState("Sign in");

  const proclaimFreedom = () => {
    becomeEnlightened("There is no signing in. Greenit is all about freedom.");
  };

  return (
    <div className="header">
      <h1 className="header__title">Greenit</h1>
      <h2
        className={
          enlightenment === "Sign in" ? "header__signin" : "header__signin free"
        }
        onClick={proclaimFreedom}
      >
        {enlightenment}
      </h2>
    </div>
  );
};

export default Header;