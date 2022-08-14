import styled from "styled-components";

const Button = styled.button`
  background: #d33f1a;
  padding: 5px 25px;
  color: #ffffff;
  border: none;
  border-radius: 5px;
  transition: all 0.5 ease-in-out;
  display: flex;
  align-items: center;
  gap: 10px;

  :hover {
    background: #ee4a3c;
  }
`;

export default Button;
