export type Product = {
  id: number;
  name: string;
  price: number;
  oldPrice?: number;
  image: string;
  category: string;
};

export const productsData: Product[] = [
  {
    id: 1,
    name: "Chicken Skewers (Boneless)",
    price: 225.83,
    image: "/images/products/chicken-skewers.png",
    category: "chicken",
  },
  {
    id: 2,
    name: "Lamb Chops (Fresh Cut)",
    price: 265.7,
    image: "/images/products/lamb-chops.png",
    category: "mutton",
  },
  {
    id: 3,
    name: "Premium Beef Steak",
    price: 303.8,
    image: "/images/products/beef-steak.png",
    category: "beef",
  },
  {
    id: 4,
    name: "Ribeye Steak (Fresh)",
    price: 264.25,
    image: "/images/products/ribeye.png",
    category: "beef",
  },
  {
    id: 5,
    name: "Lamb Rib Rack",
    price: 109.8,
    oldPrice: 124.9,
    image: "/images/products/lamb-ribs.png",
    category: "mutton",
  },
  {
    id: 6,
    name: "Minced Meat (Keema)",
    price: 358.21,
    image: "/images/products/minced-meat.png",
    category: "mutton",
  },
  {
    id: 7,
    name: "Chicken Breast (Boneless)",
    price: 149.43,
    image: "/images/products/chicken-breast.png",
    category: "chicken",
  },
  {
    id: 8,
    name: "Fresh Sausages",
    price: 822.1,
    image: "/images/products/sausages.png",
    category: "processed",
  },
];
