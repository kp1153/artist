export default function PublicationsSection() {
  return (
    <section id="publications" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          Publications & Research
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center mb-12">
          <div className="bg-amber-50 p-8 rounded-lg">
            <p className="text-5xl font-bold text-amber-600 mb-2">2</p>
            <p className="text-gray-700">Books Published</p>
          </div>
          <div className="bg-amber-50 p-8 rounded-lg">
            <p className="text-5xl font-bold text-amber-600 mb-2">34</p>
            <p className="text-gray-700">Research Papers</p>
          </div>
          <div className="bg-amber-50 p-8 rounded-lg">
            <p className="text-5xl font-bold text-amber-600 mb-2">20</p>
            <p className="text-gray-700">Articles</p>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Notable Books</h3>
          <ul className="space-y-3 text-lg text-gray-700">
            <li>• <strong>Kashi Sanskriti evam Lok Chitrakala</strong> (Published)</li>
            <li>• <strong>Explore the Unseen</strong> (Under Process)</li>
          </ul>
        </div>
      </div>
    </section>
  );
}