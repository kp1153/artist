 import Link from "next/link";
import { notFound } from "next/navigation";
import ViewsCounter from "@/components/ViewsCounter";

const validCategories = ["folk-art", "contemporary", "gallery", "exhibitions", "publications", "blog"];

export default async function DetailPage({ params }) {
  const { category, slug } = await params;

  if (!validCategories.includes(category)) {
    notFound();
  }

  // Mock data - Replace with Sanity CMS fetch
  const item = {
    title: "Lotus Series 2024",
    date: "March 2024",
    description: "A contemporary exploration of the lotus motif in Indian folk art tradition, blending Kashi's cultural heritage with modern artistic expressions.",
    content: `This series represents a deep dive into the symbolism of the lotus in Indian art and culture. 
    Drawing inspiration from traditional Kashi folk paintings, these works reimagine the sacred flower through 
    a contemporary lens while maintaining its spiritual and cultural significance.`,
    medium: "Acrylic on Canvas",
    dimensions: "36 x 48 inches",
    year: "2024"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-teal-800 to-amber-700 text-white py-12">
        <div className="max-w-5xl mx-auto px-4">
          <Link href={`/${category}`} className="text-white/80 hover:text-white mb-4 inline-block">
            ← Back to {category.replace('-', ' ')}
          </Link>
          <h1 className="text-5xl font-bold">{item.title}</h1>
          <div className="flex items-center gap-4 mt-2">
            <p className="text-xl">{item.date}</p>
            <ViewsCounter slug={slug} />
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Image */}
          <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-500">Artwork Image</p>
          </div>

          {/* Details */}
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