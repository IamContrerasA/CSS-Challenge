import styled from "styled-components";

export const Button = styled.button`
  width: 180px;
  height: 45px;
  background: #FF9F00;
  border: 0px solid;
  border-radius: 7px;
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: ${(props) => props.plus ? 'space-around' : 'center'};
  align-items center;

  .plusSymbol {
    width: 26px;
    height: 26px;
    background: #FFB233;
    border-radius: 4px;
    font-size: 20px;
  }
`;