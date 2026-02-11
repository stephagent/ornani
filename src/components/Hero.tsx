import { useRef, useEffect } from "react";
import Navbar from "./Navbar";
import logoWhite from "@/assets/logo-white.png";
import heroBackground from "@/assets/santa-barbara-coastline.jpg";

const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const handleTimeUpdate = () => {
      if (video.duration && video.currentTime >= video.duration - 1) {
        video.currentTime = 0;
      }
    };
    video.addEventListener("timeupdate", handleTimeUpdate);
    return () => video.removeEventListener("timeupdate", handleTimeUpdate);
  }, []);

  return <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Video with Image Fallback */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster={heroBackground}
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero-video.mov" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />
      </div>

      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-6 flex flex-col items-center -mt-36">
        <img src={logoWhite} alt="Ani Estate Group" className="h-[267px] md:h-[370px] mb-4" />
        <p className="text-sm md:text-base tracking-[0.3em] uppercase font-light">
          DRE# 02180493
        </p>
      </div>
    </section>;
};
export default Hero;