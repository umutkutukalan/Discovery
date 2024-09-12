import { useGSAP } from "@gsap/react";
import { animateWithGsap } from "../utils/animations";
import { exploreImages1, exploreImages2, exploreVideo } from "../utils/index";
import { useRef } from "react";
import gsap from "gsap";

const Features = () => {
  const videoRef = useRef();
  useGSAP(() => {
    gsap.to("#exploreVideo", {
      scrollTrigger: {
        trigger: "#exploreVideo",
        toggleActions: "play pause restart reverse",
        start: "-10% bottom",
      },
      onComplete: () => {
        videoRef.current.play();
      },
    });
    animateWithGsap("#features_title", { y: 0, opacity: 1 });
    animateWithGsap(
      ".g_grow",
      { opacity: 1, scale: 1, ease: "power1" },
      { scrub: 5.5 }
    );
    animateWithGsap(".g_text", {
      opacity: 1,
      y: 0,
      ease: "power2.inOut",
      duration: 1,
    });
  }, []);
  return (
    <section className="h-full common-padding bg-black relative overflow-hidden">
      <div className="screen-max-width">
        <div className="mb-12 w-full">
          <h1 id="features_title" className="section-heading">
            More than travel..
          </h1>
        </div>

        <div className="flex flex-col justify-center items-center overflow-hidden">
          <div className="mt-32 mb-24 pl-24">
            <h2 className="text-5xl lg:text-7xl font-semibold">Discovery.</h2>
            <h2 className="text-5xl lg:text-7xl font-semibold">
              There is life in photo frames.
            </h2>
          </div>
        </div>
        <div className="flex-center flex-col gap-5 sm:px-10">
          <div className="relative h-[50vh] w-full flex items-center">
            <video
              id="exploreVideo"
              playsInline
              autoPlay
              preload="none"
              muted
              ref={videoRef}
              className="object-cover object-center w-full h-full"
            >
              <source src={exploreVideo} type="video/mp4" />
            </video>
          </div>
          <div className="flex flex-col w-full relative">
            <div className="feature-video-container">
              <div className="flex-1 overflow-hidden h-[50vh]">
                <img
                  src={exploreImages1}
                  alt="milan"
                  className="feature-video g_grow"
                />
              </div>
              <div className="flex-1 overflow-hidden h-[50vh]">
                <img
                  src={exploreImages2}
                  alt="oslo"
                  className="feature-video g_grow"
                />
              </div>
            </div>
            <div className="feature-text-container">
              <div className="flex-1 flex-center">
                <p className="feature-text g_text">
                  Discover unique countries with just a a click. Learn about
                  their {"  "}
                  <span className="text-white">
                    natural beauty, culture, and social life{"  "}
                  </span>
                  by experiencing it with{" "}
                  <i className="text-white">Discovery</i>.
                </p>
              </div>
              <div className="flex-1 flex-center">
                <p className="feature-text g_text">
                  Share your travel stories and collected memories on Discovery.
                  Add color to our with your photos.
                  {"  "}
                  <span className="text-white">Join our family!</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
