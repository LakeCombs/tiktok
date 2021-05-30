import React, { useState, useEffect } from "react";
import Video from "./Video";
import instance from "./axios.js";
import "./App.css";

const App = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const GetPost = async () => {
      const response = await instance.get("/v2/posts");
      setVideos(response.data);
      console.log(videos);
      return response;
    };

    GetPost();
  }, []);
  return (
    <>
      <div className="app">
        <div className="app_videos">
          {videos.map(
            ({ url, channel, description, likes, messages, song, shares }) => (
              <Video
                url={url}
                channel={channel}
                likes={likes}
                messages={messages}
                description={description}
                shares={shares}
                song={song}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};

export default App;
