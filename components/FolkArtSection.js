export default function FolkArtSection() {
  return (
    <section id="folk-art" className="bg-amber-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Folk Art Gallery
        </h2>
        <p className="text-xl text-gray-700 mb-12">
          Exploring Kashi's traditional folk art and cultural heritage
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-amber-200 to-orange-300"></div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">Folk Artwork {item}</h3>
                <p className="text-sm text-gray-600">Traditional • Year</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}