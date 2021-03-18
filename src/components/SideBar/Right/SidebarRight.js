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
          <span className = 'userName'>Name</span>
          <span className = 'userPhoto'></span>
        </div>
      </div>
      
      <div className = 'lineRigth'>
      </div>

      <div className = 'storageChart'>
        <h2>Storage</h2>
        <svg viewBox="0 0 36 36" className="circular-chart">
          <path className="circle"
            values='asd'
            strokeDasharray="80, 100"
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
          />
          <text x="25%" y="60%" >85%</text>
        </svg>
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
        <div>Buy more space now!</div>
        <div className="mini-text">Upgrade to cloud premium</div>
        <div></div>
        <Button>Upgrade Account!</Button>
      </div>
    </div>
  );
}