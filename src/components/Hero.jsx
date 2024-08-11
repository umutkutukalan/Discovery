import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
import { useEffect, useState } from "react";
import { heroVideo, smallHeroVideo } from "../utils";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 760 ? smallHeroVideo : heroVideo
  );
  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 2,
      duration: 1,
      y: 0,
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

  return (
    <section className="relative w-full nav-height overflow-hidden pt-20">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title absolute">
          Discovery
        </p>
        <div className="">
          <video
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
