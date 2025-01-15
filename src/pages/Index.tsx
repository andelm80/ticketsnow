import { Hero } from "@/components/Hero";
import { ShowCard } from "@/components/ShowCard";
import { useNavigate } from "react-router-dom";
import { shows } from "@/data/shows";

const Index = () => {
  const navigate = useNavigate();

  const handleBuyTickets = (showId: string) => {
    console.log("Navigating to show:", showId);
    navigate(`/show/${showId}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Shows</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {shows.map((show) => (
            <ShowCard
              key={show.id}
              {...show}
              onBuyTickets={() => handleBuyTickets(show.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;