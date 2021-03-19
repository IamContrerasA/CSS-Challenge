import styled from "styled-components";

export const fileDetail = ({ children, className }) => {
  const Component = `div`;
  return <Component className={className}>
      <span className="square"></span>
      <span className="name"></span>
      <span className="members"></span>
      <span className="modified"></span>
      <span className="dots"></span>
      {children}
    </Component>;
};

export const FileDetailsStyle = styled(fileDetail)`
  background: white;
  border-radius: 10px;
  height: 50px;
  display: grid; 
  justify-items: start;
  align-items: center;
  grid-template-columns: 5% 45% 20% 20% 10%;
  grid-template-areas: 
    "square name members modified dots";

  .square {
    justify-self: center;
    width: 28px;
    height: 28px;
    background: ${(props) => props.color};
    border-radius: 5px;
    grid-area: square;
  }

  .name{
    font-size: 14px;
    line-height: 12px;
    grid-area: name;
    color: #343951;
  }
  .name::after {content: '${(props) => props.name}';}

  .members{
    font-size: 14px;
    line-height: 12px;
    grid-area: members;
  }
  .members::after {content: '${(props) => props.members} members';}

  .modified{
    font-size: 14px;
    line-height: 12px;
    grid-area: modified;
  }
  .modified::after {content: 'Mar, ${(props) => props.modified}, 2020';}

  .dots{
    justify-self: center;
    width: 30px;
    height: 30px;
    background-image: radial-gradient(circle, #C4C4C4 3px, transparent 3px);
    background-size: 33.33% 100%;
    grid-area: dots;
  }
`;