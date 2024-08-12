// VideoPlayer.js
import React, { useRef, useState } from 'react';
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import '../App.css';

const VideoPlayer = ({ src, poster }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event) => {
    const newVolume = event.target.value;
    videoRef.current.volume = newVolume;
    setVolume(newVolume);
  };

  const toggleMute = () => {
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleTimeUpdate = () => {
    const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
    setProgress(progress);
  };

  const handleProgressClick = (event) => {
    const newTime = (event.nativeEvent.offsetX / event.target.offsetWidth) * videoRef.current.duration;
    videoRef.current.currentTime = newTime;
  };

  return (
    <div className="video-container">
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        onTimeUpdate={handleTimeUpdate}
        onClick={togglePlayPause}
      />

      <div className="controls">
        <button onClick={togglePlayPause} className="play-pause">
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
        <input
          type="range"
          className="progress-bar"
          value={progress}
          onClick={handleProgressClick}
          readOnly
        />
        <button onClick={toggleMute} className="volume">
          {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
        </button>
        <input
          type="range"
          className="volume-slider"
          value={volume}
          min="0"
          max="1"
          step="0.01"
          onChange={handleVolumeChange}
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
