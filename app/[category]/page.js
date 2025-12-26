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

const validCategories = [
  "earlier-work",
  "abstract",
  "semi-abstract",
  "beauty-of-nature",
  "spiritual",
  "miscellaneous",
  "workshop",
  "exhibitions",
  "blog",
  "available-for-sale",
];

export default async function CategoryPage({ params }) {
  const { category } = await params;

  if (!validCategories.includes(category)) {
    notFound();
  }

  const items = await client.fetch(
    `*[_type == "artwork" && category == $category] | order(date desc){
      slug,
      title,
      createdDate,
      views,
      mainImage
    }`,
    { category }
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ❌ Hero / Title section पूरी तरह हटाई गई */}

      <section className="max-w-7xl mx-auto px-4 py-10">
        {items.length === 0 ? null : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((item) => (
              <Link
                key={item.slug.current}
                href={`/${category}/${item.slug.current}`}
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={item.mainImage}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {item.title}
                  </h3>

                  <div className="flex items-center justify-between text-sm text-gray-500 mt-2">
                    <span>{item.createdDate}</span>
                    <span className="flex items-center gap-1">
                      <Eye size={14} />
                      {item.views || 0}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
