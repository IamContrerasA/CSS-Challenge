import styled from "styled-components";

export const detailsStorage = ({ children, className }) => {
  const Component = `div`;
  return <Component className={className}>
      <span className="square"></span>
      <span className="text1"></span>
      <span className="mini-text"></span>
      <span className="value"></span>
      <span className="line"></span>
      {children}
    </Component>;
};

export const DetailsStorageStyle = styled(detailsStorage)`
  display: grid;
	grid-template-areas: 
    "square text1 . . . value"
    "square text2 . . . value"
    "line line line line line line";

  .square {
    width: 28px;
    height: 28px;
    background: ${(props) => props.color};
    border-radius: 8px;
    grid-area: square;
  }
  .text1{
    font-size: 14px;
    line-height: 12px;
    grid-area: text1;
  }
  .text1::after {content: '${(props) => props.text1}';}

  .mini-text{
    justify-content: start;
    grid-area: text2;
  }
  .mini-text::after {content: '${(props) => props.text2}';}

  .value {
    display:flex;
    justify-content:center;
    align-items:center;
    justify-self: end;
    width: 70px;
    height: 28px;
    background: #FFFFFF;
    border-radius: 4px;
    color: black;
    font-size: 12px;
    grid-area: value;
  }
  .value::after {content: '${(props) => props.value}';}

  .line{
    border: 1px solid #E0E7F1;
    grid-area: line;
  }
`;
