export interface Show {
  id: string;
  title: string;
  artist: string;
  date: string;
  time: string;
  venue: string;
  image: string;
  price: string;
  labels: string[];
  description: string; // New field
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
    labels: ["Classical", "Orchestra", "Family-friendly"],
    description: "Experience the magic of the London Philharmonic Orchestra as they present Symphony of Dreams, a mesmerizing journey through classical masterpieces. Perfect for families and music lovers alike.",
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
    labels: ["Jazz", "Live Music", "21+"],
    description: "Step into the world of jazz with this spectacular tribute to Miles Davis. An evening of smooth rhythms and timeless melodies awaits at the legendary Blue Note Jazz Club.",
  },
  {
    id: "rock-legends",
    title: "Music Legends",
    artist: "The Rolling Stones",
    date: "June 1, 2024",
    time: "9:00 PM",
    venue: "Madison Square Garden",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1170&auto=format&fit=crop",
    price: "$120",
    labels: ["Rock", "Concert", "All Ages"],
    description: "Join the legendary Rolling Stones for a night of unforgettable rock music at Madison Square Garden. Experience the energy and excitement of their greatest hits live.",
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
    labels: ["Opera", "Classical", "Formal"],
    description: "Experience the elegance of opera at the Sydney Opera House with the Maria Callas Ensemble. A night of stunning performances and breathtaking arias awaits.",
  },
  {
    id: "broadway-nights",
    title: "Broadway Nights",
    artist: "Broadway Ensemble",
    date: "June 25, 2024",
    time: "7:00 PM",
    venue: "Broadway Theatre",
    image: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?q=80&w=1170&auto=format&fit=crop",
    price: "$85",
    labels: ["Musical", "Broadway", "Family-friendly"],
    description: "Enjoy a spectacular evening of Broadway hits performed by a talented ensemble. A perfect night out for families and musical lovers.",
  },
  {
    id: "phantom",
    title: "The Phantom Returns",
    artist: "Metropolitan Opera Company",
    date: "July 1, 2024",
    time: "8:00 PM",
    venue: "Metropolitan Opera House",
    image: "https://images.unsplash.com/photo-1522776203873-e4961ae6e07b?q=80&w=1170&auto=format&fit=crop",
    price: "$150",
    labels: ["Opera", "Drama", "Classical"],
    description: "The Metropolitan Opera Company presents The Phantom Returns, a hauntingly beautiful tale of love and obsession set in the iconic opera house.",
  },
  {
    id: "cats-revival",
    title: "Cats Revival",
    artist: "West End Cast",
    date: "July 10, 2024",
    time: "7:30 PM",
    venue: "West End Theatre",
    image: "https://images.unsplash.com/photo-1514533212735-5df27d970db9?q=80&w=1170&auto=format&fit=crop",
    price: "$95",
    labels: ["Musical", "Dance", "Family-friendly"],
    description: "Join the West End Cast for a revival of the beloved musical Cats. Experience the magic of this timeless story through dance and music.",
  },
  {
    id: "les-mis",
    title: "Les Misérables",
    artist: "Royal Theatre Company",
    date: "July 15, 2024",
    time: "7:00 PM",
    venue: "Royal Theatre",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=1171&auto=format&fit=crop",
    price: "$110",
    labels: ["Musical", "Drama", "Historical"],
    description: "Experience the epic tale of Les Misérables, a story of love, sacrifice, and redemption set against the backdrop of revolutionary France.",
  },
  {
    id: "chicago",
    title: "Chicago: The Musical",
    artist: "Broadway Stars",
    date: "July 20, 2024",
    time: "8:30 PM",
    venue: "Paradise Theatre",
    image: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=1170&auto=format&fit=crop",
    price: "$130",
    labels: ["Musical", "Jazz", "Drama"],
    description: "Step into the jazzy world of Chicago: The Musical, where fame, fortune, and scandal collide in a dazzling performance.",
  },
  {
    id: "lion-king",
    title: "The Lion King",
    artist: "Disney Theatrical",
    date: "July 25, 2024",
    time: "2:00 PM",
    venue: "Minskoff Theatre",
    image: "https://images.unsplash.com/photo-1518834107812-67b0b7c58434?q=80&w=1170&auto=format&fit=crop",
    price: "$145",
    labels: ["Musical", "Family", "Disney"],
    description: "Experience the circle of life in Disney's The Lion King, a breathtaking musical that brings the African savanna to life.",
  },
  {
    id: "wicked",
    title: "Wicked",
    artist: "Gershwin Theatre Company",
    date: "August 1, 2024",
    time: "7:30 PM",
    venue: "Gershwin Theatre",
    image: "https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&w=1170&auto=format&fit=crop",
    price: "$140",
    labels: ["Musical", "Fantasy", "Broadway"],
    description: "Discover the untold story of the witches of Oz in Wicked, a spellbinding musical filled with magic and adventure.",
  },
  {
    id: "hamilton",
    title: "Hamilton",
    artist: "Original Broadway Cast",
    date: "August 5, 2024",
    time: "8:00 PM",
    venue: "Richard Rodgers Theatre",
    image: "https://images.unsplash.com/photo-1468359601543-843bfaef291a?q=80&w=1168&auto=format&fit=crop",
    price: "$200",
    labels: ["Musical", "Historical", "Hip-Hop"],
    description: "Experience the revolutionary story of Alexander Hamilton, told through a groundbreaking blend of hip-hop and musical theatre.",
  },
  {
    id: "mamma-mia",
    title: "Mamma Mia!",
    artist: "ABBA Tribute Cast",
    date: "August 10, 2024",
    time: "7:00 PM",
    venue: "Novello Theatre",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1074&auto=format&fit=crop",
    price: "$95",
    labels: ["Musical", "Comedy", "Pop"],
    description: "Join the ABBA Tribute Cast for a fun-filled night of music and laughter in Mamma Mia!, a feel-good musical that will have you singing along.",
  },
  {
    id: "rent",
    title: "RENT",
    artist: "New York Theatre Group",
    date: "August 15, 2024",
    time: "8:00 PM",
    venue: "Nederlander Theatre",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1170&auto=format&fit=crop",
    price: "$110",
    labels: ["Musical", "Drama", "Rock"],
    description: "Experience the powerful story of love and friendship in RENT, a groundbreaking musical that captures the struggles of a generation.",
  },
  {
    id: "west-side",
    title: "West Side Story",
    artist: "Broadway Classic Company",
    date: "August 20, 2024",
    time: "7:30 PM",
    venue: "Palace Theatre",
    image: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?q=80&w=1170&auto=format&fit=crop",
    price: "$125",
    labels: ["Musical", "Romance", "Drama"],
    description: "Experience the timeless love story of West Side Story, a musical that explores the themes of love and rivalry in 1950s New York.",
  },
  {
    id: "aladdin",
    title: "Aladdin",
    artist: "Disney Theatrical",
    date: "August 25, 2024",
    time: "2:30 PM",
    venue: "New Amsterdam Theatre",
    image: "https://images.unsplash.com/photo-1519682577862-22b62b24e493?q=80&w=1170&auto=format&fit=crop",
    price: "$135",
    labels: ["Musical", "Family", "Disney"],
    description: "Join Aladdin on a magical carpet ride in Disney's Aladdin, a musical adventure filled with unforgettable songs and dazzling visuals.",
  },
  {
    id: "hairspray",
    title: "Hairspray",
    artist: "Neil Simon Theatre Company",
    date: "September 1, 2024",
    time: "7:00 PM",
    venue: "Neil Simon Theatre",
    image: "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?q=80&w=1169&auto=format&fit=crop",
    price: "$105",
    labels: ["Musical", "Comedy", "60s"],
    description: "Get ready to dance and sing along in Hairspray, a high-energy musical that celebrates diversity and self-acceptance.",
  },
  {
    id: "book-of-mormon",
    title: "The Book of Mormon",
    artist: "Eugene O'Neill Theatre Group",
    date: "September 5, 2024",
    time: "8:00 PM",
    venue: "Eugene O'Neill Theatre",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1170&auto=format&fit=crop",
    price: "$140",
    labels: ["Musical", "Comedy", "Satire"],
    description: "Experience the outrageous comedy of The Book of Mormon, a satirical musical that takes you on a hilarious journey through the world of religion.",
  },
  {
    id: "dear-evan-hansen",
    title: "Dear Evan Hansen",
    artist: "Music Box Theatre Company",
    date: "September 10, 2024",
    time: "7:30 PM",
    venue: "Music Box Theatre",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1074&auto=format&fit=crop",
    price: "$130",
    labels: ["Musical", "Drama", "Contemporary"],
    description: "Join Evan Hansen in this poignant musical that explores themes of mental health, connection, and the impact of social media.",
  },
  {
    id: "miss-saigon",
    title: "Miss Saigon",
    artist: "Broadway Revival Cast",
    date: "September 15, 2024",
    time: "7:00 PM",
    venue: "Broadway Theatre",
    image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=1170&auto=format&fit=crop",
    price: "$120",
    labels: ["Musical", "Drama", "Romance"],
    description: "Experience the heart-wrenching story of love and sacrifice in Miss Saigon, a powerful musical set against the backdrop of the Vietnam War.",
  },
  {
    id: "jersey-boys",
    title: "Jersey Boys",
    artist: "August Wilson Theatre Group",
    date: "September 20, 2024",
    time: "8:00 PM",
    venue: "August Wilson Theatre",
    image: "https://images.unsplash.com/photo-1468359601543-843bfaef291a?q=80&w=1168&auto=format&fit=crop",
    price: "$115",
    labels: ["Musical", "Biography", "60s"],
    description: "Join the original members of The Four Seasons in Jersey Boys, a musical that tells the story of their rise to fame and the challenges they faced.",
  },
  {
    id: "mary-poppins",
    title: "Mary Poppins",
    artist: "Disney Theatrical",
    date: "September 25, 2024",
    time: "2:00 PM",
    venue: "New Amsterdam Theatre",
    image: "https://images.unsplash.com/photo-1522776203873-e4961ae6e07b?q=80&w=1170&auto=format&fit=crop",
    price: "$125",
    labels: ["Musical", "Family", "Disney"],
    description: "Experience the magic of Mary Poppins, a musical adventure filled with unforgettable songs and enchanting moments.",
  },
  {
    id: "hadestown",
    title: "Hadestown",
    artist: "Walter Kerr Theatre Company",
    date: "September 30, 2024",
    time: "7:30 PM",
    venue: "Walter Kerr Theatre",
    image: "https://images.unsplash.com/photo-1514533212735-5df27d970db9?q=80&w=1170&auto=format&fit=crop",
    price: "$145",
    labels: ["Musical", "Folk", "Mythology"],
    description: "Journey to the underworld in Hadestown, a modern retelling of the ancient Greek myth of Orpheus and Eurydice, set to a folk-inspired score.",
  },
  {
    id: "beetlejuice",
    title: "Beetlejuice",
    artist: "Winter Garden Theatre Group",
    date: "October 5, 2024",
    time: "8:00 PM",
    venue: "Winter Garden Theatre",
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=1171&auto=format&fit=crop",
    price: "$135",
    labels: ["Musical", "Comedy", "Fantasy"],
    description: "Join the mischievous ghost in Beetlejuice, a hilarious musical that brings the beloved film to life with a fresh twist.",
  },
  {
    id: "six",
    title: "SIX: The Musical",
    artist: "Brooks Atkinson Theatre Company",
    date: "October 10, 2024",
    time: "7:00 PM",
    venue: "Brooks Atkinson Theatre",
    image: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?q=80&w=1170&auto=format&fit=crop",
    price: "$125",
    labels: ["Musical", "Historical", "Pop"],
    description: "Experience the story of the six wives of Henry VIII in SIX, a pop musical that reimagines history through a modern lens.",
  },
];
