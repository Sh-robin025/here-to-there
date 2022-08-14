import React, { useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import logo from "../assets/logo.png";
import Button from "../styles/button";
import { Logo, MobileMenu, Navbar, NavItem, NavItems } from "../styles/navbar";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Navbar container className="container">
      <Logo>
        <img src={logo} alt="" className="logo" />
        <span>Here to There</span>
      </Logo>

      <Button>
        <FiPhoneCall /> +123456789
      </Button>

      <MobileMenu>
        {showMenu ? (
          <AiOutlineMenuFold onClick={() => setShowMenu(!showMenu)} />
        ) : (
          <AiOutlineMenuUnfold onClick={setShowMenu} />
        )}
      </MobileMenu>

      <NavItems mobileMenu={showMenu}>
        <NavItem>Offers</NavItem>
        <NavItem>Support</NavItem>
        <NavItem>Login</NavItem>
      </NavItems>
    </Navbar>
  );
};

export default Header;
