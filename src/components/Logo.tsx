import { Ticket } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Ticket className="h-8 w-8 text-ticket-purple" />
      <span className="text-2xl font-bold bg-gradient-to-r from-ticket-purple to-ticket-blue bg-clip-text text-transparent">
        Tickets Now
      </span>
    </div>
  );
};