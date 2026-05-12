export type LocalStore = {
  id: number;
  name: string;
  location: string;
  phone: string;
  whatsapp: string;
  image: string;
  distance: string;
  categories: string[];
};

export const localStores: LocalStore[] = [
  {
    id: 1,
    name: "Fresh Meat Market",
    location: "Downtown Dubai",
    phone: "+971501234567",
    whatsapp: "+971501234567",
    image: "/images/shop.jpg",
    distance: "1.2 km away",
    categories: ["Beef", "Chicken", "Mutton"],
  },

  {
    id: 2,
    name: "Premium Halal Butcher",
    location: "Business Bay",
    phone: "+971509876543",
    whatsapp: "+971509876543",
    image: "/images/shop.jpg",
    distance: "2.8 km away",
    categories: ["Chicken", "Seafood"],
  },

  {
    id: 3,
    name: "Organic Meat Hub",
    location: "Marina Dubai",
    phone: "+971556667777",
    whatsapp: "+971556667777",
    image: "/images/shop.jpg",
    distance: "4.1 km away",
    categories: ["Beef", "Lamb"],
  },

  {
    id: 4,
    name: "Dubai Fresh Cuts",
    location: "Jumeirah",
    phone: "+971522334455",
    whatsapp: "+971522334455",
    image: "/images/shop.jpg",
    distance: "3.5 km away",
    categories: ["Chicken", "Turkey", "Duck"],
  },

  {
    id: 5,
    name: "Royal Butcher House",
    location: "Al Barsha",
    phone: "+971544556677",
    whatsapp: "+971544556677",
    image: "/images/shop.jpg",
    distance: "5.3 km away",
    categories: ["Beef", "Mutton", "Lamb"],
  },

  {
    id: 6,
    name: "Sea & Meat Express",
    location: "Deira Dubai",
    phone: "+971588899900",
    whatsapp: "+971588899900",
    image: "/images/shop.jpg",
    distance: "6.7 km away",
    categories: ["Seafood", "Chicken", "Beef"],
  },
];
