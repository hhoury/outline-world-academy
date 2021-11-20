import React, { useRef, useState, useEffect } from "react";
import videojs from "video.js";
import seekButtons from "videojs-seek-buttons";
import qualityLevels from "videojs-contrib-quality-levels";
import hlsQualitySelector from "videojs-hls-quality-selector";
import "videojs-playlist";
import "videojs-playlist-ui";
import classes from './VideoPlayer.module.css'

export const VideoPlayer = (props) => {
  const videoPlayerRef = useRef(null); // Instead of ID
  const playerRef = useRef(null);
  const { options, onReady } = props;
  const [currentTime, setCurrentTime] = useState(null);
  const videoSrc = props.src
  var sources1 = [
    {
      src: videoSrc,
      type: 'application/x-mpegURL'
    },
    
  ];
  const videoJSOptions = {
    fluid: true,
    autoplay: true,
    controls: true,
    userActions: { hotkeys: true },
    controlBar: {
      'pictureInPictureToggle': false
    },
    sources: sources1,
    poster: props.poster,
    plugins: {
      qualityLevels: {},
      hlsQualitySelector: {},
      seekButtons: {
        forward: 10,
        back: 10
      },
    },
    playbackRates: [0.5, 1, 1.5, 2]
  }

  React.useEffect(() => {
    // make sure Video.js player is only initialized once
    if (!playerRef.current) {
      const videoElement = videoPlayerRef.current;
      if (!videoElement) return;

      const player = playerRef.current = videojs(videoElement, videoJSOptions, () => {
        console.log("player is ready");
        onReady && onReady(player);
        player.on("ended", () => {
          alert("ended");
        });
        player.on("timeupdate", () => {
          setCurrentTime(player.currentTime());
        });
        console.log("Player Ready");
      });
    } else {
      // you can update player here [update player through props]
      // const player = playerRef.current;
      // player.autoplay(options.autoplay);
      // player.src(options.sources);
    }
  }, [options, videoPlayerRef]);
  
  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
      <div data-vjs-player="true">
        <video
          ref={videoPlayerRef}
          className={`${classes['video-js']} ${classes['vjs-big-play-centered']} ${classes['vjs-16-9']}`}
        />
      </div>
  );

};
export default VideoPlayer;