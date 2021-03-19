import styled from "styled-components";

export const Square = styled.span`
  margin-right: ${(props) => props.space || 0};
  margin-left: ${(props) => props.space || 0};
  width: 15px;
  height: 15px;
  border: 1px solid ${(props) => props.border};
`;