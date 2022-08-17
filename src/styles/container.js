import styled from "styled-components";

const Container = styled.section`
  margin: auto;
  min-height: ${({ height }) => height};

  @media (min-width: 1500px) {
    width: 1440px;
  }
  @media (max-width: 1440px) {
    padding: 0 100px;
  }
  @media (max-width: 1024px) {
    padding: 0 70px;
  }
  @media (max-width: 768px) {
    padding: 0 50px;
  }
  @media (max-width: 500px) {
    padding: 0 30px;
  }
  @media (max-width: 425px) {
    padding: 0 20px;
  }
`;

export default Container;
