import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { ShowCard } from "@/components/ShowCard";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { shows } from "@/data/shows";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { format, parse } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const ExploreShows = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<string>("");

  console.log("Total shows in data:", shows.length);
  console.log("Selected month:", selectedMonth || 'None');

  // Get all unique labels from shows
  const allLabels = Array.from(
    new Set(shows.flatMap((show) => show.labels))
  ).sort();

  // Get all available months from shows
  const availableMonths = Array.from(
    new Set(
      shows.map((show) => {
        const date = parse(show.date, "MMMM d, yyyy", new Date());
        return format(date, "MMMM yyyy");
      })
    )
  ).sort();

  // Convert price strings to numbers for comparison
  const getPriceValue = (priceStr: string) => {
    return Number(priceStr.replace(/[^0-9.-]+/g, ""));
  };

  // Calculate number of active filters
  const getActiveFiltersCount = () => {
    let count = 0;
    if (priceRange[0] > 0 || priceRange[1] < 200) count++;
    if (selectedLabels.length > 0) count++;
    if (searchTerm.length > 0) count++;
    if (selectedMonth) count++;
    return count;
  };

  const clearFilters = () => {
    console.log("Clearing all filters");
    setPriceRange([0, 200]);
    setSearchTerm("");
    setSelectedLabels([]);
    setSelectedMonth("");
  };

  const toggleLabel = (label: string) => {
    setSelectedLabels((prev) =>
      prev.includes(label)
        ? prev.filter((l) => l !== label)
        : [...prev, label]
    );
  };

  const filteredShows = shows.filter((show) => {
    const matchesSearch = !searchTerm || 
      show.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      show.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
      show.venue.toLowerCase().includes(searchTerm.toLowerCase());
    
    const price = getPriceValue(show.price);
    const matchesPrice = price >= priceRange[0] && price <= priceRange[1];
    
    const matchesLabels = selectedLabels.length === 0 || 
      selectedLabels.every((label) => show.labels.includes(label));

    // Month filtering
    const matchesMonth = !selectedMonth || (() => {
      const showDate = parse(show.date, "MMMM d, yyyy", new Date());
      return format(showDate, "MMMM yyyy") === selectedMonth;
    })();

    return matchesSearch && matchesPrice && matchesLabels && matchesMonth;
  });

  console.log("Filtered shows count:", filteredShows.length);
  console.log("Active filters count:", getActiveFiltersCount());
  console.log("Price range:", priceRange);
  console.log("Selected labels:", selectedLabels);
  console.log("Search term:", searchTerm);

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
            {getActiveFiltersCount() > 0 && (
              <Button
                variant="outline"
                size="icon"
                onClick={clearFilters}
                className="shrink-0"
                title="Clear all filters"
              >
                <X className="h-4 w-4" />
              </Button>
            )}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="relative">
                  <SlidersHorizontal className="h-4 w-4" />
                  {getActiveFiltersCount() > 0 && (
                    <Badge 
                      variant="secondary" 
                      className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                    >
                      {getActiveFiltersCount()}
                    </Badge>
                  )}
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                  <SheetDescription>
                    Apply filters to find the perfect show.
                  </SheetDescription>
                </SheetHeader>
                <div className="py-6 space-y-6">
                  <div>
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-sm font-medium">Price Range</h3>
                      {getActiveFiltersCount() > 0 && (
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={clearFilters}
                          className="text-sm text-muted-foreground hover:text-foreground"
                        >
                          Clear filters
                        </Button>
                      )}
                    </div>
                    <div className="space-y-4">
                      <Slider
                        defaultValue={[0, 200]}
                        max={200}
                        step={1}
                        value={priceRange}
                        onValueChange={setPriceRange}
                        className="w-full"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-4">Month</h3>
                    <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select month" />
                      </SelectTrigger>
                      <SelectContent>
                        {availableMonths.map((month) => (
                          <SelectItem key={month} value={month}>
                            {month}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium mb-4">Labels</h3>
                    <div className="flex flex-wrap gap-2">
                      {allLabels.map((label) => (
                        <Badge
                          key={label}
                          variant={selectedLabels.includes(label) ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => toggleLabel(label)}
                        >
                          {label}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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