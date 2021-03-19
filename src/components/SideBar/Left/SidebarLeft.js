import "./style.css";

import { Gradient } from "../../StyleComponents/gradient";
import { OptionsTopStyle } from "../../StyleComponents/optionsTop";
import { OptionsBottomStyle } from "../../StyleComponents/optionsBottom";
import { Button } from "../../StyleComponents/button";

export const SidebarLeft = () => {
  return ( 
    <div className = 'sidebar-left'>
      <div className = 'gradient'>
        <Gradient component="left"></Gradient>
      </div>

      <div className = 'options-top'>
        <OptionsTopStyle isSelected = "true">Home</OptionsTopStyle>
        <OptionsTopStyle>My Files</OptionsTopStyle>
        <OptionsTopStyle>Recent Files</OptionsTopStyle>
        <OptionsTopStyle>Shared Files</OptionsTopStyle>
        <OptionsTopStyle>File Request</OptionsTopStyle> 
        <OptionsTopStyle>Trash</OptionsTopStyle> 
      </div>

      <div className = 'line'>
      </div>

      <div className = 'options-bottom'>
        <OptionsBottomStyle>Upload Files</OptionsBottomStyle>
        <OptionsBottomStyle>Upload Folder</OptionsBottomStyle>
        <OptionsBottomStyle>New Folder</OptionsBottomStyle> 
        <OptionsBottomStyle>Trash</OptionsBottomStyle>  
      </div>

      <div className = 'bottom-button'>
        <Button plus = 'true'>Create new<span className="plusSymbol">&#43;</span></Button>
      </div>
    </div>
  );
}