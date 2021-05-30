import React from "react";
import Video from "./Video";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="app">
        <div className="app_videos">
          <Video
            src="https://v39-eu.tiktokcdn.com/4f0134b2085f316ae2001a94d5af7204/60b1fb50/video/tos/alisg/tos-alisg-pve-0037/87b58df4f5b34e0c8ee2008620a59c23/?a=1180&br=2180&bt=1090&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&l=202105290228540101890740920451B4FF&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anIzb3JtajxmNTMzODgzM0ApM2Y1aTxmZGRoN2Q2ZDRnO2dyLS0yLjMzaWpgLS1kLzRzc2E2MmJiYzMuM15hNDAvXzU6Yw%3D%3D&vl=&vr="
            channel="lakes"
            description="today's is a great day"
            like={123}
            messages={234}
            description="welcome to my tik top app"
            song="wake up tommorrow trapping"
            likes={145}
            messages={689}
            shares={103}
          />

          <Video
            src="https://v39-eu.tiktokcdn.com/4f0134b2085f316ae2001a94d5af7204/60b1fb50/video/tos/alisg/tos-alisg-pve-0037/87b58df4f5b34e0c8ee2008620a59c23/?a=1180&br=2180&bt=1090&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&l=202105290228540101890740920451B4FF&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anIzb3JtajxmNTMzODgzM0ApM2Y1aTxmZGRoN2Q2ZDRnO2dyLS0yLjMzaWpgLS1kLzRzc2E2MmJiYzMuM15hNDAvXzU6Yw%3D%3D&vl=&vr="
            channel="247shit"
            description="replace ........"
            like={667}
            messages={903}
            description="what do we get going on here"
            song="wake up tommorrow trapping"
            likes={145}
            messages={689}
            shares={103}
          />

          <Video src="https://v39-eu.tiktokcdn.com/4f0134b2085f316ae2001a94d5af7204/60b1fb50/video/tos/alisg/tos-alisg-pve-0037/87b58df4f5b34e0c8ee2008620a59c23/?a=1180&br=2180&bt=1090&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=3&ds=3&er=&l=202105290228540101890740920451B4FF&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anIzb3JtajxmNTMzODgzM0ApM2Y1aTxmZGRoN2Q2ZDRnO2dyLS0yLjMzaWpgLS1kLzRzc2E2MmJiYzMuM15hNDAvXzU6Yw%3D%3D&vl=&vr=" />
        </div>
      </div>
    </>
  );
};

export default App;
