import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="relative h-[70vh] flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-r from-ticket-purple to-ticket-blue opacity-90"
        style={{
          backgroundImage: `url('/placeholder.svg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
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
          className="bg-[#D946EF] text-white hover:opacity-90 transition-all duration-300 animate-fade-in"
        >
          Explore Shows
        </Button>
      </div>
    </div>
  );
};