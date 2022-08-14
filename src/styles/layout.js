import styled from "styled-components";

export const Layout = styled.main`
  background: url(${(props) => props.bgImage});
  background-attachment: fixed;
  background-size: 122vh;
  min-height: 100vh;
`;

export const SectionWrapper = styled.div`
  background-color: ${({ bg }) => bg};
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: cover;
  background-attachment: fixed;
  padding: 50px 0;
  min-height: ${({ height }) => height};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(${({ cols }) => cols}, 1fr);
  grid-row-gap: 10px;
  grid-column-gap: 5px;
  justify-content: space-between;
  min-height: ${({ height }) => height};

  @media (max-width: 768px) {
    grid-template-columns: repeat(${({ md }) => md}, 1fr);
  }
`;

export const Col = styled.div`
  grid-column: span ${({ span }) => span};
`;
