import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useRef, useState } from "react";
import {
  facebookImg,
  heroVideo,
  instagramImg,
  smallHeroVideo,
  volumeHighImg,
  youtubeImg,
} from "../utils";

const Hero = () => {
  const videoRef = useRef(null);

  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );
  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 3,
      duration: 1,
      y: 0,
    });
    gsap.to("#cta", {
      opacity: 1,
      delay: 3.5,
      duration: 2,
      y: 0,
      stagger: 0.25,
      ease: "back.inOut",
    });
    gsap.to("#social", {
      opacity: 1,
      delay: 5,
      duration: 2,
      y: 0,
      stagger: {
        amount: 1.5,
        grid: [2, 1],
      },
    });

    gsap.to("#videoSrc", {
      scrollTrigger: {
        trigger: "#videoSrc",
        toggleActions: "restart none none none",
      },
    });
  });
  const handleVideoSrcSecret = () => {
    if (window.innerWidth < 1200) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSecret);

    return () => {
      window.removeEventListener("resize", handleVideoSrcSecret);
    };
  }, []);

  const handlePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.muted === false) {
        videoRef.current.muted = true;
      } else {
        videoRef.current.muted = false;
      }
    }
  };

  return (
    <section className="relative w-full nav-height overflow-hidden pt-20">
      <div className="h-5/6 w-full flex-center flex-col">
        <div className="absolute flex flex-col items-center">
          <p id="hero" className="hero-title">
            Discovery
          </p>
          <a
            id="cta"
            href="highlights"
            className="btn opacity-0 translate-y-20"
          >
            Watch
          </a>
        </div>
        <div id="social" className="flex gap-3 opacity-0 translate-y-20">
          <button className="socialButton">
            <img src={facebookImg} alt="facebook" width={15} />
          </button>
          <button className="socialButton">
            <img src={instagramImg} alt="instagram" width={15} />
          </button>
          <button className="socialButton">
            <img src={youtubeImg} alt="youtube" width={20} />
          </button>
        </div>
        <button className="btnVolume" onClick={handlePlay}>
          <img src={volumeHighImg} alt="volumeHigh" width={20} />
        </button>
        <div>
          <video
            ref={videoRef}
            className="pointer-events-none"
            id="videoSrc"
            key={videoSrc}
            playsInline={true}
            autoPlay
            muted
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Hero;
