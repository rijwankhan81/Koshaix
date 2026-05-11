export type BlogPost = {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string; // HTML content
  author: string;
  date: string; // ISO e.g. "2025-10-12"
  formattedDate?: string; // generated in getStaticProps
  image?: string;
  slug: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Premium Fresh Meat Delivered Daily",
    category: "Meat",
    excerpt:
      "Discover premium farm-fresh meat delivered directly to your doorstep every day.",
    content: `
      <p>
        We provide high-quality fresh meat sourced directly from trusted farms and local suppliers.
      </p>

      <h2>Why Choose Our Meat?</h2>

      <p>
        Freshness, hygiene, and premium quality are our top priorities to ensure the best experience.
      </p>
    `,
    author: "Admin",
    date: "2026-04-20",
    image: "/images/blog/premium-fresh-meat.jpg",
    slug: "premium-fresh-meat",
  },

  {
    id: "2",
    title: "Top 5 Cuts of Beef Every Steak Lover Should Know",
    category: "Beef",
    excerpt:
      "Learn about the best beef cuts for grilling, roasting, and premium steak dinners.",
    content: `
      <p>
        Different cuts of beef provide different textures, flavors, and cooking experiences.
      </p>

      <h2>Popular Beef Cuts</h2>

      <p>
        Ribeye, T-bone, Sirloin, Tenderloin, and Brisket are among the most loved cuts worldwide.
      </p>
    `,
    author: "Admin",
    date: "2026-04-18",
    image: "/images/blog/top-beef-cuts-guide.jpg",
    slug: "top-beef-cuts-guide",
  },

  {
    id: "3",
    title: "Healthy Benefits of Eating Fresh Chicken",
    category: "Chicken",
    excerpt:
      "Fresh chicken is packed with protein and essential nutrients for a balanced diet.",
    content: `
      <p>
        Chicken is one of the healthiest and most versatile protein sources available.
      </p>

      <h2>Rich in Protein</h2>

      <p>
        Fresh chicken supports muscle growth, energy, and healthy body function.
      </p>
    `,
    author: "Admin",
    date: "2026-04-15",
    image: "/images/blog/healthy-benefits-fresh-chicken.jpg",
    slug: "healthy-benefits-fresh-chicken",
  },

  {
    id: "4",
    title: "How to Store Meat Properly at Home",
    category: "Storage",
    excerpt:
      "Keep your meat fresh and safe with proper refrigeration and storage techniques.",
    content: `
      <p>
        Proper meat storage is essential for maintaining freshness and preventing contamination.
      </p>

      <h2>Storage Tips</h2>

      <p>
        Always refrigerate meat below 4°C and use airtight packaging for better preservation.
      </p>
    `,
    author: "Admin",
    date: "2026-04-12",
    image: "/images/blog/how-to-store-meat.jpg",
    slug: "how-to-store-meat",
  },

  {
    id: "5",
    title: "Best Marinades for Grilled Meat",
    category: "Recipes",
    excerpt:
      "Enhance flavor and tenderness with these delicious meat marinade ideas.",
    content: `
      <p>
        Marinades help add flavor while making meat tender and juicy for grilling.
      </p>

      <h2>Popular Ingredients</h2>

      <p>
        Garlic, olive oil, herbs, yogurt, lemon, and spices create amazing flavor combinations.
      </p>
    `,
    author: "Admin",
    date: "2026-04-10",
    image: "/images/blog/best-meat-marinades.jpg",
    slug: "best-meat-marinades",
  },

  {
    id: "6",
    title: "Why Fresh Seafood Is Better Than Frozen",
    category: "Seafood",
    excerpt:
      "Fresh seafood offers better taste, texture, and nutritional value.",
    content: `
      <p>
        Fresh seafood delivers superior flavor and retains more natural nutrients.
      </p>

      <h2>Freshness Matters</h2>

      <p>
        Fresh fish and shellfish are ideal for premium recipes and healthy meals.
      </p>
    `,
    author: "Admin",
    date: "2026-04-08",
    image: "/images/blog/fresh-vs-frozen-seafood.jpg",
    slug: "fresh-vs-frozen-seafood",
  },

  {
    id: "7",
    title: "The Secret to Perfect BBQ Ribs",
    category: "BBQ",
    excerpt: "Master the art of tender, smoky, and flavorful BBQ ribs at home.",
    content: `
      <p>
        Great BBQ ribs require the perfect balance of seasoning, smoke, and slow cooking.
      </p>

      <h2>Low and Slow Cooking</h2>

      <p>
        Cooking ribs slowly at low temperatures creates juicy and tender meat.
      </p>
    `,
    author: "Admin",
    date: "2026-04-06",
    image: "/images/blog/perfect-bbq-ribs.jpg",
    slug: "perfect-bbq-ribs",
  },

  {
    id: "8",
    title: "Farm-to-Table Meat: What It Really Means",
    category: "Organic",
    excerpt:
      "Understand the importance of farm-fresh sourcing and ethical meat production.",
    content: `
      <p>
        Farm-to-table meat ensures freshness, transparency, and better quality standards.
      </p>

      <h2>Supporting Local Farms</h2>

      <p>
        Ethical sourcing helps local farmers while delivering healthier products to customers.
      </p>
    `,
    author: "Admin",
    date: "2026-04-04",
    image: "/images/blog/farm-to-table-meat.jpg",
    slug: "farm-to-table-meat",
  },

  {
    id: "9",
    title: "Easy Lamb Recipes for Family Dinner",
    category: "Recipes",
    excerpt:
      "Cook delicious lamb dishes with these easy and flavorful family recipes.",
    content: `
      <p>
        Lamb is rich, tender, and perfect for hearty family dinners.
      </p>

      <h2>Popular Lamb Dishes</h2>

      <p>
        Lamb curry, grilled chops, and slow-cooked shanks are timeless favorites.
      </p>
    `,
    author: "Admin",
    date: "2026-04-02",
    image: "/images/blog/easy-lamb-recipes.jpg",
    slug: "easy-lamb-recipes",
  },

  {
    id: "10",
    title: "How We Maintain Hygiene in Meat Processing",
    category: "Hygiene",
    excerpt:
      "Discover the strict hygiene standards followed in our meat processing facilities.",
    content: `
      <p>
        Hygiene and food safety are at the core of our processing operations.
      </p>

      <h2>Clean Processing Environment</h2>

      <p>
        Temperature-controlled facilities and strict sanitation procedures ensure product safety.
      </p>
    `,
    author: "Admin",
    date: "2026-04-01",
    image: "/images/blog/meat-processing-hygiene.jpg",
    slug: "meat-processing-hygiene",
  },
];
