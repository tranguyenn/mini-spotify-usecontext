import React from 'react'
import './Controller.css'
import PauseCircleFilledRoundedIcon from '@mui/icons-material/PauseCircleFilledRounded';
import PlayCircleFilledRoundedIcon from '@mui/icons-material/PlayCircleFilledRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';

import { Button } from '@mui/material';
import useMusicPlayer from '../hooks/usePlayerProvider';
function Controller() {
    const { trackList, currentTrackIndex, playTrack, isPlaying,playNextTrack,playPreviousTrack } = useMusicPlayer();
  return (
    <div className='controller-container'>
        <Button className="Button" onClick={()=>playPreviousTrack()}><SkipPreviousRoundedIcon sx={{ fontSize: 55 }}/></Button>

        <Button className="Button" onClick={()=>playTrack(currentTrackIndex?currentTrackIndex:0)}>
            {isPlaying? ( <PauseCircleFilledRoundedIcon sx={{ fontSize: 50 }}/>): ( <PlayCircleFilledRoundedIcon sx={{ fontSize: 50 }}/>)}
        </Button>
        <Button className="Button" onClick={()=>playNextTrack()}><SkipNextRoundedIcon sx={{ fontSize: 55 }}/></Button>
       
    </div>
  )
}

export default Controller