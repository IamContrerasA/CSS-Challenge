import styled from "styled-components";

export const BottomCard = ({ children, className }) => {
  const Component = `div`;
  return <Component className={className}>
      <span className="square"></span>
      <span className="multiCircles"></span>
      <span className="multiCircles2"></span>
      <span className="multiCircles3"></span>
      <span className="text1"></span>
      <span className="mini-text"></span>
      
      {children}
    </Component>;
};

export const CardBottomStyles = styled(BottomCard)`
  width: 260px;
  height: 100px;
  margin-right:16px;
  box-shadow:0 2px 5px 1px #e7e7e7;
  background: white;
  border-radius: 12px;
  display: grid;
  align-items: center;
	grid-template-rows: 50% 25% 25%;
  grid-template-columns: 70% 30%;
  grid-template-areas: 
    "square multiCircles"
    "text1 text1"
    "mini-text mini-text";

  .square{
    width: 30px;
    height: 26px;
    background: #FF9F00;
    margin-left: 25px;
    align-self: center;
    justify-self: start;
    grid-area: square;
  }
  .multiCircles{
    width: 15px;
    height: 15px;
    margin-right: 10px;
    border: 1px solid #4AC29D;
    align-self: center;
    justify-self: start;
    border-radius: 50%;
    grid-area: multiCircles;
  }
  .multiCircles2{
    width: 15px;
    height: 15px;
    margin-left: 10px;
    align-self: center;
    justify-self: start;
    border: 1px solid ${(props)=>props.last || `#FF6860`};
    background: white;
    border-radius: 50%;
    grid-area: multiCircles;
  }
  ${(props) => props.size >= 3 ?`
    .multiCircles3{
      width: 15px;
      height: 15px;
      margin-left: 20px;
      align-self: center;
      justify-self: start;
      border: 1px solid #FF9F00;
      background: white;
      border-radius: 50%;
      grid-area: multiCircles;
    }
    .multiCircles3::after{
      font-size: 10px;
      display: flex;  
      justify-content: center;
      margin-top:-4px;
    }`
  :''}

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