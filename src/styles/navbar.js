import styled from "styled-components";

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;
  top: 0;
  margin: auto;
  max-width: 1440px;

  @media (max-width: 1440px) {
    padding: 5px 100px;
  }
  @media (max-width: 1024px) {
    padding: 5px 70px;
  }
  @media (max-width: 768px) {
    padding: 5px 50px;
  }
  @media (max-width: 500px) {
    padding: 5px 30px;
  }
  @media (max-width: 425px) {
    padding: 5px 20px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  img {
    height: 50px;
  }
  span {
    font-size: 32px;
    font-weight: 700;
    text-transform: uppercase;
    line-height: 0;

    @media (max-width: 768px) {
      font-size: 29px;
    }

    @media (max-width: 625px) {
      display: none;
    }
  }
`;

export const NavItems = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 0;

  @media (max-width: 768px) {
    position: absolute;
    left: -50%;
    top: 0;
    box-shadow: ${({ mobileMenu }) => mobileMenu && "5px 0 30px -3px #555"};
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    text-align: center;
    padding: 20px;
    transition: 1s ease-in-out all;
    background: #fff;
    width: 50%;
    height: 100vh;
    animation: ${({ mobileMenu }) =>
      !mobileMenu ? "fadeOut backwards 1s ease-in" : "fadeIn forwards 1s ease-out"};
  }

  @media (max-width: 525px) {
    left: -71%;
    width: 70%;
  }

  @keyframes fadeIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(100%);
    }
  }
  @keyframes fadeOut {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(-100%);
    }
  }
`;

export const NavItem = styled.li`
  cursor: pointer;
  padding: 5px 20px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 10px;
  transition: all ease 0.5s;

  :nth-last-child(1) {
    background: #d33f1a;
    color: #fff;
    border-radius: 5px;
  }
  :hover {
    box-shadow: 0px 0px 10px #d33f1a;
  }
`;

export const MobileMenu = styled.div`
  display: none;
  font-size: 30px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;
