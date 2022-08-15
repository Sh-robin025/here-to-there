import React, { useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "../styles/button";
import { Logo, MobileMenu, Navbar, NavItem, NavItems } from "../styles/navbar";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Navbar container className="container">
      <Logo>
        <Link to="/">
          <img src={logo} alt="" className="logo" />
        </Link>
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
        <Link to="auth">
          <NavItem>Login</NavItem>
        </Link>
      </NavItems>
    </Navbar>
  );
};

export default Header;
