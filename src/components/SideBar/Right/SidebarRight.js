import "./style.css";

import { Button } from "../../StyleComponents/button.js";
import { Gradient } from "../../StyleComponents/gradient.js";
import { DetailsStorageStyle } from "../../StyleComponents/storageDetails.js";

export const SidebarRight = () => {
  return ( 
    <div className = 'sidebar-right'>
      
      <div className = 'user'>
        <div className = 'graySquareContainer'>
          <span className="graySquare"></span>
          <span className="graySquare"></span>
        </div>
        <div className = 'userInfo'>
          <span className = 'userName subtitle-text'>Name</span>
          <span className = 'userPhoto'></span>
        </div>
      </div>
      
      <div className = 'lineRigth'>
      </div>

      <div className = 'storageChart'>
        <div className='title-text'>Storage</div>
        
        <svg viewBox='0 0 100 100'>
          <circle cx='50' cy='50' r='45' id='orange'/>
          <circle cx='50' cy='50' r='45' id='orange2'/>
          <circle cx='50' cy='50' r='45' id='green'/>
          <circle cx='50' cy='50' r='45' id='gray'/>
          <circle cx='50' cy='50' r='45' id='blue'/>
          
        </svg>
        <div className ='storageText'>85%
          <div className='mini-text'>Used</div>
        </div>
        <p>420.2 GB of 500 GB used</p>
      </div>
      

      <div className = 'storageDetails'>
        <DetailsStorageStyle color='#FF9F00' text1='Documents' text2='720 files' value = '200 GB'/>
        <DetailsStorageStyle color='#689FF8' text1='Documents' text2='720 files' value = '125 GB'/>
        <DetailsStorageStyle color='#4AC29D' text1='Documents' text2='720 files' value = '75 GB'/>
        <DetailsStorageStyle color='#BCBECA' text1='Documents' text2='720 files' value = '50 GB'/>
      </div>

      <div className = 'upgradeMessage'>
        <Gradient></Gradient>
        <div>Buy more space now!
          <div className="mini-text">Upgrade to cloud premium</div>
        </div>
        <Button>Upgrade Account!</Button>
      </div>
    </div>
  );
}