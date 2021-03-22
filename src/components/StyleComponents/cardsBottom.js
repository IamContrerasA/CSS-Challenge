import styled from "styled-components";

export const BottomCard = ({ children, className }) => {
  const Component = `div`;
  return <Component className={className}>
      <span className="square"></span>
      <span className="multiCircles1"></span>
      <span className="multiCircles2"></span>
      <span className="multiCircles3"></span>
      <span className="text1"></span>
      <span className="mini-text"></span>
      
      {children}
    </Component>;
};

const circle = (pos = 1, last = '#FF6860') => {
  let defCircle = `border: 1px solid #4AC29D;`;
  if(pos === 2 )
    defCircle = `
      margin-left: 15px;
      border: 1px solid ${last};
    `;
  if (pos === 3)
    defCircle = `
      margin-left: 30px;
      border: 1px solid #FF9F00;
      background: white;
    `;
  return `
    .multiCircles${pos}{
      width: 20px;
      height: 20px;
      ${defCircle}
      border-radius: 50%;
      grid-area: multiCircles;
    }
  `;
};

export const CardBottomStyles = styled(BottomCard)`
  width: 260px;
  height: 100px;
  margin-right:16px;
  box-shadow:0 2px 5px 1px #e7e7e7;
  background: white;
  border-radius: 12px;
  display: grid;
  align-items: flex-end;
	grid-template-rows: 50% 4% 23% 23%;
  grid-template-columns: 60% 40%;
  grid-template-areas: 
    "square multiCircles"
    ". ."
    "text1 text1"
    "mini-text mini-text";

  .square{
    width: 40px;
    height: 36px;
    background: #FF9F00;
    margin-left: 25px;
    grid-area: square;
  }

  ${circle()}
  ${(props) => circle(2, props.last) || ''}
  ${(props) => props.size >= 3 ? circle(3) : ''}

  .text1{
    font-size: 14px;
    line-height: 12px;
    margin-left: 25px;
    align-self: center;
    color: #343951;
    grid-area: text1;
  }
  .text1::after{content: "${(props) => props.text1}";}

  .mini-text{
    margin-left: 25px;
    align-self: start;
    grid-area: mini-text;
  }
  .mini-text::after {content: "${(props) => props.text2}";}
`;