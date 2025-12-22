import { getAllArtworks, getAllCategories, urlFor } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'

export default async function GalleryPage() {
  const artworks = await getAllArtworks()
  const categories = await getAllCategories()

  return (
    <div className="min-h-screen bg-[#f5efe6]">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Art Gallery</h1>
          <p className="text-xl">Explore the abstract artworks by Dr. Uttama Dixit</p>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          <Link 
            href="/gallery"
            className="px-6 py-2 bg-white rounded-full shadow hover:bg-amber-100 transition"
          >
            All
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat._id}
              href={`/gallery/${cat.slug.current}`}
              className="px-6 py-2 bg-white rounded-full shadow hover:bg-amber-100 transition"
            >
              {cat.title}
            </Link>
          ))}
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
                    <span className="text-amber-600 font-medium">
                      {artwork.category?.title}
                    </span>
                  </div>

                  {artwork.price && artwork.availabilityStatus === 'available' && (
                    <p className="mt-3 text-lg font-bold text-gray-900">
                      ₹{artwork.price.toLocaleString('en-IN')}
                    </p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}