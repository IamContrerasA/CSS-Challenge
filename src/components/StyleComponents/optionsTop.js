import styled from "styled-components";

export const OptionsTop = ({ children, className }) => {
  const Component = `div`;
  return <Component className={className}>
      <span className="selected"></span>
      <span className="square"></span>
      {children}
    </Component>;
};

export const OptionsTopStyle = styled(OptionsTop)`
  height: 10px;
  margin-left: ${props => props.isSelected === 'true' ? "0" : "18"}%;
  margin-top: 38px;
  font-size: 14px;
  color: ${props => props.isSelected === 'true' ? "#FFFFFF" : "#858A9D"};

  .square {
    width: 15px;
    height: 15px;
    margin-right: 20px;
    border: 1px solid ${props => props.isSelected === 'true' ? "#FFFFFF" : "#858A9D"};;
    box-sizing: border-box;
  }

  ${props => props.isSelected === 'true' 
  ? `
    .selected {
      width: 18px;
      height: 44px;
      margin-right: 20px;
      background: white;
      border-radius: 0 7px 7px 0px; 
      position: absolute;
      top: 50%;
      left: -60px;
      -ms-transform: translateY(-50%);
      transform: translateY(-50%);
    }
    position: relative;
    margin-left: 18%;
  `
  : ``}
`;
