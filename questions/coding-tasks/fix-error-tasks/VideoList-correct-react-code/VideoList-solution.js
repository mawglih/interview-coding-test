// This is a possible answer

import React from 'react';

// child 

const VideoItem = () => {
  return (
    <div onClick={() => onVideoSelect(video)} >
      <img
        alt={video.snippet.title}
        src={video.snippet.thumbnailurl}
      />
      <div>
        <div>{video.snippet.title}</div>
      </div>
    </div>
  );
};
 
// parent
const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map(video => {
    return (
      <VideoItem
        key={video.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });

  return <div>{renderedList}</div>;
};


export default VideoList;
