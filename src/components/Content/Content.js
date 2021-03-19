import "./style.css";

import { CardStyles } from "../StyleComponents/cards";
import { CardBottomStyles } from "../StyleComponents/cardsBottom";
import { Square } from "../StyleComponents/square";
import { FileDetailsStyle } from "../StyleComponents/filesDetails";

export const Content = () => {
  return ( 

    <div className = 'content'>

      <div className = 'search'>
        <Square space = '2%'/>
        <input type="text" placeholder="Search"></input>
      </div>

      <div className = 'recentlyUsed'>
        <div className='recentyleUsedTitle'>
          Recently Used
          <div className = 'graySquareContainer'>
            <Square border = '#343951' space='10px'/>
            <Square border = '#9D9FAF'/>
          </div>
        </div>
        <div className='recentyleUsedCards'>
          <CardStyles text1='App project' text2='Created 20.02.2020'/>
          <CardStyles text1='Project fitbit' text2='Created 28.02.2020'/>
          <CardStyles text1='Client documents' text2='Created 4.03.2020' size='3'/>
        </div>
      </div>

      <div className = 'recentlyFiles'>
        <div className = 'title'>Recently Files</div>
        <div className = 'viewAll'>View All</div>
        <div className = 'name'>Name</div>
        <div className = 'members'>Members</div>
        <div className = 'modified'>Last Modified</div>
        <div className = 'recentFile'>
          <FileDetailsStyle color='#FF9F00' name='Travel Landing Page' members='5' modified='8'/>
          <FileDetailsStyle color='#4AC29D' name='True Photos' members='12' modified='8'/>
          <FileDetailsStyle color='#FF6860' name='Dashboard Structure' members='10' modified='9'/>
          <FileDetailsStyle color='#FF9F00' name='Character Illustration' members='3' modified='10'/>
        </div>
      </div>

      <div className = 'shared'>
        <div className='sharedTitle'>
          Shared with me
          <div>View All</div>
        </div>
        <div className='sharedCards'>
          <CardBottomStyles text1='Landing Page' text2='Created 20.02.2020'/>
          <CardBottomStyles text1='Ilustration Pack' text2='Created 20.02.2020' size='3'/>
          <CardBottomStyles text1='CV Design' text2='Created 20.03.2020' last='#FF9F00'/>
        </div>
      </div>
    </div>
  );
}