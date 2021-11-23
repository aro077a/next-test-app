import React from "react";
import Logo from "../public/icons/Logo";
import ActionContent from "./ActionContent";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <Logo />
      </div>
      <ActionContent />
    </header>
  );
};

export default Header;
