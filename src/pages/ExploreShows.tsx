import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ShowCard } from "@/components/ShowCard";
import { Search, List, X } from "lucide-react";
import { shows } from "@/data/shows";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ExploreShows = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedVenue, setSelectedVenue] = useState<string>("");
  const [priceRange, setPriceRange] = useState<string>("");
  const [dateRange, setDateRange] = useState<string>("");
  const [isOpen, setIsOpen] = useState(false);

  console.log("Filter state:", { isOpen });
  console.log("Applied filters:", { selectedVenue, priceRange, dateRange });

  // Get unique venues for the filter
  const uniqueVenues = Array.from(new Set(shows.map((show) => show.venue)));

  const getPriceNumber = (price: string) => {
    return Number(price.replace("$", ""));
  };

  const isInPriceRange = (price: string) => {
    const priceNum = getPriceNumber(price);
    switch (priceRange) {
      case "under-50":
        return priceNum < 50;
      case "50-100":
        return priceNum >= 50 && priceNum <= 100;
      case "over-100":
        return priceNum > 100;
      default:
        return true;
    }
  };

  const isInDateRange = (date: string) => {
    const showDate = new Date(date);
    const today = new Date();
    switch (dateRange) {
      case "this-month":
        return showDate.getMonth() === today.getMonth();
      case "next-month":
        return showDate.getMonth() === (today.getMonth() + 1) % 12;
      default:
        return true;
    }
  };

  const filteredShows = shows.filter((show) => {
    const matchesSearch =
      show.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      show.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      show.venue.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesVenue = selectedVenue ? show.venue === selectedVenue : true;
    const matchesPrice = isInPriceRange(show.price);
    const matchesDate = isInDateRange(show.date);

    return matchesSearch && matchesVenue && matchesPrice && matchesDate;
  });

  const clearFilters = () => {
    setSelectedVenue("");
    setPriceRange("");
    setDateRange("");
    setIsOpen(false);
  };

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
            <Popover open={isOpen} onOpenChange={setIsOpen}>
              <PopoverTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2">
                  <List className="h-4 w-4" />
                  Filter
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-4">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Venue</label>
                    <Select value={selectedVenue} onValueChange={setSelectedVenue}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select venue" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">All venues</SelectItem>
                        {uniqueVenues.map((venue) => (
                          <SelectItem key={venue} value={venue}>
                            {venue}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Price Range</label>
                    <Select value={priceRange} onValueChange={setPriceRange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select price range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Any price</SelectItem>
                        <SelectItem value="under-50">Under $50</SelectItem>
                        <SelectItem value="50-100">$50 - $100</SelectItem>
                        <SelectItem value="over-100">Over $100</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Date</label>
                    <Select value={dateRange} onValueChange={setDateRange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select date range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="">Any time</SelectItem>
                        <SelectItem value="this-month">This Month</SelectItem>
                        <SelectItem value="next-month">Next Month</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {(selectedVenue || priceRange || dateRange) && (
                    <Button
                      variant="outline"
                      className="w-full mt-4"
                      onClick={clearFilters}
                    >
                      <X className="h-4 w-4 mr-2" />
                      Clear Filters
                    </Button>
                  )}
                </div>
              </PopoverContent>
            </Popover>
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