import styled from "styled-components";

export const OptionsBottom = ({ children, className }) => {
  const Component = `div`;
  return <Component className={className}>
      <span className="square"></span>
      {children}
    </Component>;
};

export const OptionsBottomStyle = styled(OptionsBottom)`
  height: 10px;
  margin-left: 7px;
  margin-top: 11px;
  font-size: 16px;
  color: #BEC0C8;

  .square {
    width: 15px;
    height: 15px;
    margin-right: 7px;
    border: 1px solid #FFFFFF;
    box-sizing: border-box;
  }

`;
