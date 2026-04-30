export type BlogPost = {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  author: string;
  date: string; // ISO e.g. "2025-10-12"
  formattedDate?: string; // generated in getStaticProps
  image?: string;
  slug: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "How to Start a Business in UAE: Complete Guide for 2026",
    category: "Business Setup",
    excerpt:
      "Learn everything you need to know about setting up a business in the UAE, including mainland, free zone, and offshore options.",
    author: "Elegant Services",
    date: "2026-03-10",
    image: "/images/blog/business-setup-uae.jpg",
    slug: "how-to-start-business-in-uae",
  },
  {
    id: "2",
    title: "LLC Company Formation in Dubai: Step-by-Step Process",
    category: "Company Formation",
    excerpt:
      "Discover the process, requirements, and benefits of forming an LLC company in Dubai with 100% foreign ownership.",
    author: "Elegant Services",
    date: "2026-03-12",
    image: "/images/blog/llc-dubai.jpg",
    slug: "llc-company-formation-dubai",
  },
  {
    id: "3",
    title: "Product Registration in Dubai Municipality: Complete Guide",
    category: "Product Registration",
    excerpt:
      "Understand how to register cosmetic, food, and other consumer products in Dubai Municipality for safe market entry.",
    author: "Elegant Services",
    date: "2026-03-15",
    image: "/images/blog/product-registration.jpg",
    slug: "product-registration-dubai-municipality",
  },
  {
    id: "4",
    title: "How to Find a Distributor in UAE: Proven Strategies",
    category: "Business Growth",
    excerpt:
      "Explore practical ways to find reliable distributors in the UAE through exhibitions, B2B platforms, and networking.",
    author: "Elegant Services",
    date: "2026-03-18",
    image: "/images/blog/find-distributor.jpg",
    slug: "how-to-find-distributor-in-uae",
  },
  {
    id: "5",
    title: "Family Visa in Dubai: Requirements, Process & Documents",
    category: "Visa Services",
    excerpt:
      "A complete guide to sponsoring your family in Dubai, including eligibility, documents, and step-by-step process.",
    author: "Elegant Services",
    date: "2026-03-20",
    image: "/images/blog/family-visa.jpg",
    slug: "family-visa-dubai-guide",
  },
  {
    id: "6",
    title: "Employment Visa Process in Dubai: Everything You Need to Know",
    category: "Visa Services",
    excerpt:
      "Learn about employment visa processing in Dubai including labour approval, medical tests, and visa stamping.",
    author: "Elegant Services",
    date: "2026-03-22",
    image: "/images/blog/employment-visa.jpg",
    slug: "employment-visa-dubai-process",
  },
  {
    id: "7",
    title: "Tax Residency Certificate UAE: Benefits & Application Guide",
    category: "Tax & Compliance",
    excerpt:
      "Understand how to obtain a Tax Residency Certificate in UAE and benefit from Double Tax Avoidance Agreements.",
    author: "Elegant Services",
    date: "2026-03-25",
    image: "/images/blog/trc-uae.jpg",
    slug: "tax-residency-certificate-uae",
  },
  {
    id: "8",
    title: "Authorized Representative in UAE: Why It Matters",
    category: "Compliance",
    excerpt:
      "Learn how Authorized Representative services help foreign companies register and sell products in the UAE market.",
    author: "Elegant Services",
    date: "2026-03-27",
    image: "/images/blog/ar-services.jpg",
    slug: "authorized-representative-uae",
  },
  {
    id: "9",
    title: "IOR & E-Commerce Fulfillment in UAE: Sell Without Company Setup",
    category: "E-commerce",
    excerpt:
      "Discover how IOR and fulfillment services allow you to sell in UAE without opening a company or hiring a distributor.",
    author: "Elegant Services",
    date: "2026-03-29",
    image: "/images/blog/ior-fulfillment.jpg",
    slug: "ior-ecommerce-fulfillment-uae",
  },
  {
    id: "10",
    title: "Free Zone vs Mainland Company in UAE: Which is Better?",
    category: "Business Setup",
    excerpt:
      "Compare free zone and mainland company formation options in UAE to choose the best structure for your business.",
    author: "Elegant Services",
    date: "2026-04-01",
    image: "/images/blog/freezone-vs-mainland.jpg",
    slug: "freezone-vs-mainland-uae",
  },
];
