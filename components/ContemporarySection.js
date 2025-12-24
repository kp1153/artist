export default function ContemporarySection() {
  return (
    <section id="contemporary" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Contemporary Works
        </h2>
        <p className="text-xl text-gray-700 mb-12">
          Modern artistic expressions blending tradition with innovation
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-64 bg-gradient-to-br from-blue-200 to-purple-300"></div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900">Contemporary Work {item}</h3>
                <p className="text-sm text-gray-600">Modern • Year</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}