export default function ExperiencePage() {
  const experiences = [
    {
      year: "2018 - Present",
      title: "Dean & Head of Department",
      organization: "Faculty of Visual Arts, Banaras Hindu University",
      description: "Leading the Faculty of Visual Arts with strategic vision and academic excellence. Overseeing curriculum development, research initiatives, and institutional growth.",
      highlights: [
        "Established new research programs and collaborations",
        "Enhanced infrastructure and facilities for students",
        "Initiated international exchange programs"
      ]
    },
    {
      year: "2010 - 2018",
      title: "Professor of Painting",
      organization: "Department of Painting, BHU",
      description: "Teaching advanced courses in painting, folk art, and contemporary practices. Guiding PhD and MFA students in their research work.",
      highlights: [
        "Supervised 12 PhD scholars to completion",
        "Developed specialized courses in Kashi folk art",
        "Organized national workshops and seminars"
      ]
    },
    {
      year: "2005 - 2010",
      title: "Associate Professor",
      organization: "Department of Painting, BHU",
      description: "Contributed to academic programs and research in traditional and contemporary painting techniques.",
      highlights: [
        "Published research papers in peer-reviewed journals",
        "Curated student exhibitions",
        "Member of academic committees"
      ]
    },
    {
      year: "2001 - 2005",
      title: "Assistant Professor",
      organization: "Department of Painting, BHU",
      description: "Started teaching career focusing on fundamentals of painting and art history.",
      highlights: [
        "Developed teaching methodologies",
        "Mentored undergraduate students",
        "Participated in faculty development programs"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-teal-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-teal-800 to-amber-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif">Professional Experience</h1>
          <p className="text-xl md:text-2xl">23+ Years of Academic Excellence</p>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-8 top-24 w-0.5 h-full bg-gradient-to-b from-teal-600 to-amber-600 hidden md:block"></div>
              )}
              
              {/* Experience Card */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                <div className="md:flex">
                  {/* Year Badge */}
                  <div className="md:w-48 bg-gradient-to-br from-teal-600 to-amber-600 text-white p-6 flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-2xl font-bold">{exp.year}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1">
                    <h2 className="text-2xl font-bold text-teal-900 mb-2">{exp.title}</h2>
                    <p className="text-amber-700 font-semibold mb-4">{exp.organization}</p>
                    <p className="text-gray-700 leading-relaxed mb-4">{exp.description}</p>
                    
                    <div className="space-y-2">
                      <p className="font-semibold text-gray-800">Key Highlights:</p>
                      <ul className="space-y-1">
                        {exp.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-700">
                            <span className="text-teal-600 mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-teal-900 mb-8">Teaching Philosophy</h2>
          <div className="bg-gradient-to-br from-amber-50 to-teal-50 p-8 rounded-lg shadow-lg">
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              "Art education is not just about teaching techniques, but about nurturing creativity, 
              cultural awareness, and critical thinking. My approach combines traditional wisdom with 
              contemporary practices, ensuring students develop both technical mastery and conceptual depth."
            </p>
            <p className="text-gray-700 leading-relaxed text-lg">
              "Through my years of teaching, I have witnessed the transformative power of art in 
              preserving cultural heritage while embracing innovation. Every student brings unique 
              perspectives, and it is my responsibility to guide them in finding their artistic voice."
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-teal-900 to-amber-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Impact Over the Years</h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-5xl font-bold mb-2">500+</p>
              <p className="text-xl">Students Mentored</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">12</p>
              <p className="text-xl">PhD Scholars</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">50+</p>
              <p className="text-xl">Workshops Conducted</p>
            </div>
            <div>
              <p className="text-5xl font-bold mb-2">23+</p>
              <p className="text-xl">Years Teaching</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}