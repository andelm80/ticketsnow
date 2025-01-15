import { Hero } from "@/components/Hero";
import { ShowCard } from "@/components/ShowCard";
import { useNavigate } from "react-router-dom";
import { shows } from "@/data/shows";
import { Helmet } from "react-helmet";

const Index = () => {
  const navigate = useNavigate();

  const handleBuyTickets = (showId: string) => {
    console.log("Navigating to show:", showId);
    navigate(`/show/${showId}`);
  };

  // Create a description of available shows
  const showsDescription = shows
    .map((show) => `${show.title} by ${show.artist}`)
    .join(", ");

  return (
    <>
      <Helmet>
        <title>TicketMelody - Broadway Shows and Musicals</title>
        <meta name="description" content={`Book tickets for the best Broadway shows and musicals. Currently featuring: ${showsDescription.slice(0, 155)}...`} />
        <meta property="og:title" content="TicketMelody - Broadway Shows and Musicals" />
        <meta property="og:description" content="Find and book tickets for the best Broadway shows and musicals. From classics to contemporary performances." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={window.location.origin} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="TicketMelody - Broadway Shows and Musicals" />
        <meta name="twitter:description" content="Find and book tickets for the best Broadway shows and musicals. From classics to contemporary performances." />
        <link rel="canonical" href={window.location.origin} />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Hero />
        <div className="container mx-auto py-12">
          <h1 className="text-3xl font-bold mb-8 text-center">Upcoming Shows</h1>
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
    </>
  );
};

export default Index;