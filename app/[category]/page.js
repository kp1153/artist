import Link from "next/link";
import { notFound } from "next/navigation";
import { createClient } from "@sanity/client";
import { Eye } from "lucide-react";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: "2023-01-01",
});

const validCategories = ["folk-art", "contemporary", "gallery", "exhibitions", "publications", "blog"];

export default async function CategoryPage({ params }) {
  const { category } = await params;

  if (!validCategories.includes(category)) {
    notFound();
  }

  const categoryTitles = {
    "folk-art": "Folk Art",
    "contemporary": "Contemporary Art",
    "gallery": "Complete Gallery",
    "exhibitions": "Exhibitions",
    "publications": "Publications",
    "blog": "Blog & Articles"
  };

  // Sanity से data fetch करें
  const items = await client.fetch(
    `*[_type == "post" && category == $category] | order(date desc){
      slug,
      title,
      date,
      views
    }`,
    { category }
  );

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
              key={item.slug.current}
              href={`/${category}/${item.slug.current}`}
              className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="h-64 bg-gradient-to-br from-gray-200 to-gray-300 group-hover:from-teal-100 group-hover:to-amber-100 transition-all flex items-center justify-center">
                <p className="text-gray-500">Image Placeholder</p>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-teal-700 transition">{item.title}</h3>
                <div className="flex items-center justify-between">
                  <p className="text-gray-500">{item.date}</p>
                  <div className="flex items-center gap-1 text-gray-600 text-sm">
                    <Eye size={16} />
                    <span>{item.views || 0}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}