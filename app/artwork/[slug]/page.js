import { getArtworksByCategory, urlFor } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function CategoryPage({ params }) {
  const artworks = await getArtworksByCategory(params.slug)

  if (!artworks || artworks.length === 0) {
    notFound()
  }

  // Get category name from first artwork
  const categoryName = params.slug.split('-').map(word => 
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ')

  return (
    <div className="min-h-screen bg-[#f5efe6]">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/gallery" className="text-sm hover:underline mb-4 inline-block">
            ← Back to Gallery
          </Link>
          <h1 className="text-5xl font-bold mb-4">{categoryName}</h1>
          <p className="text-xl">{artworks.length} Artworks in this collection</p>
        </div>
      </div>

      {/* Artworks Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <Link
              key={artwork._id}
              href={`/artwork/${artwork.slug.current}`}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                {/* Image */}
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={urlFor(artwork.mainImage).url()}
                    alt={artwork.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  
                  {/* Availability Badge */}
                  {artwork.availabilityStatus === 'available' && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Available
                    </div>
                  )}
                  {artwork.availabilityStatus === 'sold' && (
                    <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Sold
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition">
                    {artwork.title}
                  </h3>
                  
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span>{artwork.year}</span>
                    {artwork.price && artwork.availabilityStatus === 'available' && (
                      <span className="text-lg font-bold text-gray-900">
                        ₹{artwork.price.toLocaleString('en-IN')}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}