import GalleryLightbox from "@/components/GalleryLightbox";
import { notFound } from "next/navigation";
import ViewsCounter from "@/components/ViewsCounter";
import { createClient } from "@sanity/client";
import { Edit } from "lucide-react";

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

/* ---------- METADATA ---------- */
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
  };
}

/* ---------- PAGE ---------- */
export default async function DetailPage({ params }) {
  const { category, slug } = await params;

  if (!validCategories.includes(category)) {
    notFound();
  }

  const item = await client.fetch(
    `*[_type == "artwork" && slug.current == $slug][0]{
      _id,
      title,
      createdDate,
      description,
      mainImage,
      gallery[]{ url, alt },
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

      {/* Edit Button */}
      <a 
        href={`https://www.artistuttamadixit.online/studio/structure/artwork;${item._id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-blue-600 text-white px-4 py-3 rounded-lg shadow-lg hover:bg-blue-700 flex items-center gap-2 z-50"
      >
        <Edit size={18} />
        संपादित करें
      </a>

      {/* ===== Main Content (page starts here directly) ===== */}
      <section className="max-w-5xl mx-auto px-4 pt-10 pb-14">
        <div className="grid md:grid-cols-2 gap-10">

          {/* Image */}
          {item.mainImage && (
            <div className="rounded-lg h-96 overflow-hidden">
              <img
                src={item.mainImage}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Text */}
          <div>
            <h1 className="text-3xl font-bold mb-4 text-gray-900">
              {item.title}
            </h1>

            {item.description && (
              <p className="text-gray-700 leading-relaxed mb-6">
                {item.description}
              </p>
            )}

            <div className="space-y-2 text-sm text-gray-700">
              {item.createdDate && (
                <p>
                  <strong>तारीख:</strong> {item.createdDate}
                </p>
              )}
              {item.availabilityStatus && (
                <p>
                  <strong>स्थिति:</strong> {item.availabilityStatus}
                </p>
              )}
              <div className="text-gray-600">
                <ViewsCounter slug={slug} initialViews={item.views || 0} /> views
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Gallery ===== */}
      {item.gallery && item.gallery.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 pb-16">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">
            गैलरी
          </h2>

          <GalleryLightbox images={item.gallery} />
                  </section>
      )}

    </div>
  );
}