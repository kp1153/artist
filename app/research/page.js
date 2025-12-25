export default function ResearchPage() {
  const researchAreas = [
    {
      title: "Kashi Folk Art",
      description: "In-depth study of traditional folk art forms of Varanasi, documenting techniques, motifs, and cultural significance.",
      icon: "🎨"
    },
    {
      title: "Contemporary Painting",
      description: "Exploring modern artistic expressions and their intersection with traditional practices.",
      icon: "🖼️"
    },
    {
      title: "Cultural Heritage",
      description: "Research on preservation and promotion of intangible cultural heritage through visual arts.",
      icon: "🏛️"
    },
    {
      title: "Art Education",
      description: "Development of innovative pedagogical approaches in visual arts education.",
      icon: "📚"
    }
  ];

  const publications = [
    {
      title: "Kashi Sanskriti evam Lok Chitrakala",
      type: "Book",
      year: "2020",
      description: "A comprehensive study of Kashi's cultural traditions and folk painting practices."
    },
    {
      title: "Traditional Motifs in Contemporary Context",
      type: "Research Paper",
      year: "2022",
      journal: "Journal of Indian Art History",
      description: "Analysis of how traditional motifs are being reinterpreted in modern artistic practices."
    },
    {
      title: "Women Artists in Varanasi Folk Art",
      type: "Research Paper",
      year: "2021",
      journal: "Asian Art Studies",
      description: "Documenting the contribution of women artists in preserving folk art traditions."
    },
    {
      title: "Cultural Symbolism in Kashi Paintings",
      type: "Research Paper",
      year: "2019",
      journal: "International Journal of Visual Arts",
      description: "Exploring symbolic representations in traditional Kashi painting styles."
    }
  ];

  const ongoingProjects = [
    {
      title: "Digital Documentation of Folk Art",
      status: "In Progress",
      description: "Creating a comprehensive digital archive of Varanasi's folk art traditions for preservation and education."
    },
    {
      title: "Contemporary Folk Art Revival",
      status: "In Progress",
      description: "Working with local artisans to revive and modernize traditional folk art forms."
    },
    {
      title: "Art Education Framework",
      status: "Planning",
      description: "Developing new curriculum frameworks integrating traditional and contemporary art practices."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-teal-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-teal-800 to-amber-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif">Research & Publications</h1>
          <p className="text-xl md:text-2xl">Exploring Art, Culture & Heritage</p>
        </div>
      </section>

      {/* Research Areas */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center text-teal-900 mb-12">Research Areas</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {researchAreas.map((area, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 border-t-4 border-teal-600">
              <div className="text-5xl mb-4">{area.icon}</div>
              <h3 className="text-xl font-bold text-teal-900 mb-3">{area.title}</h3>
              <p className="text-gray-700 leading-relaxed">{area.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Publications */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-teal-900 mb-12">Selected Publications</h2>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-teal-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-teal-900 mb-2">{pub.title}</h3>
                    <div className="flex flex-wrap gap-3 text-sm">
                      <span className="bg-teal-600 text-white px-3 py-1 rounded-full">{pub.type}</span>
                      <span className="bg-amber-600 text-white px-3 py-1 rounded-full">{pub.year}</span>
                      {pub.journal && (
                        <span className="text-gray-700 italic">{pub.journal}</span>
                      )}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{pub.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl text-gray-700">
              <span className="font-bold text-teal-900">34 Research Papers</span> published in national and international journals
            </p>
          </div>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-teal-900 mb-12">Ongoing Research Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {ongoingProjects.map((project, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-amber-600">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    project.status === 'In Progress' 
                      ? 'bg-green-100 text-green-700' 
                      : 'bg-blue-100 text-blue-700'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-teal-900 mb-3">{project.title}</h3>
                <p className="text-gray-700 leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Impact */}
      <section className="bg-gradient-to-r from-teal-900 to-amber-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Research Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold mb-3">34</p>
              <p className="text-xl">Research Papers</p>
              <p className="text-white/80 mt-2">In peer-reviewed journals</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold mb-3">12</p>
              <p className="text-xl">PhD Scholars</p>
              <p className="text-white/80 mt-2">Successfully guided</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold mb-3">20+</p>
              <p className="text-xl">Conferences</p>
              <p className="text-white/80 mt-2">Papers presented</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}