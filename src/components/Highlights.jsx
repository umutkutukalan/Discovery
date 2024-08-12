import "./script";
import { useGSAP } from "@gsap/react";
import VideoCarousel from "./VideoCarousel";
import gsap from "gsap";
import { historyImg, movieImg } from "../utils";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#highlights", {
      scrollTrigger: {
        trigger: "#highlights",
        toggleActions: "play pause restart pause",
      },
    });
    gsap.to("#title", {
      opacity: 1,
      duration: 1,
      y: 0,
    });
    gsap.to(".link", {
      opacity: 1,
      duration: 1,
      delay: 1,
      y: 0,
      stagger: 0.25,
    });
  }, []);

  return (
    <section
      id="highlights"
      className="w-screen h-full common-padding bg-blue-200 overflow-hidden"
    >
      <div className="screen-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between">
          <h1 id="title" className="section-heading">
            Discover beautiful countries...
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the movies
              <img
                src={movieImg}
                alt="watch"
                className="ml-2"
                width={18}
                height={14}
              />
            </p>
            <p className="link">
              Discovered dates
              <img
                src={historyImg}
                alt="right"
                className="ml-2"
                width={18}
                height={14}
              />
            </p>
          </div>
        </div>
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
