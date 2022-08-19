import React, { useState } from "react";
import { AiOutlineLogout, AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";
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
        <Link to="#">
          <NavItem>Offers</NavItem>
        </Link>

        <NavItem>Support</NavItem>

        {user ? (
          <div class="dropdown">
            <Button
              className="dropdown-toggle"
              type="button"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              {user.avatar ? <img src={user.avatar} alt="" className="avatar" /> : <FaUserAlt />}
              {user.name}
            </Button>

            <div class="dropdown-menu text-center p-3">
              <Link to="/my-rides">
                <NavItem>My Rides</NavItem>
              </Link>

              <Link to="#">
                <NavItem onClick={handleLogout}>
                  Logout <AiOutlineLogout className="font-weight-bold" />
                </NavItem>
              </Link>
            </div>
          </div>
        ) : (
          <Link to="/login" className="login">
            <NavItem>Login</NavItem>
          </Link>
        )}
      </NavItems>
    </Navbar>
  );
};

export default Header;
