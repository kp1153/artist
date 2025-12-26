import Link from "next/link";
import { notFound } from "next/navigation";
import ViewsCounter from "@/components/ViewsCounter";
import { createClient } from "@sanity/client";

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
  "available-for-sale"
];

export async function generateMetadata({ params }) {
  const { category, slug } = await params;

  const item = await client.fetch(
    `*[_type == "artwork" && slug.current == $slug][0]{ title, description }`,
    { slug }
  );

  if (!item) {
    return { title: "Not Found" };
  }

  return {
    title: `${item.title} | Prof. Uttama Dixit`,
    description: item.description,
    openGraph: {
      title: item.title,
      description: item.description,
    },
  };
}

export default async function DetailPage({ params }) {
  const { category, slug } = await params;

  if (!validCategories.includes(category)) {
    notFound();
  }

  const item = await client.fetch(
    `*[_type == "artwork" && slug.current == $slug][0]{
      title,
createdDate,
description,
mainImage,
availabilityStatus,
views
    }`,
    { slug }
  );

  if (!item) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-teal-800 to-amber-700 text-white py-12">
        <div className="max-w-5xl mx-auto px-4">
          <Link href={`/${category}`} className="text-white/80 hover:text-white mb-4 inline-block">
            ← Back to {category.replace('-', ' ')}
          </Link>
          <h1 className="text-5xl font-bold">{item.title}</h1>
          <div className="flex items-center gap-4 mt-2">
            <p className="text-xl">{item.date}</p>
            <ViewsCounter slug={slug} initialViews={item.views || 0} />
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-500">Artwork Image</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">About this Work</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">{item.description}</p>
            
            <div className="space-y-3 mb-8">
              <p><strong>Medium:</strong> {item.medium}</p>
              <p><strong>Dimensions:</strong> {item.dimensions}</p>
              <p><strong>Year:</strong> {item.year}</p>
            </div>

            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed">{item.content}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}