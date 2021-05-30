import React, { useRef, useState } from "react";
import "./Video.css";
import Footer from "./VideoFooter";
import VideoSidebar from "./VideoSidebar";

function Video({ url, channel, description, song, likes, shares, messages }) {
  const [playing, setPlaying] = useState(false);
  const VideoRef = useRef(null);
  const handleVideoPress = () => {
    if (playing) {
      VideoRef.current.pause();
      setPlaying(!playing);
    } else {
      VideoRef.current.play();
      setPlaying(!playing);
    }
  };

  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        loop
        ref={VideoRef}
        className="video_player"
        style={{ width: "500px", height: "1200px" }}
        src={url}
      ></video>
      <Footer channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />
    </div>
  );
}

export default Video;
