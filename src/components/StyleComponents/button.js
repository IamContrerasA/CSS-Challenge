import styled from "styled-components";

export const Button = styled.button`
  width: 180px;
  height: 30px;
  background: #FF9F00;
  border: 0px solid;
  border-radius: 7px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.plus ? 'space-between' : 'center'};
  align-items center;

  .plusSymbol {
    flex-basis: 0 0 25%;
    width: 21px;
    height: 21px;
    background: #FFB233;
    border-radius: 4px;
  }
`;