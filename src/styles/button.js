import styled from "styled-components";

const Button = styled.button`
  background: ${({ bg }) => (bg ? bg : "#d33f1a")};
  padding: 5px 25px;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  transition: all 0.5 ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  box-shadow: ${({ shadow }) => shadow && "0px 0px 15px #666"};

  :hover {
    background: #ee4a3c;
  }
`;

export default Button;
