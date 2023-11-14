import React, { useState } from 'react';
import './VideoSidebar.css';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import SentimentNeutralIcon from '@mui/icons-material/SentimentNeutral';
import MoodBadIcon from '@mui/icons-material/MoodBad';
import ChatIcon from '@mui/icons-material/Chat';

function VideoSidebar() {
    const[liked, setLiked] =useState(false);
    return (
    <div className='videoSidebar'>
        <div className='videoSidebar__button'>
            {liked ? <InsertEmoticonIcon fontSize='large' 
                onClick={(e) => setLiked(false)}
            /> : 
            <EmojiEmotionsIcon fontSize='large'
            onClick={(e) => setLiked(true)}
            />}
            <p>{liked ? 300 +1 :300 }</p>
        </div>
        <div className='videoSidebar__button'>
            <SentimentNeutralIcon fontSize='large'/>
            <p>2</p>
        </div>
        <div className='videoSidebar__button'>
            <MoodBadIcon fontSize='large'/>
            <p>1</p>
        </div>
    </div>
  );
}

export default VideoSidebar;