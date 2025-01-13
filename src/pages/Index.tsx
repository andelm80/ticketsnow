import { Hero } from "@/components/Hero";
import { ShowCard } from "@/components/ShowCard";

const shows = [
  {
    title: "Symphony of Dreams",
    artist: "London Philharmonic",
    date: "May 15, 2024",
    time: "7:30 PM",
    venue: "Royal Albert Hall",
    image: "/placeholder.svg",
    price: "$75",
  },
  {
    title: "Jazz Night Extravaganza",
    artist: "Miles Davis Tribute Band",
    date: "May 20, 2024",
    time: "8:00 PM",
    venue: "Blue Note Jazz Club",
    image: "/placeholder.svg",
    price: "$45",
  },
  {
    title: "Rock Legends",
    artist: "The Rolling Stones",
    date: "June 1, 2024",
    time: "9:00 PM",
    venue: "Madison Square Garden",
    image: "/placeholder.svg",
    price: "$120",
  },
  {
    title: "Opera Gala",
    artist: "Maria Callas Ensemble",
    date: "June 15, 2024",
    time: "6:30 PM",
    venue: "Sydney Opera House",
    image: "/placeholder.svg",
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