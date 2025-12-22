import { getArtworkBySlug, urlFor } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function ArtworkDetailPage({ params }) {
  const artwork = await getArtworkBySlug(params.slug)

  if (!artwork) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-[#f5efe6]">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-amber-600">Home</Link>
            <span>/</span>
            <Link href="/gallery" className="hover:text-amber-600">Gallery</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{artwork.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* LEFT - Images */}
          <div>
            {/* Main Image */}
            <div className="relative w-full aspect-square bg-white rounded-2xl shadow-2xl overflow-hidden mb-6">
              <Image
                src={urlFor(artwork.mainImage).url()}
                alt={artwork.title}
                fill
                className="object-contain p-8"
                priority
              />
            </div>

            {/* Gallery Images */}
            {artwork.gallery && artwork.gallery.length > 0 && (
              <div className="grid grid-cols-4 gap-4">
                {artwork.gallery.map((img, idx) => (
                  <div key={idx} className="relative aspect-square bg-white rounded-lg shadow overflow-hidden">
                    <Image
                      src={urlFor(img).url()}
                      alt={`${artwork.title} - ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* RIGHT - Details */}
          <div>
            {/* Status Badge */}
            <div className="mb-4">
              {artwork.availabilityStatus === 'available' && (
                <span className="inline-block bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  ✓ Available for Purchase
                </span>
              )}
              {artwork.availabilityStatus === 'sold' && (
                <span className="inline-block bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Sold
                </span>
              )}
              {artwork.availabilityStatus === 'private' && (
                <span className="inline-block bg-gray-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Private Collection
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              {artwork.title}
            </h1>

            {/* Hindi Title */}
            {artwork.titleHindi && (
              <h2 className="text-2xl text-gray-700 mb-6 font-medium">
                {artwork.titleHindi}
              </h2>
            )}

            {/* Category */}
            <div className="mb-6">
              <Link 
                href={`/gallery/${artwork.category.slug.current}`}
                className="inline-block bg-amber-100 text-amber-700 px-4 py-2 rounded-lg hover:bg-amber-200 transition"
              >
                {artwork.category.title}
              </Link>
            </div>

            {/* Price */}
            {artwork.price && artwork.availabilityStatus === 'available' && (
              <div className="mb-8">
                <p className="text-4xl font-bold text-gray-900">
                  ₹{artwork.price.toLocaleString('en-IN')}
                </p>
                <p className="text-sm text-gray-600 mt-1">Price inclusive of all taxes</p>
              </div>
            )}

            {/* Specifications */}
            <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 border-b pb-2">
                Specifications
              </h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex justify-between">
                  <span className="font-medium">Year:</span>
                  <span>{artwork.year}</span>
                </div>
                {artwork.medium && (
                  <div className="flex justify-between">
                    <span className="font-medium">Medium:</span>
                    <span className="capitalize">{artwork.medium.replace('-', ' ')}</span>
                  </div>
                )}
                {artwork.dimensions && (
                  <div className="flex justify-between">
                    <span className="font-medium">Size:</span>
                    <span>
                      {artwork.dimensions.width} × {artwork.dimensions.height} cm
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Description */}
            {artwork.description && (
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-4">About This Artwork</h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {artwork.description}
                </p>
              </div>
            )}

            {/* Contact Button */}
            {artwork.availabilityStatus === 'available' && (
              <div className="flex gap-4">
                <Link
                  href="/contact"
                  className="flex-1 bg-gradient-to-r from-amber-600 to-orange-700 text-white text-center px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition"
                >
                  Inquire to Purchase
                </Link>
              </div>
            )}

            {/* Artist Info */}
            <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  UD
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">Dr. Uttama Dixit</h4>
                  <p className="text-sm text-gray-600">Professor & Artist, BHU Varanasi</p>
                  <Link href="/about" className="text-amber-600 hover:underline text-sm font-medium">
                    View Profile →
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}