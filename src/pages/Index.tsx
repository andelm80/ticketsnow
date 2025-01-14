import { Hero } from "@/components/Hero";
import { ShowCard } from "@/components/ShowCard";

const shows = [
  {
    title: "Symphony of Dreams",
    artist: "London Philharmonic",
    date: "May 15, 2024",
    time: "7:30 PM",
    venue: "Royal Albert Hall",
    image: "https://images.unsplash.com/photo-1519682577862-22b62b24e493?q=80&w=1170&auto=format&fit=crop",
    price: "$75",
  },
  {
    title: "Jazz Night Extravaganza",
    artist: "Miles Davis Tribute Band",
    date: "May 20, 2024",
    time: "8:00 PM",
    venue: "Blue Note Jazz Club",
    image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?q=80&w=1170&auto=format&fit=crop",
    price: "$45",
  },
  {
    title: "Rock Legends",
    artist: "The Rolling Stones",
    date: "June 1, 2024",
    time: "9:00 PM",
    venue: "Madison Square Garden",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1170&auto=format&fit=crop",
    price: "$120",
  },
  {
    title: "Opera Gala",
    artist: "Maria Callas Ensemble",
    date: "June 15, 2024",
    time: "6:30 PM",
    venue: "Sydney Opera House",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=1169&auto=format&fit=crop",
    price: "$90",
  },
];

const Index = () => {
  const handleBuyTickets = () => {
    console.log("Buy tickets clicked");
    // We'll implement the ticket purchase flow in the next iteration
  };

  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Upcoming Shows</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {shows.map((show) => (
            <ShowCard
              key={show.title}
              {...show}
              onBuyTickets={handleBuyTickets}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;