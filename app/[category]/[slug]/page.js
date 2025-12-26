import Link from "next/link";
import { notFound } from "next/navigation";
import ViewsCounter from "@/components/ViewsCounter";
import { createClient } from "@sanity/client";
import imageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: "2023-01-01",
});

// Image URL builder
const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

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

export async function generateMetadata({ params }) {
  const { category, slug } = await params;

  if (!validCategories.includes(category)) {
    return { title: "Not Found" };
  }

  const item = await client.fetch(
    `*[_type == "artwork" && slug.current == $slug][0]{
      title,
      description
    }`,
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
      mainImage{
        asset->{
          _id,
          url
        }
      },
      availabilityStatus,
      views
    }`,
    { slug }
  );

  if (!item) {
    notFound();
  }

  // Generate proper image URL
  const imageUrl = item.mainImage?.asset?.url || 
                   (item.mainImage?.asset ? urlFor(item.mainImage).width(800).url() : null);

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-r from-teal-800 to-amber-700 text-white py-12">
        <div className="max-w-5xl mx-auto px-4">
          <Link
            href={`/${category}`}
            className="text-white/80 hover:text-white mb-4 inline-block"
          >
            ← Back to {category.replace(/-/g, " ")}
          </Link>

          <h1 className="text-5xl font-bold">{item.title}</h1>

          <div className="flex items-center gap-4 mt-2">
            <p className="text-xl">{item.createdDate}</p>
            <ViewsCounter slug={slug} initialViews={item.views || 0} />
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg h-96 overflow-hidden">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500">No Image</p>
              </div>
            )}
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-800">
              About this Work
            </h2>

            <p className="text-gray-700 mb-6 leading-relaxed">
              {item.description}
            </p>

            <div className="space-y-3">
              <p>
                <strong>Date:</strong> {item.createdDate}
              </p>
              <p>
                <strong>Status:</strong> {item.availabilityStatus}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}