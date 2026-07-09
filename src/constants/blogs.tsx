export type BlogPost = {
  id: string;
  title: string;
  titleBn?: string;
  category: string;
  categoryBn?: string;
  excerpt: string;
  excerptBn?: string;
  content: string; // HTML content
  contentBn?: string; // HTML content in Bangla
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
    titleBn: "প্রতিদিন প্রিমিয়াম তাজা মাংস ডেলিভারি",
    category: "Meat",
    categoryBn: "মাংস",
    excerpt:
      "Discover premium farm-fresh meat delivered directly to your doorstep every day.",
    excerptBn:
      "প্রতিদিন সরাসরি আপনার দরজায় পৌঁছে দেওয়া প্রিমিয়াম ফার্ম-ফ্রেশ মাংস উপভোগ করুন।",
    content: `
      <p>
        We provide high-quality fresh meat sourced directly from trusted farms and local suppliers.
      </p>

      <h2>Why Choose Our Meat?</h2>

      <p>
        Freshness, hygiene, and premium quality are our top priorities to ensure the best experience.
      </p>
    `,
    contentBn: `
      <p>
        আমরা বিশ্বস্ত খামার এবং স্থানীয় সরবরাহকারীদের কাছ থেকে সরাসরি সংগ্রহ করা উচ্চমানের তাজা মাংস সরবরাহ করি।
      </p>

      <h2>কেন আমাদের মাংস বেছে নেবেন?</h2>

      <p>
        সর্বোত্তম অভিজ্ঞতা নিশ্চিত করতে তাজা পণ্য, স্বাস্থ্যবিধি এবং প্রিমিয়াম মান আমাদের সর্বোচ্চ অগ্রাধিকার।
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
    titleBn: "প্রতিটি স্টেকপ্রেমীর জানা উচিত এমন সেরা ৫টি বিফ কাট",
    category: "Beef",
    categoryBn: "গরুর মাংস",
    excerpt:
      "Learn about the best beef cuts for grilling, roasting, and premium steak dinners.",
    excerptBn:
      "গ্রিলিং, রোস্টিং এবং প্রিমিয়াম স্টেক ডিনারের জন্য সেরা বিফ কাটগুলো সম্পর্কে জানুন।",
    content: `
      <p>
        Different cuts of beef provide different textures, flavors, and cooking experiences.
      </p>

      <h2>Popular Beef Cuts</h2>

      <p>
        Ribeye, T-bone, Sirloin, Tenderloin, and Brisket are among the most loved cuts worldwide.
      </p>
    `,
    contentBn: `
      <p>
        গরুর মাংসের বিভিন্ন কাট ভিন্ন ভিন্ন স্বাদ, গঠন এবং রান্নার অভিজ্ঞতা প্রদান করে।
      </p>

      <h2>জনপ্রিয় বিফ কাট</h2>

      <p>
        রিবআই, টি-বোন, সিরলয়েন, টেন্ডারলয়েন এবং ব্রিসকেট বিশ্বের সবচেয়ে জনপ্রিয় বিফ কাটগুলোর মধ্যে অন্যতম।
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
    titleBn: "তাজা মুরগির মাংস খাওয়ার স্বাস্থ্য উপকারিতা",
    category: "Chicken",
    categoryBn: "মুরগি",
    excerpt:
      "Fresh chicken is packed with protein and essential nutrients for a balanced diet.",
    excerptBn:
      "তাজা মুরগির মাংস প্রোটিন ও প্রয়োজনীয় পুষ্টিগুণে সমৃদ্ধ, যা সুষম খাদ্যের জন্য গুরুত্বপূর্ণ।",
    content: `
      <p>
        Chicken is one of the healthiest and most versatile protein sources available.
      </p>

      <h2>Rich in Protein</h2>

      <p>
        Fresh chicken supports muscle growth, energy, and healthy body function.
      </p>
    `,
    contentBn: `
      <p>
        মুরগির মাংস স্বাস্থ্যকর এবং বহুমুখী প্রোটিনের অন্যতম সেরা উৎস।
      </p>

      <h2>প্রোটিনে সমৃদ্ধ</h2>

      <p>
        তাজা মুরগির মাংস পেশির বৃদ্ধি, শক্তি উৎপাদন এবং শরীরের স্বাভাবিক কার্যক্রম বজায় রাখতে সহায়তা করে।
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
    titleBn: "বাড়িতে সঠিকভাবে মাংস সংরক্ষণের উপায়",
    category: "Storage",
    categoryBn: "সংরক্ষণ",
    excerpt:
      "Keep your meat fresh and safe with proper refrigeration and storage techniques.",
    excerptBn:
      "সঠিক রেফ্রিজারেশন এবং সংরক্ষণ পদ্ধতি অনুসরণ করে মাংস তাজা ও নিরাপদ রাখুন।",
    content: `
      <p>
        Proper meat storage is essential for maintaining freshness and preventing contamination.
      </p>

      <h2>Storage Tips</h2>

      <p>
        Always refrigerate meat below 4°C and use airtight packaging for better preservation.
      </p>
    `,
    contentBn: `
      <p>
        মাংসের সতেজতা বজায় রাখা এবং দূষণ প্রতিরোধের জন্য সঠিকভাবে সংরক্ষণ করা অত্যন্ত গুরুত্বপূর্ণ।
      </p>

      <h2>মাংস সংরক্ষণের পরামর্শ</h2>

      <p>
        সবসময় ৪° সেলসিয়াসের নিচে মাংস রেফ্রিজারেটরে রাখুন এবং ভালোভাবে সংরক্ষণের জন্য বায়ুরোধী প্যাকেজিং ব্যবহার করুন।
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
    titleBn: "গ্রিল করা মাংসের জন্য সেরা মেরিনেড",
    category: "Recipes",
    categoryBn: "রেসিপি",
    excerpt:
      "Enhance flavor and tenderness with these delicious meat marinade ideas.",
    excerptBn:
      "এই সুস্বাদু মাংসের মেরিনেড আইডিয়াগুলো ব্যবহার করে স্বাদ ও কোমলতা বাড়িয়ে তুলুন।",
    content: `
      <p>
        Marinades help add flavor while making meat tender and juicy for grilling.
      </p>

      <h2>Popular Ingredients</h2>

      <p>
        Garlic, olive oil, herbs, yogurt, lemon, and spices create amazing flavor combinations.
      </p>
    `,
    contentBn: `
      <p>
        মেরিনেড মাংসে অতিরিক্ত স্বাদ যোগ করার পাশাপাশি গ্রিল করার সময় মাংসকে কোমল ও রসালো রাখতে সাহায্য করে।
      </p>

      <h2>জনপ্রিয় উপকরণ</h2>

      <p>
        রসুন, অলিভ অয়েল, বিভিন্ন হার্বস, দই, লেবু এবং মসলা ব্যবহার করে অসাধারণ স্বাদের মেরিনেড তৈরি করা যায়।
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
    titleBn: "হিমায়িত সামুদ্রিক খাবারের চেয়ে তাজা সামুদ্রিক খাবার কেন ভালো",
    category: "Seafood",
    categoryBn: "সামুদ্রিক খাবার",
    excerpt:
      "Fresh seafood offers better taste, texture, and nutritional value.",
    excerptBn:
      "তাজা সামুদ্রিক খাবার উন্নত স্বাদ, গঠন এবং পুষ্টিগুণ প্রদান করে।",
    content: `
      <p>
        Fresh seafood delivers superior flavor and retains more natural nutrients.
      </p>

      <h2>Freshness Matters</h2>

      <p>
        Fresh fish and shellfish are ideal for premium recipes and healthy meals.
      </p>
    `,
    contentBn: `
      <p>
        তাজা সামুদ্রিক খাবার উন্নত স্বাদ প্রদান করে এবং এতে প্রাকৃতিক পুষ্টিগুণ বেশি পরিমাণে বজায় থাকে।
      </p>

      <h2>সতেজতা গুরুত্বপূর্ণ</h2>

      <p>
        তাজা মাছ ও শেলফিশ প্রিমিয়াম রেসিপি এবং স্বাস্থ্যকর খাবার তৈরির জন্য আদর্শ।
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
    titleBn: "পারফেক্ট BBQ রিবস তৈরির রহস্য",
    category: "BBQ",
    categoryBn: "বারবিকিউ",
    excerpt: "Master the art of tender, smoky, and flavorful BBQ ribs at home.",
    excerptBn: "বাড়িতেই কোমল, স্মোকি এবং সুস্বাদু BBQ রিবস তৈরির কৌশল শিখুন।",
    content: `
      <p>
        Great BBQ ribs require the perfect balance of seasoning, smoke, and slow cooking.
      </p>

      <h2>Low and Slow Cooking</h2>

      <p>
        Cooking ribs slowly at low temperatures creates juicy and tender meat.
      </p>
    `,
    contentBn: `
      <p>
        অসাধারণ BBQ রিবস তৈরির জন্য সঠিক মসলা, স্মোকি ফ্লেভার এবং ধীরে রান্নার মধ্যে নিখুঁত ভারসাম্য প্রয়োজন।
      </p>

      <h2>কম তাপমাত্রায় ধীরে রান্না</h2>

      <p>
        কম তাপমাত্রায় দীর্ঘ সময় ধরে রিবস রান্না করলে মাংস কোমল ও রসালো হয়।
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
    titleBn: "ফার্ম-টু-টেবিল মাংস: এর প্রকৃত অর্থ কী",
    category: "Organic",
    categoryBn: "অর্গানিক",
    excerpt:
      "Understand the importance of farm-fresh sourcing and ethical meat production.",
    excerptBn:
      "ফার্ম-ফ্রেশ উৎস থেকে মাংস সংগ্রহ এবং নৈতিক মাংস উৎপাদনের গুরুত্ব সম্পর্কে জানুন।",
    content: `
      <p>
        Farm-to-table meat ensures freshness, transparency, and better quality standards.
      </p>

      <h2>Supporting Local Farms</h2>

      <p>
        Ethical sourcing helps local farmers while delivering healthier products to customers.
      </p>
    `,
    contentBn: `
      <p>
        ফার্ম-টু-টেবিল মাংস সতেজতা, স্বচ্ছতা এবং উন্নত মান নিশ্চিত করতে সাহায্য করে।
      </p>

      <h2>স্থানীয় খামারিদের সহায়তা</h2>

      <p>
        নৈতিকভাবে পণ্য সংগ্রহ স্থানীয় খামারিদের সহায়তা করার পাশাপাশি গ্রাহকদের কাছে স্বাস্থ্যকর পণ্য পৌঁছে দিতে সাহায্য করে।
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
    titleBn: "পারিবারিক ডিনারের জন্য সহজ খাসির মাংসের রেসিপি",
    category: "Recipes",
    categoryBn: "রেসিপি",
    excerpt:
      "Cook delicious lamb dishes with these easy and flavorful family recipes.",
    excerptBn:
      "সহজ ও সুস্বাদু এই রেসিপিগুলো অনুসরণ করে পরিবারের জন্য মজাদার খাসির মাংসের পদ তৈরি করুন।",
    content: `
      <p>
        Lamb is rich, tender, and perfect for hearty family dinners.
      </p>

      <h2>Popular Lamb Dishes</h2>

      <p>
        Lamb curry, grilled chops, and slow-cooked shanks are timeless favorites.
      </p>
    `,
    contentBn: `
      <p>
        খাসির মাংস সুস্বাদু, কোমল এবং পারিবারিক ডিনারের জন্য একটি চমৎকার খাবার।
      </p>

      <h2>জনপ্রিয় খাসির মাংসের পদ</h2>

      <p>
        খাসির মাংসের কারি, গ্রিলড চপ এবং ধীরে রান্না করা শ্যাঙ্ক সবসময়ের জনপ্রিয় খাবারের মধ্যে অন্যতম।
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
    titleBn: "মাংস প্রক্রিয়াজাতকরণে আমরা যেভাবে স্বাস্থ্যবিধি বজায় রাখি",
    category: "Hygiene",
    categoryBn: "স্বাস্থ্যবিধি",
    excerpt:
      "Discover the strict hygiene standards followed in our meat processing facilities.",
    excerptBn:
      "আমাদের মাংস প্রক্রিয়াজাতকরণ ব্যবস্থায় অনুসরণ করা কঠোর স্বাস্থ্যবিধি ও নিরাপত্তার মান সম্পর্কে জানুন।",
    content: `
      <p>
        Hygiene and food safety are at the core of our processing operations.
      </p>

      <h2>Clean Processing Environment</h2>

      <p>
        Temperature-controlled facilities and strict sanitation procedures ensure product safety.
      </p>
    `,
    contentBn: `
      <p>
        স্বাস্থ্যবিধি এবং খাদ্য নিরাপত্তা আমাদের মাংস প্রক্রিয়াজাতকরণ কার্যক্রমের মূল ভিত্তি।
      </p>

      <h2>পরিচ্ছন্ন প্রক্রিয়াজাতকরণ পরিবেশ</h2>

      <p>
        তাপমাত্রা নিয়ন্ত্রিত পরিবেশ এবং কঠোর স্যানিটেশন পদ্ধতি আমাদের পণ্যের নিরাপত্তা নিশ্চিত করে।
      </p>
    `,
    author: "Admin",
    date: "2026-04-01",
    image: "/images/blog/meat-processing-hygiene.jpg",
    slug: "meat-processing-hygiene",
  },
];
