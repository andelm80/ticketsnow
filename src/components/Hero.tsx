import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [videoError, setVideoError] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      console.log("Video element loaded");
      console.log("Video source:", videoRef.current.currentSrc);
      console.log("Video ready state:", videoRef.current.readyState);
      
      videoRef.current.play().catch(error => {
        console.error("Error playing video:", error);
        setVideoError(error.message);
      });

      // Add event listeners for debugging
      videoRef.current.addEventListener('loadeddata', () => {
        console.log("Video data loaded successfully");
      });

      videoRef.current.addEventListener('error', (e) => {
        console.error("Video error:", e);
        setVideoError("Failed to load video");
      });
    }
  }, []);

  const handleExploreClick = () => {
    console.log("Navigating to explore page");
    navigate("/explore");
  };

  return (
    <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
          style={{
            transform: `translateY(${scrollPosition * 0.5}px)`,
          }}
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-broadway-theaters-in-the-middle-of-times-square-4176-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-ticket-purple to-ticket-blue opacity-90" />
      </div>
      <div className="relative z-10 text-center text-white p-8">
        {videoError && (
          <div className="bg-red-500/80 p-2 mb-4 rounded">
            Error loading video: {videoError}
          </div>
        )}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Live the Music
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in">
          Experience unforgettable musical performances. Get your tickets now for
          the best seats in the house.
        </p>
        <Button
          size="lg"
          className="bg-ticket-blue text-white hover:opacity-90 transition-all duration-300 animate-fade-in"
          onClick={handleExploreClick}
        >
          Explore Shows
        </Button>
      </div>
    </div>
  );
};