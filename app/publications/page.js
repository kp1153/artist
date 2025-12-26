export default function PublicationsPage() {
  const publications = {
    books: [
      {
        title: "Kashi Sanskriti evam Lok Chitrakala",
        status: "Published"
      },
      {
        title: "Explore the Unseen",
        status: "Under Process"
      }
    ],
    papers: {
      international: 18,
      national: 16,
      total: 34
    },
    articles: 20
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-teal-50">
      <section className="bg-gradient-to-r from-teal-800 to-amber-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Publications & Research</h1>
          <p className="text-xl">Books, Papers & Articles</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-16 space-y-12">
        {/* Books */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-teal-900 mb-6">Books Published</h2>
          <div className="space-y-4">
            {publications.books.map((book, index) => (
              <div key={index} className="border-l-4 border-amber-600 pl-6 py-3">
                <h3 className="text-xl font-semibold text-gray-800">{book.title}</h3>
                <p className="text-gray-600">{book.status}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Research Papers */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-teal-900 mb-6">Research Papers</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white p-6 rounded-lg text-center">
              <p className="text-4xl font-bold mb-2">{publications.papers.international}</p>
              <p className="text-lg">International Papers</p>
            </div>
            <div className="bg-gradient-to-br from-amber-600 to-amber-700 text-white p-6 rounded-lg text-center">
              <p className="text-4xl font-bold mb-2">{publications.papers.national}</p>
              <p className="text-lg">National Papers</p>
            </div>
            <div className="bg-gradient-to-br from-teal-700 to-amber-700 text-white p-6 rounded-lg text-center">
              <p className="text-4xl font-bold mb-2">{publications.papers.total}</p>
              <p className="text-lg">Total Publications</p>
            </div>
          </div>
        </div>

        {/* Articles */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-teal-900 mb-6">Articles Published</h2>
          <div className="bg-gradient-to-br from-amber-100 to-teal-100 p-6 rounded-lg">
            <p className="text-6xl font-bold text-center text-teal-900 mb-2">{publications.articles}</p>
            <p className="text-xl text-center text-gray-700">Published Articles</p>
          </div>
          <p className="text-gray-600 mt-4">
            Also serving as Columnist in I-Next, Bi-Lingual Daily Newspaper of Dainik Jagran Group
          </p>
        </div>
      </section>
    </div>
  );
}