import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: ${({ vertical }) => (vertical ? "column" : "row")};
  gap: 15px;
  padding: 20px;
  min-width: 400px;
`;

export default Form;
