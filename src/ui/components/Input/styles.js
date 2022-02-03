import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

export const DefaultField = styled.input`
  height: 30px;
  border: 1px solid rgb(99, 99, 99);
  border-radius: 6px;
  padding: 5px;
  font-size: 16px;
  color: #333;

  :focus-visible {
    outline: none;
  }
`;

export const Error = styled.span`
  color: red;
  font-size: 10px;
`;

export const InputLabel = styled.label`
  font-size: 14px;
  color: darkblue;
`;
