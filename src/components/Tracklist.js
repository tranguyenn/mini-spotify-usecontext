import React from "react";
import useMusicPlayer from "../hooks/usePlayerProvider";
import "./Tracklist.css";
import PauseCircleFilledRoundedIcon from '@mui/icons-material/PauseCircleFilledRounded';
import HeadphonesRoundedIcon from '@mui/icons-material/HeadphonesRounded';

function Tracklist() {
  const { trackList, currentTrackIndex, playTrack, isPlaying } = useMusicPlayer();
  return (
    <>
      <div className="track-list-container">
        {trackList.map((track, index) => (
          // ( Surprise us with your code here)

          <button className="song-title" onClick={() => playTrack(index)}>
            {currentTrackIndex === index&&isPlaying ?  <HeadphonesRoundedIcon fontSize="large"/>:<PauseCircleFilledRoundedIcon fontSize="large" />}
           <p> {track.name}</p>
          </button>
        ))}
      </div>
    </>
  );
}

export default Tracklist;
