import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import styled from "styled-components";

const StyledInput = styled.div`
  position: relative;
  input {
    padding: 5px 10px;
    border-radius: 5px;
    border: none;
    width: 100%;
    background: lightgray;
    outline: none;

    :focus {
      border-bottom: 2px solid red;
      border-left: 2px solid red;
    }
  }

  svg {
    position: absolute;
    top: 0%;
    right: 5px;
    height: 100%;
    font-size: 20px;
    cursor: pointer;
  }
`;

const Input = ({ type, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <StyledInput>
      <input type={showPassword ? "text" : type} {...rest} />

      {type === "password" && showPassword ? (
        <AiFillEyeInvisible onClick={() => setShowPassword(false)} />
      ) : (
        type === "password" && !showPassword && <AiFillEye onClick={() => setShowPassword(true)} />
      )}
    </StyledInput>
  );
};

export default Input;
