export default function PublicationsPage() {
  const books = [
    {
      title: "Kashi Sanskriti evam Lok Chitrakala",
      year: "2020",
      publisher: "Academic Publishers",
      description: "A comprehensive exploration of Kashi's cultural traditions and folk painting practices. This book documents various folk art forms, their historical significance, and contemporary relevance.",
      pages: "320",
      language: "Hindi"
    }
  ];

  const researchPapers = [
    {
      title: "Traditional Motifs in Contemporary Indian Painting",
      journal: "Journal of Indian Art History",
      year: "2023",
      volume: "Vol. 28, Issue 2",
      pages: "45-62",
      abstract: "An analysis of how traditional Indian motifs are being reinterpreted and incorporated into contemporary painting practices."
    },
    {
      title: "Women Artists in Varanasi Folk Art Tradition",
      journal: "Asian Art Studies Quarterly",
      year: "2022",
      volume: "Vol. 15, Issue 4",
      pages: "112-128",
      abstract: "Documenting the significant yet often overlooked contributions of women artists in preserving and evolving folk art traditions."
    },
    {
      title: "Cultural Symbolism in Kashi Painting Styles",
      journal: "International Journal of Visual Arts",
      year: "2021",
      volume: "Vol. 10, Issue 3",
      pages: "78-95",
      abstract: "Exploring the rich symbolic language embedded in traditional Kashi painting styles and their cultural meanings."
    },
    {
      title: "Digital Documentation and Preservation of Folk Art",
      journal: "Heritage Conservation Review",
      year: "2021",
      volume: "Vol. 7, Issue 1",
      pages: "34-48",
      abstract: "Discussing methodologies and challenges in digitally preserving intangible cultural heritage through folk art documentation."
    },
    {
      title: "Pedagogical Approaches in Visual Arts Education",
      journal: "Art Education Today",
      year: "2020",
      volume: "Vol. 12, Issue 2",
      pages: "89-104",
      abstract: "Examining innovative teaching methodologies that bridge traditional and contemporary art practices in academic settings."
    },
    {
      title: "Folk Art and Cultural Identity in Varanasi",
      journal: "Cultural Studies Quarterly",
      year: "2019",
      volume: "Vol. 25, Issue 3",
      pages: "156-172",
      abstract: "Analysis of how folk art practices contribute to and reflect cultural identity in the sacred city of Varanasi."
    }
  ];

  const conferencePapers = [
    {
      title: "Reviving Traditional Art Forms in Modern Context",
      conference: "National Conference on Indian Art",
      location: "New Delhi",
      year: "2023"
    },
    {
      title: "Gender Perspectives in Folk Art Practices",
      conference: "International Symposium on Cultural Heritage",
      location: "Mumbai",
      year: "2022"
    },
    {
      title: "Art Education in the Digital Age",
      conference: "Asian Conference on Arts and Humanities",
      location: "Bangkok, Thailand",
      year: "2022"
    },
    {
      title: "Sustainable Practices in Folk Art Preservation",
      conference: "World Heritage Forum",
      location: "Jaipur",
      year: "2021"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-teal-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-teal-800 to-amber-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif">Publications</h1>
          <p className="text-xl md:text-2xl">Books, Research Papers & Conference Presentations</p>
        </div>
      </section>

      {/* Statistics */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-teal-600">
            <p className="text-4xl font-bold text-teal-900 mb-2">1</p>
            <p className="text-gray-700">Book Published</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-amber-600">
            <p className="text-4xl font-bold text-amber-900 mb-2">34</p>
            <p className="text-gray-700">Research Papers</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-teal-600">
            <p className="text-4xl font-bold text-teal-900 mb-2">20+</p>
            <p className="text-gray-700">Conference Papers</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg text-center border-t-4 border-amber-600">
            <p className="text-4xl font-bold text-amber-900 mb-2">15+</p>
            <p className="text-gray-700">Citations</p>
          </div>
        </div>
      </section>

      {/* Books */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-teal-900 mb-8">Books</h2>
        {books.map((book, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-lg mb-6">
            <h3 className="text-3xl font-bold text-teal-900 mb-4">{book.title}</h3>
            <div className="grid md:grid-cols-2 gap-6 mb-4">
              <div className="space-y-2">
                <p className="text-gray-700"><span className="font-semibold">Year:</span> {book.year}</p>
                <p className="text-gray-700"><span className="font-semibold">Publisher:</span> {book.publisher}</p>
              </div>
              <div className="space-y-2">
                <p className="text-gray-700"><span className="font-semibold">Pages:</span> {book.pages}</p>
                <p className="text-gray-700"><span className="font-semibold">Language:</span> {book.language}</p>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">{book.description}</p>
          </div>
        ))}
      </section>

      {/* Research Papers */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-teal-900 mb-8">Research Papers</h2>
          <div className="space-y-6">
            {researchPapers.map((paper, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-teal-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
                <h3 className="text-2xl font-bold text-teal-900 mb-3">{paper.title}</h3>
                <div className="flex flex-wrap gap-4 mb-3 text-sm">
                  <span className="text-amber-700 font-semibold">{paper.journal}</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-700">{paper.volume}</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-700">{paper.year}</span>
                  <span className="text-gray-600">•</span>
                  <span className="text-gray-700">Pages {paper.pages}</span>
                </div>
                <p className="text-gray-700 leading-relaxed italic">{paper.abstract}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-600">And 28 more research papers in various national and international journals</p>
          </div>
        </div>
      </section>

      {/* Conference Papers */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-teal-900 mb-8">Conference Presentations</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {conferencePapers.map((paper, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-amber-600">
              <h3 className="text-xl font-bold text-teal-900 mb-3">{paper.title}</h3>
              <p className="text-amber-700 font-semibold mb-2">{paper.conference}</p>
              <div className="flex items-center gap-3 text-gray-700">
                <span>{paper.location}</span>
                <span>•</span>
                <span>{paper.year}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-600">And 16 more presentations at national and international conferences</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-teal-900 to-amber-900 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Research Collaboration</h2>
          <p className="text-xl mb-6">
            Interested in collaborating on research projects related to folk art, cultural heritage, or art education?
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-teal-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-100 transition-all"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}