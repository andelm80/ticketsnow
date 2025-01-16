import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Hero = () => {
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleExploreClick = () => {
    console.log("Navigating to explore page");
    navigate("/explore");
  };

  return (
    <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video
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
            src="https://static.videezy.com/system/resources/previews/000/042/012/original/Broadway_01.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-ticket-purple to-ticket-blue opacity-90" />
      </div>
      <div className="relative z-10 text-center text-white p-8">
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