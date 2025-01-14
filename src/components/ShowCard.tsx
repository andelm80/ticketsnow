import { Calendar, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";

interface ShowCardProps {
  title: string;
  artist: string;
  date: string;
  time: string;
  venue: string;
  image: string;
  price: string;
  onBuyTickets: () => void;
}

export const ShowCard = ({
  title,
  artist,
  date,
  time,
  venue,
  image,
  price,
  onBuyTickets,
}: ShowCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg animate-fade-in">
      <CardHeader className="p-0">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
        />
      </CardHeader>
      <CardContent className="p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground mb-4">{artist}</p>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-ticket-gold" />
            <span className="text-sm">{date}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-ticket-gold" />
            <span className="text-sm">{time}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-ticket-gold" />
            <span className="text-sm">{venue}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 flex justify-between items-center">
        <span className="text-lg font-bold text-ticket-purple">{price}</span>
        <Button
          onClick={onBuyTickets}
          className="bg-ticket-blue text-white hover:opacity-90 transition-all duration-300"
        >
          Buy Tickets
        </Button>
      </CardFooter>
    </Card>
  );
};