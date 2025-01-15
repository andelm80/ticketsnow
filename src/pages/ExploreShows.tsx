import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ShowCard } from "@/components/ShowCard";
import { Search, List } from "lucide-react";
import { shows } from "./Index";

const ExploreShows = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  
  console.log("Explore Shows page loaded");

  const filteredShows = shows.filter((show) =>
    show.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    show.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
    show.venue.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-12">
        <div className="flex flex-col items-center mb-8">
          <h1 className="text-4xl font-bold mb-6">Explore Shows</h1>
          <div className="w-full max-w-xl flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search by title, artist, or venue..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2">
              <List className="h-4 w-4" />
              Filter
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredShows.length > 0 ? (
            filteredShows.map((show) => (
              <ShowCard
                key={show.id}
                {...show}
                onBuyTickets={() => {
                  console.log("Navigating to show:", show.id);
                  navigate(`/show/${show.id}`);
                }}
              />
            ))
          ) : (
            <div className="col-span-full text-center py-12 text-muted-foreground">
              No shows found matching your search.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExploreShows;