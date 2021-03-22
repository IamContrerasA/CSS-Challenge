import styled from "styled-components";

export const Card = ({ children, className }) => {
  const Component = `div`;
  return <Component className={className}>
      <span className="multiSquare"></span>
      <span className="multiCircles"></span>
      <span className="multiCircles2"></span>
      <span className="multiCircles3"></span>
      <span className="dots"></span>
      <span className="text1"></span>
      <span className="mini-text"></span>
      
      {children}
    </Component>;
};

export const CardStyles = styled(Card)`
  width: 260px;
  height: 180px;
  margin-right:16px;
  margin-top:16px;  
  box-shadow:0 2px 5px 1px #e7e7e7;
  background: white;
  border-radius: 12px;
  display: grid;
	grid-template-rows: 50% 25% 25%;
  grid-template-columns: 40% 40% 10%;
  grid-template-areas: 
    "multiSquare multiCircles dots"
    "text1 text1 dots"
    "mini-text mini-text dots";

  .multiSquare{
    width: 40px;
    height: 36px;
    background: #FF9F00;
    box-shadow: -6px 6px #FFD999;
    align-self: center;
    justify-self: center;
    grid-area: multiSquare;
  }
  .multiCircles{
    width: 20px;
    height: 20px;
    margin-right: 15px;
    border: 1px solid #BEC0C8;
    align-self: center;
    justify-self: start;
    border-radius: 50%;
    grid-area: multiCircles;
  }
  .multiCircles2{
    width: 20px;
    height: 20px;
    margin-left: 15px;
    align-self: center;
    justify-self: start;
    border: 1px solid #BEC0C8;
    background: white;
    border-radius: 50%;
    grid-area: multiCircles;
  }
  ${(props) => props.size >= 3 ?`
    .multiCircles3{
      width: 20px;
      height: 20px;
      margin-left: 30px;
      align-self: center;
      justify-self: start;
      border: 1px solid #BEC0C8;
      background: white;
      border-radius: 50%;
      grid-area: multiCircles;
    }
    .multiCircles3::after{
      font-size: 11px;
      display: flex;  
      flex-direction: column;
      align-items: center;
      content:"+3";
    }`
  :''}

  .dots{
    width: 50px;
    height: 25px;
    margin-top: 14px;
    background-image: radial-gradient(circle, #C4C4C4 2px, transparent 0px);
    background-size: 100% 33.33%;
    grid-area: dots;
  }
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