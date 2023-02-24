import React from 'react';
import ReactPlayer from 'react-player/lazy'



const Video = ({ src, isPlaying }) => {
  const [playing, setPlaying] = React.useState(isPlaying);

  React.useEffect(() => {
    setPlaying(isPlaying);
  }, [isPlaying]);
  return (
      <ReactPlayer url={src} width='100%' height='100%' style={{borderRadius: 10}} playing={playing} />
  );
};

export default Video;