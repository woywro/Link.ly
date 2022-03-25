import styled from "styled-components";

export const Input = styled.input`
  border: none;
  background: ${(props) => props.theme.colors.secondaryBg};
  padding: 15px 20px;
  border-radius: 10px;
  font-size: 15px;
  width: 100%;
  &:focus {
    outline: none;
  }
`;
