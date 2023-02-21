import React, { useRef } from 'react';

interface VideoProps {
  src: string;
}

const Video: React.FC<VideoProps> = ({ src }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <React.Fragment key={src}>
      <video ref={videoRef} controls style={{width: '100%'}}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </React.Fragment>
  );
};

export default Video;