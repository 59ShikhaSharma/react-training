import React, { useState, useRef, useEffect } from 'react';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  //const [videoLoaded, setVideoLoaded] = useState(false); // New state to track if video has loaded
  const ref = useRef<HTMLVideoElement>(null); // Specify the type for useRef

  // Function to handle play/pause
  const handlePlayPause = () => {
    if (ref.current) {
      if (!isPlaying) {
        ref.current.play();
      } else {
        ref.current.pause();
      }
    }
  };

  // Effect to update isPlaying state based on video events
  useEffect(() => {
    const video = ref.current;
    if (video) {
      const playListener = () => setIsPlaying(true);
      const pauseListener = () => setIsPlaying(false);

      video.addEventListener('play', playListener);
      video.addEventListener('pause', pauseListener);

      return () => {
        video.removeEventListener('play', playListener);
        video.removeEventListener('pause', pauseListener);
      };
    }
  }, []);

  return (
    <>
      <button onClick={handlePlayPause}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <video
        width="250"
        ref={ref}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </>
  );
}
