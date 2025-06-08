export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  images: string[];
  date: string;
  location: string;
}

export const projects: Project[] = [
  {
    id: "dakdekproject",
    title: "Keuken renovatie",
    description: "Complete keuken renocatie",
    category: "Keuken",
    images: [
      "https://images.unsplash.com/photo-1556911220-bff31c812dba",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136",
      "https://images.unsplash.com/photo-1556909172-54557c7e4fb7",
      "https://images.unsplash.com/photo-1556909190-eccf4a8bf97a",
      "https://images.unsplash.com/photo-1556909212-d5b604d0c90d",
    ],
    date: "Januari 2024",
    location: "Den Haag, Zuid-holland",
  },
  {
    id: "badkamer-renovatie",
    title: "Luxe badkamer",
    description: "Moderne badkamer renovatie",
    category: "Badkamers",
    images: [
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef15",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef16",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef17",
      "https://images.unsplash.com/photo-1552321554-5fefe8c9ef18",
    ],
    date: "December 2023",
    location: "Monster, Zuid-holland",
  },
  {
    id: "toilet-renovatie",
    title: "Uitbreiding toilet",
    description: "Verlenging van een toilet",
    category: "Toilet",
    images: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c751",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c752",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c753",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c754",
    ],
    date: "November 2023",
    location: "Amsterdam, Noord-holland",
  },
];
