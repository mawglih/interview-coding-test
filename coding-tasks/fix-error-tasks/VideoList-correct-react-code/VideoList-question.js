import React from 'react';

// child 

const VideoItem = () => {
  return (
    <div onClick={() => onVideoSelect(video)}>
      <img
        alt={video.snippet.title}
        src={video.snippet.thumbnailUrl}
      />
      <div>
        <div>{video.snippet.title}</div>
      </div>
    </div>
  );
};
 
// parent
const VideoList = ({ videos, onVideoSelect }) => {

  // Write function renderList that returns list of <VideoItem />

  const renderedList = () => <VideoItem />

  return <div>{renderedList}</div>;
};

// videos is an array of objects:

// [
//   {videoId: 'someId', snippet: [{title: 'some Title', thumbnailUrl: 'some url'}]},
//   {videoID: ....}
//   ...
// ]
// onVideoSelect is the function in App.js that set the selected video, 
// requires 1 argument - video object

export default VideoList;