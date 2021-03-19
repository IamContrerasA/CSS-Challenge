import styled from "styled-components";

// If there is no props, gradient will be from sidebar-left, otherwise will be sidebar-right
export const Gradient = styled.div`
  width: ${props => props.component === 'left' ? "71" : "180"}px;
  height: ${props => props.component === 'left' ? "21" : "100"}px;
  margin-left: 18%;
  margin-right: 18%;
  background: linear-gradient(270deg, #689EF8 0%, #FF6860 56.25%, #FF9F00 100%);
  border-radius: ${props => props.component === 'left' ? "5" : "12"}px;
`;