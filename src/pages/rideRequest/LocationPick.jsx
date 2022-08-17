import React, { useRef, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import styled from "styled-components";
import Input from "../../components/Input";
import stoppages from "../../utils/stoppages";

const Wrapper = styled.div`
  position: relative;

  .dropdown {
    position: absolute;
    top: 120%;
    width: 100%;
    height: 200px;
    box-shadow: 0px 0px 10px #444;
    background: #fff;
    border-radius: 10px;
    z-index: 10;
    padding: 10px;
    display: flex;
    flex-direction: column;
    overflow-y: auto;

    ::-webkit-scrollbar {
      display: none;
    }

    h6 {
      border-bottom: 1px solid lightgray;
      cursor: pointer;
      padding: 5px;
      transition: all ease 0.5s;
      border-radius: 5px;
      display: flex;
      align-items: center;
      gap: 5px;

      :hover {
        background: lightgray;
      }
    }
  }
`;

const LocationPick = ({ placeholder, onChange, ...rest }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [location, setLocation] = useState("");

  const inputEL = useRef();
  const dropDownEL = useRef();

  window.addEventListener("click", (e) => {
    if (e.target !== inputEL.current && !dropDownEL.current?.contains(e.target)) {
      setShowDropdown(false);
    }
  });

  return (
    <Wrapper>
      <Input
        ref={inputEL}
        placeholder={placeholder}
        defaultValue={location}
        onFocus={setShowDropdown}
        {...rest}
      />
      {showDropdown && (
        <div className="dropdown" ref={dropDownEL}>
          {stoppages.map((i) => (
            <h6
              key={i}
              onClick={() => {
                setLocation(i);
                onChange(i);
                setShowDropdown(false);
              }}
            >
              <FaMapMarkerAlt /> {i}
            </h6>
          ))}
        </div>
      )}
    </Wrapper>
  );
};

export default LocationPick;
