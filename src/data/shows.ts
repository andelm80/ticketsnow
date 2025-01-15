export interface Show {
  id: string;
  title: string;
  artist: string;
  date: string;
  time: string;
  venue: string;
  image: string;
  price: string;
}

export const shows: Show[] = [
  {
    id: "symphony-dreams",
    title: "Symphony of Dreams",
    artist: "London Philharmonic",
    date: "May 15, 2024",
    time: "7:30 PM",
    venue: "Royal Albert Hall",
    image: "https://images.unsplash.com/photo-1519682577862-22b62b24e493?q=80&w=1170&auto=format&fit=crop",
    price: "$75",
  },
  {
    id: "jazz-night",
    title: "Jazz Night Extravaganza",
    artist: "Miles Davis Tribute Band",
    date: "May 20, 2024",
    time: "8:00 PM",
    venue: "Blue Note Jazz Club",
    image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?q=80&w=1170&auto=format&fit=crop",
    price: "$45",
  },
  {
    id: "rock-legends",
    title: "Ekans music Legends",
    artist: "The Rolling Stones",
    date: "June 1, 2024",
    time: "9:00 PM",
    venue: "Madison Square Garden",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1170&auto=format&fit=crop",
    price: "$120",
  },
  {
    id: "opera-gala",
    title: "Opera Gala",
    artist: "Maria Callas Ensemble",
    date: "June 15, 2024",
    time: "6:30 PM",
    venue: "Sydney Opera House",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=1169&auto=format&fit=crop",
    price: "$90",
  },
];
