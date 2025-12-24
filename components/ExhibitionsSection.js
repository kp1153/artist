// File: components/ExhibitionsSection.js

export default function ExhibitionsSection() {
  return (
    <section id="exhibitions" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Exhibitions
        </h2>
        <p className="text-xl text-gray-700 mb-12">
          45+ Group Exhibitions • 5 Solo Shows
        </p>

        {/* Solo Exhibitions */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-amber-600 mb-8">Solo Exhibitions</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="bg-gray-50 rounded-lg p-6">
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {[1, 2, 3].map((img) => (
                    <div key={img} className="h-32 bg-gradient-to-br from-amber-200 to-orange-300 rounded"></div>
                  ))}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">Exhibition Title {item}</h4>
                <p className="text-sm text-gray-600">Venue • Year</p>
              </div>
            ))}
          </div>
        </div>

        {/* Group Exhibitions */}
        <div>
          <h3 className="text-3xl font-bold text-amber-600 mb-8">Recent Group Exhibitions</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-200 to-purple-300"></div>
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900">Exhibition {item}</h4>
                  <p className="text-sm text-gray-600">2024-2025</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}