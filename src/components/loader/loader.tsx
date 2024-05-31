import React, { useEffect, useRef } from 'react';
import vid from '../../assets/loader.mp4';

const Loader: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const handleLoadedMetadata = () => {
      if (videoRef.current) {
        console.log(videoRef.current.duration);
      }
    };

    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener('loadedmetadata', handleLoadedMetadata);
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener('loadedmetadata', handleLoadedMetadata);
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      className="h-full w-full object-fill object-center"
      autoPlay
      muted
      src={vid}
    ></video>
  );
};

export default Loader;
