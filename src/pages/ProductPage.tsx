import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";
import { shows } from "./Index";

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  console.log("Product page loaded with ID:", id);
  
  const show = shows.find((s) => s.id === id);
  
  if (!show) {
    return (
      <div className="container mx-auto py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Show not found</h2>
        <Button onClick={() => navigate("/")} className="bg-ticket-blue text-white">
          Back to Shows
        </Button>
      </div>
    );
  }

  const handlePurchase = () => {
    console.log("Navigating to checkout with show:", show);
    navigate("/checkout", { state: { show } });
  };

  return (
    <div className="container mx-auto py-12">
      <Button 
        onClick={() => navigate("/")}
        className="mb-8 bg-ticket-blue text-white hover:opacity-90"
      >
        ← Back to Shows
      </Button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={show.image}
            alt={show.title}
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{show.title}</h1>
          <p className="text-2xl text-muted-foreground">{show.artist}</p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-ticket-gold" />
              <span>{show.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-ticket-gold" />
              <span>{show.time}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-ticket-gold" />
              <span>{show.venue}</span>
            </div>
          </div>
          
          <div className="pt-6">
            <p className="text-3xl font-bold text-ticket-purple mb-4">
              {show.price}
            </p>
            <Button
              size="lg"
              className="w-full bg-ticket-blue text-white hover:opacity-90"
              onClick={handlePurchase}
            >
              Purchase Tickets
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;