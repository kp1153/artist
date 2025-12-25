import Link from "next/link";

export default function HomePage() {
  const categories = [
    { title: "Folk Art", slug: "folk-art", description: "Explore traditional Kashi folk art and cultural paintings" },
    { title: "Contemporary", slug: "contemporary", description: "Modern artistic expressions and contemporary works" },
    { title: "Gallery", slug: "gallery", description: "Complete collection of artworks spanning decades" },
    { title: "Exhibitions", slug: "exhibitions", description: "45+ exhibitions from national and international venues" },
    { title: "Blog", slug: "blog", description: "Insights on art, culture and creative processes" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-rose-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center bg-gradient-to-r from-teal-900 to-amber-800 text-white">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 font-serif">Dr. Uttama Dixit</h1>
          <p className="text-xl md:text-3xl mb-6 italic">Dean, Faculty of Visual Arts | BHU</p>
          <p className="text-lg md:text-xl mb-8">Award-winning Artist • Educator • Researcher</p>
          <div className="flex gap-4 justify-center">
            <span className="bg-white/20 px-6 py-2 rounded-full backdrop-blur">45+ Exhibitions</span>
            <span className="bg-white/20 px-6 py-2 rounded-full backdrop-blur">23+ Years Teaching</span>
            <span className="bg-white/20 px-6 py-2 rounded-full backdrop-blur">12 PhDs Awarded</span>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Explore My Work</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <Link 
              key={cat.slug} 
              href={`/${cat.slug}`}
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="h-48 bg-gradient-to-br from-teal-600 to-amber-600 group-hover:from-teal-700 group-hover:to-amber-700 transition-all"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-teal-700 transition">{cat.title}</h3>
                <p className="text-gray-600">{cat.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="bg-teal-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold mb-2">23+</p>
              <p className="text-xl">Years Experience</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">45+</p>
              <p className="text-xl">Exhibitions</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">12</p>
              <p className="text-xl">PhDs Awarded</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">34</p>
              <p className="text-xl">Publications</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}