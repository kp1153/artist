import Link from "next/link";
import { notFound } from "next/navigation";

// Valid categories
const validCategories = ["folk-art", "contemporary", "gallery", "exhibitions", "publications", "blog"];

export default function CategoryPage({ params }) {
  const { category } = params;

  // Validate category
  if (!validCategories.includes(category)) {
    notFound();
  }

  // Category titles
  const categoryTitles = {
    "folk-art": "Folk Art",
    "contemporary": "Contemporary Art",
    "gallery": "Complete Gallery",
    "exhibitions": "Exhibitions",
    "publications": "Publications",
    "blog": "Blog & Articles"
  };

  // Mock data - Replace with Sanity CMS fetch
  const items = [
    { slug: "lotus-series-2024", title: "Lotus Series 2024", image: "/placeholder1.jpg", date: "2024" },
    { slug: "kashi-heritage", title: "Kashi Heritage Collection", image: "/placeholder2.jpg", date: "2023" },
    { slug: "abstract-studies", title: "Abstract Studies", image: "/placeholder3.jpg", date: "2023" },
    { slug: "bhu-annual-exhibition", title: "BHU Annual Exhibition", image: "/placeholder4.jpg", date: "2024" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-teal-800 to-amber-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">{categoryTitles[category]}</h1>
          <p className="text-xl">Explore the collection</p>
        </div>
      </section>

      {/* Items Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <Link 
              key={item.slug}
              href={`/${category}/${item.slug}`}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 group-hover:from-teal-100 group-hover:to-amber-100 transition-all flex items-center justify-center">
                <p className="text-gray-500">Image Placeholder</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-teal-700 transition">{item.title}</h3>
                <p className="text-gray-500">{item.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}