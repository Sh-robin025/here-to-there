import styled from "styled-components";

const Card = styled.div`
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  background: ${({ bg }) => bg};
  box-shadow: ${({ shadow }) => shadow && "0px 0px 15px #333"};
`;

export default Card;
