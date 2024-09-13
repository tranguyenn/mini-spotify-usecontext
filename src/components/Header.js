import React from 'react'
import useMusicPlayer from '../hooks/usePlayerProvider';

function Header() {
  const { currentTrackName } = useMusicPlayer();
  return (
    <div className='title'>{currentTrackName? currentTrackName: "Janice's Mini Spotify"}</div>
  )
}

export default Header