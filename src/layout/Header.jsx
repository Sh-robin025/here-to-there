import React, { useState } from "react";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { userActions } from "../redux/actions/user.action";
import Button from "../styles/button";
import { Logo, MobileMenu, Navbar, NavItem, NavItems } from "../styles/navbar";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const user = useSelector((state) => state.user_credentials);

  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(userActions.logout());
  };

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

        {user ? (
          <NavItem onClick={handleLogout}>Logout</NavItem>
        ) : (
          <Link to="/login">
            <NavItem>Login</NavItem>
          </Link>
        )}
      </NavItems>
    </Navbar>
  );
};

export default Header;
