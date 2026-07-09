export type Freshness = "fresh_today" | "frozen" | "chilled";

export type Product = {
  id: number;
  slug: string;
  name: string;
  nameBn: string;
  shortDesc: string;
  shortDescBn: string;
  price: number;
  priceBn: string;
  oldPrice?: number;
  oldPriceBn?: string;
  unit: string; // e.g. "per kg", "per 500g", "per piece"
  unitBn: string;
  image: string;
  rating: number; // 0–5
  reviewCount: number;
  inStock: boolean;
  freshness: Freshness;
  minOrderLabel: string; // e.g. "Min. order 500g"
  minOrderLabelBn: string;
  isBestSeller?: boolean;
  isNew?: boolean;
};

export type Category = {
  id: number;
  label: string;
  labelBn: string;
  slug: string;
  href: string;
  image: string;
  products: Product[];
};

const FRESHNESS_LABEL: Record<Freshness, { en: string; bn: string }> = {
  fresh_today: { en: "Fresh Today", bn: "আজকের তাজা" },
  chilled: { en: "Chilled", bn: "ঠান্ডা সংরক্ষিত" },
  frozen: { en: "Frozen", bn: "হিমায়িত" },
};

export const meatCategories: Category[] = [
  {
    id: 1,
    label: "Beef",
    labelBn: "গরুর মাংস",
    slug: "beef",
    href: "/category/beef",
    image: "/images/categories/beef.jpg",
    products: [
      {
        id: 3,
        slug: "premium-beef-steak",
        name: "Premium Beef Steak",
        nameBn: "প্রিমিয়াম গরুর মাংস স্টেক",
        shortDesc: "Hand-trimmed, aged for tenderness",
        shortDescBn: "হাতে ছাঁটা, কোমলতার জন্য এজড",
        price: 303.8,
        priceBn: "৩০৩.৮",
        unit: "per kg",
        unitBn: "প্রতি কেজি",
        image: "/images/products/beef-steak.png",
        rating: 4.7,
        reviewCount: 128,
        inStock: true,
        freshness: "chilled",
        minOrderLabel: "Min. order 500g",
        minOrderLabelBn: "সর্বনিম্ন অর্ডার ৫০০গ্রাম",
        isBestSeller: true,
      },
      {
        id: 4,
        slug: "ribeye-steak-fresh",
        name: "Ribeye Steak (Fresh)",
        nameBn: "ফ্রেশ রিবআই স্টেক",
        shortDesc: "Marbled cut, ideal for grilling",
        shortDescBn: "মার্বেলযুক্ত কাট, গ্রিলের জন্য উপযুক্ত",
        price: 264.25,
        priceBn: "২৬৪.২৫",
        unit: "per kg",
        unitBn: "প্রতি কেজি",
        image: "/images/products/ribeye.png",
        rating: 4.6,
        reviewCount: 84,
        inStock: true,
        freshness: "fresh_today",
        minOrderLabel: "Min. order 500g",
        minOrderLabelBn: "সর্বনিম্ন অর্ডার ৫০০গ্রাম",
      },
    ],
  },

  {
    id: 2,
    label: "Chicken",
    labelBn: "মুরগি",
    slug: "chicken",
    href: "/category/chicken",
    image: "/images/categories/chicken.jpg",
    products: [
      {
        id: 1,
        slug: "chicken-skewers-boneless",
        name: "Chicken Skewers (Boneless)",
        nameBn: "চিকেন স্কিওয়ার (বোনলেস)",
        shortDesc: "Ready-to-cook, pre-marinated skewers",
        shortDescBn: "রান্নার জন্য প্রস্তুত, প্রি-ম্যারিনেটেড স্কিওয়ার",
        price: 225.83,
        priceBn: "২২৫.৮৩",
        unit: "per kg",
        unitBn: "প্রতি কেজি",
        image: "/images/products/chicken-skewers.png",
        rating: 4.4,
        reviewCount: 61,
        inStock: true,
        freshness: "fresh_today",
        minOrderLabel: "Min. order 250g",
        minOrderLabelBn: "সর্বনিম্ন অর্ডার ২৫০গ্রাম",
        isNew: true,
      },
      {
        id: 7,
        slug: "chicken-breast-boneless",
        name: "Chicken Breast (Boneless)",
        nameBn: "চিকেন ব্রেস্ট (বোনলেস)",
        shortDesc: "Lean cut, skinless and trimmed",
        shortDescBn: "লিন কাট, চামড়াবিহীন ও পরিষ্কার",
        price: 149.43,
        priceBn: "১৪৯.৪৩",
        unit: "per kg",
        unitBn: "প্রতি কেজি",
        image: "/images/products/chicken-breast.png",
        rating: 4.8,
        reviewCount: 203,
        inStock: true,
        freshness: "fresh_today",
        minOrderLabel: "Min. order 500g",
        minOrderLabelBn: "সর্বনিম্ন অর্ডার ৫০০গ্রাম",
        isBestSeller: true,
      },
    ],
  },

  {
    id: 3,
    label: "Lamb",
    labelBn: "লাম্ব",
    slug: "lamb",
    href: "/category/lamb",
    image: "/images/categories/lamb.jpg",
    products: [
      {
        id: 9,
        slug: "fresh-lamb-leg",
        name: "Fresh Lamb Leg",
        nameBn: "ফ্রেশ লাম্ব লেগ",
        shortDesc: "Bone-in, ideal for slow roast",
        shortDescBn: "হাড়সহ, স্লো রোস্টের জন্য উপযুক্ত",
        price: 289.5,
        priceBn: "২৮৯.৫",
        unit: "per kg",
        unitBn: "প্রতি কেজি",
        image: "/images/products/lamb-leg.png",
        rating: 4.5,
        reviewCount: 47,
        inStock: true,
        freshness: "chilled",
        minOrderLabel: "Min. order 1kg",
        minOrderLabelBn: "সর্বনিম্ন অর্ডার ১ কেজি",
      },
    ],
  },

  {
    id: 4,
    label: "Mutton",
    labelBn: "মাটন",
    slug: "mutton",
    href: "/category/mutton",
    image: "/images/categories/mutton.jpg",
    products: [
      {
        id: 2,
        slug: "lamb-chops-fresh-cut",
        name: "Lamb Chops (Fresh Cut)",
        nameBn: "ফ্রেশ লাম্ব চপস",
        shortDesc: "Thick-cut chops, freshly trimmed",
        shortDescBn: "মোটা কাটের চপস, তাজা ছাঁটা",
        price: 265.7,
        priceBn: "২৬৫.৭",
        unit: "per kg",
        unitBn: "প্রতি কেজি",
        image: "/images/products/lamb-chops.png",
        rating: 4.6,
        reviewCount: 92,
        inStock: true,
        freshness: "fresh_today",
        minOrderLabel: "Min. order 500g",
        minOrderLabelBn: "সর্বনিম্ন অর্ডার ৫০০গ্রাম",
      },
      {
        id: 5,
        slug: "lamb-rib-rack",
        name: "Lamb Rib Rack",
        nameBn: "লাম্ব রিব র‍্যাক",
        shortDesc: "Frenched ribs, restaurant-style cut",
        shortDescBn: "ফ্রেঞ্চড রিবস, রেস্টুরেন্ট-স্টাইল কাট",
        price: 109.8,
        priceBn: "১০৯.৮",
        oldPrice: 124.9,
        oldPriceBn: "১২৪.৯",
        unit: "per kg",
        unitBn: "প্রতি কেজি",
        image: "/images/products/lamb-ribs.png",
        rating: 4.3,
        reviewCount: 35,
        inStock: false,
        freshness: "chilled",
        minOrderLabel: "Min. order 500g",
        minOrderLabelBn: "সর্বনিম্ন অর্ডার ৫০০গ্রাম",
      },
      {
        id: 6,
        slug: "minced-meat-keema",
        name: "Minced Meat (Keema)",
        nameBn: "মিন্সড মিট (কিমা)",
        shortDesc: "Freshly ground, medium fat ratio",
        shortDescBn: "তাজা গ্রাউন্ড, মাঝারি ফ্যাট অনুপাত",
        price: 358.21,
        priceBn: "৩৫৮.২১",
        unit: "per kg",
        unitBn: "প্রতি কেজি",
        image: "/images/products/minced-meat.png",
        rating: 4.5,
        reviewCount: 76,
        inStock: true,
        freshness: "fresh_today",
        minOrderLabel: "Min. order 250g",
        minOrderLabelBn: "সর্বনিম্ন অর্ডার ২৫০গ্রাম",
      },
    ],
  },

  {
    id: 5,
    label: "Turkey",
    labelBn: "টার্কি",
    slug: "turkey",
    href: "/category/turkey",
    image: "/images/categories/turkey.jpg",
    products: [
      {
        id: 10,
        slug: "whole-turkey-fresh",
        name: "Whole Turkey (Fresh)",
        nameBn: "ফ্রেশ গোটা টার্কি",
        shortDesc: "Farm-raised, cleaned and ready",
        shortDescBn: "খামারে প্রতিপালিত, পরিষ্কার ও প্রস্তুত",
        price: 499.99,
        priceBn: "৪৯৯.৯৯",
        unit: "per piece",
        unitBn: "প্রতি পিস",
        image: "/images/products/turkey-whole.png",
        rating: 4.2,
        reviewCount: 18,
        inStock: true,
        freshness: "chilled",
        minOrderLabel: "Sold whole",
        minOrderLabelBn: "সম্পূর্ণ বিক্রি হয়",
      },
    ],
  },

  {
    id: 6,
    label: "Duck",
    labelBn: "হাঁস",
    slug: "duck",
    href: "/category/duck",
    image: "/images/categories/duck.jpg",
    products: [
      {
        id: 11,
        slug: "fresh-duck-breast",
        name: "Fresh Duck Breast",
        nameBn: "ফ্রেশ হাঁসের ব্রেস্ট",
        shortDesc: "Skin-on, rich flavor cut",
        shortDescBn: "চামড়াসহ, সমৃদ্ধ স্বাদের কাট",
        price: 275.45,
        priceBn: "২৭৫.৪৫",
        unit: "per kg",
        unitBn: "প্রতি কেজি",
        image: "/images/products/duck-breast.png",
        rating: 4.4,
        reviewCount: 29,
        inStock: true,
        freshness: "chilled",
        minOrderLabel: "Min. order 500g",
        minOrderLabelBn: "সর্বনিম্ন অর্ডার ৫০০গ্রাম",
      },
    ],
  },

  {
    id: 7,
    label: "Seafood",
    labelBn: "সামুদ্রিক খাবার",
    slug: "seafood",
    href: "/category/seafood",
    image: "/images/categories/seafood.jpg",
    products: [
      {
        id: 12,
        slug: "atlantic-salmon-fillet",
        name: "Atlantic Salmon Fillet",
        nameBn: "অ্যাটলান্টিক সালমন ফিলেট",
        shortDesc: "Boneless fillet, deboned skin-on",
        shortDescBn: "হাড়বিহীন ফিলেট, চামড়াসহ",
        price: 420.75,
        priceBn: "৪২০.৭৫",
        unit: "per kg",
        unitBn: "প্রতি কেজি",
        image: "/images/products/salmon-fillet.png",
        rating: 4.7,
        reviewCount: 54,
        inStock: true,
        freshness: "fresh_today",
        minOrderLabel: "Min. order 250g",
        minOrderLabelBn: "সর্বনিম্ন অর্ডার ২৫০গ্রাম",
        isBestSeller: true,
      },
    ],
  },

  {
    id: 8,
    label: "Processed",
    labelBn: "প্রসেসড",
    slug: "processed",
    href: "/category/processed",
    image: "/images/categories/processed.jpg",
    products: [
      {
        id: 8,
        slug: "fresh-sausages",
        name: "Fresh Sausages",
        nameBn: "ফ্রেশ সসেজ",
        shortDesc: "House-made, mild spice blend",
        shortDescBn: "ঘরে তৈরি, হালকা মসলার মিশ্রণ",
        price: 822.1,
        priceBn: "৮২২.১",
        unit: "per kg",
        unitBn: "প্রতি কেজি",
        image: "/images/products/sausages.png",
        rating: 4.1,
        reviewCount: 22,
        inStock: true,
        freshness: "frozen",
        minOrderLabel: "Min. order 500g",
        minOrderLabelBn: "সর্বনিম্ন অর্ডার ৫০০গ্রাম",
      },
    ],
  },
];

export { FRESHNESS_LABEL };
