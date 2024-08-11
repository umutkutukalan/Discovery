import { useEffect, useRef, useState } from "react";
import { hightlightSlides } from "../constants";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import gsap from "gsap";
import { pauseImg, playImg, replayImg } from "../utils";
const VideoCarousel = () => {
  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState({
    videoId: 0,
    startPlay: false,
    isPlaying: false,
    isEnd: false,
    isLastVideo: false,
  });
  const { videoId, startPlay, isPlaying, isEnd, isLastVideo } = video;
  const [loadedData, setLoadedData] = useState([]);
  useGSAP(() => {
    gsap.to("#slider", {
      transform: `translateX(${-100 * videoId}%)`,
      duration: 2,
      ease: "power2.inOut",
    });
    gsap.to("#video", {
      scrollTrigger: {
        trigger: "#video",
        toggleActions: "restart none none none",
      },
      onComplete: () => {
        setVideo((prev) => ({
          ...prev,
          startPlay: true,
          isPlaying: true,
        }));
      },
    });
    gsap.to("#country-text", {
      scrollTrigger: {
        trigger: "#country-text",
        toggleActions: "restart none none none",
      },
      opacity: 1,
      duration: 1,
      delay: 1,
      stagger: 0.25,
      y: 0,
    });
    gsap.to(".text-border", {
      stagger: 0.25,
      opacity: 1,
      duration: 1,
      delay: 3,
      ease: "power2.inOut",
    });
  }, [videoId, isEnd]);
  useEffect(() => {
    if (loadedData.length !== 0) {
      if (!isPlaying) {
        videoRef.current[videoId].pause();
      } else {
        startPlay && videoRef.current[videoId].play();
      }
    }
  }, [videoId, startPlay, isPlaying, loadedData]);
  useEffect(() => {
    let currentProgress = 0;
    let span = videoSpanRef.current;
    if (span[videoId]) {
      let anim = gsap.to(videoDivRef.current[videoId], {
        onUpdate: () => {
          const progress = Math.ceil(anim.progress() * 100);
          if (progress !== currentProgress) {
            currentProgress = progress;
            gsap.to(videoDivRef.current[videoId], {
              width:
                window.innerWidth < 720
                  ? "10vw"
                  : window.innerWidth < 1200
                  ? "10vw"
                  : "4vw",
            });
            gsap.to(span[videoId], {
              width: `${currentProgress}%`,
              backgroundColor: "white",
            });
          }
        },
        onComplete: () => {
          if (isPlaying) {
            gsap.to(videoDivRef.current[videoId], {
              width: "12px",
            });
            gsap.to(span[videoId], {
              backgroundColor: "#afafaf",
            });
          }
        },
      });
      if (videoId !== 0) {
        anim.restart();
      }
      const animUpdate = () => {
        anim.progress(
          videoRef.current[videoId].currentTime /
            hightlightSlides[videoId].videoDuration
        );
      };
      if (isPlaying) {
        gsap.ticker.add(animUpdate);
      } else {
        gsap.ticker.remove(animUpdate);
      }
    }
  }, [videoId, startPlay]);
  //   useEffect(() => {
  //     if (videoRef.current[videoId]) {
  //       videoRef.current[videoId].playbackRate = 1.5;
  //     }
  //   }, [videoId]);
  const handleLoadedMetaData = (i, e) => setLoadedData((prev) => [...prev, e]);
  const handleProcess = (type, i) => {
    switch (type) {
      case "video-end":
        setVideo((prev) => ({
          ...prev,
          videoId: i + 1,
          isEnd: true,
        }));
        break;
      case "video-last":
        setVideo((prev) => ({
          ...prev,
          isLastVideo: true,
        }));
        break;
      case "video-reset":
        setVideo((prev) => ({
          ...prev,
          isLastVideo: false,
          videoId: 0,
        }));
        break;
      case "play":
        setVideo((prev) => ({
          ...prev,
          isPlaying: !prev.isPlaying,
        }));
        break;
      case "pause":
        setVideo((prev) => ({
          ...prev,
          isPlaying: !prev.isPlaying,
        }));
        break;
      default:
        return video;
    }
  };

  return (
    <>
      <div className="flex items-center">
        {hightlightSlides.map((list, i) => (
          <div id="slider" key={list.id} className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="h-full w-full bg-black overflow-hidden rounded-3xl flex-center">
                <video
                  id="video"
                  playsInline={true}
                  preload="auto"
                  muted
                  ref={(el) => (videoRef.current[i] = el)}
                  onLoadedMetadata={(e) => handleLoadedMetaData(i, e)}
                  onPlay={() =>
                    setVideo((prev) => ({
                      ...prev,
                      isPlaying: true,
                    }))
                  }
                  onEnded={() =>
                    i !== 2
                      ? handleProcess("video-end", i)
                      : handleProcess("video-last")
                  }
                >
                  <source src={list.video} type="video/mp4" />
                </video>
                <div className="absolute h-full w-full bg-black rounded-3xl overflow-hidden flex-center container-task"></div>
                <div className="absolute top-12 left-[5%] text-border">
                  {list.textList.map((text, i) => (
                    <div
                      key={i}
                      id="country-text"
                      className="font-medium md:text-3xl text-xl opacity-0 translate-y-20 text-padding"
                    >
                      {text}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="relative flex-center mt-10">
        <div className="bg-black py-5 px-7 rounded-full flex-center backdrop-blur">
          {videoRef.current.map((_, i) => (
            <span
              key={i}
              ref={(el) => (videoDivRef.current[i] = el)}
              className="relative bg-gray-400 w-3 h-3 mx-2 rounded-full cursor-pointer"
            >
              <span
                ref={(el) => (videoSpanRef.current[i] = el)}
                className="absolute h-full w-full rounded-full"
              />
            </span>
          ))}
        </div>
        <button className="control-btn">
          <img
            width={25}
            height={20}
            className="image-hover"
            src={isLastVideo ? replayImg : !isPlaying ? playImg : pauseImg}
            alt={isLastVideo ? "replay" : !isPlaying ? "play" : "pause"}
            onClick={
              isLastVideo
                ? () => handleProcess("video-reset")
                : !isPlaying
                ? () => handleProcess("play")
                : () => handleProcess("pause")
            }
          />
        </button>
      </div>
    </>
  );
};

export default VideoCarousel;
