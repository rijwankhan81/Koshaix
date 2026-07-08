export type LocalStore = {
  id: number;
  name: string;
  nameBn?: string;
  location: string;
  locationBn?: string;
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
    nameBn: "ফ্রেশ মিট মার্কেট",
    location: "Downtown Dubai",
    locationBn: "ডাউনটাউন দুবাই",
    phone: "+971501234567",
    whatsapp: "+971501234567",
    image: "/images/shop.jpg",
    distance: "1.2 km away",
    categories: ["Beef", "Chicken", "Mutton"],
  },

  {
    id: 2,
    name: "Premium Halal Butcher",
    nameBn: "প্রিমিয়াম হালাল বাটচার",
    location: "Business Bay",
    locationBn: "বিজনেস বে",
    phone: "+971509876543",
    whatsapp: "+971509876543",
    image: "/images/shop.jpg",
    distance: "2.8 km away",
    categories: ["Chicken", "Seafood"],
  },

  {
    id: 3,
    name: "Organic Meat Hub",
    nameBn: "অর্গানিক মিট হাব",
    location: "Marina Dubai",
    locationBn: "মারিনা দুবাই",
    phone: "+971556667777",
    whatsapp: "+971556667777",
    image: "/images/shop.jpg",
    distance: "4.1 km away",
    categories: ["Beef", "Lamb"],
  },

  {
    id: 4,
    name: "Dubai Fresh Cuts",
    nameBn: "দুবাই ফ্রেশ কাটস",
    location: "Jumeirah",
    locationBn: "জুমেইরা",
    phone: "+971522334455",
    whatsapp: "+971522334455",
    image: "/images/shop.jpg",
    distance: "3.5 km away",
    categories: ["Chicken", "Turkey", "Duck"],
  },

  {
    id: 5,
    name: "Royal Butcher House",
    nameBn: "রয়েল বাটচার হাউস",
    location: "Al Barsha",
    locationBn: "আল বারশা",
    phone: "+971544556677",
    whatsapp: "+971544556677",
    image: "/images/shop.jpg",
    distance: "5.3 km away",
    categories: ["Beef", "Mutton", "Lamb"],
  },

  {
    id: 6,
    name: "Sea & Meat Express",
    nameBn: "সী অ্যান্ড মিট এক্সপ্রেস",
    location: "Deira Dubai",
    locationBn: "দেইরা দুবাই",
    phone: "+971588899900",
    whatsapp: "+971588899900",
    image: "/images/shop.jpg",
    distance: "6.7 km away",
    categories: ["Seafood", "Chicken", "Beef"],
  },
];
