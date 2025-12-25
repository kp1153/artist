export const metadata = {
  title: "Research Scholars | Dr. Uttama Dixit",
  description:
    "PhD scholars guided by Prof. Dr. Uttama Dixit, Faculty of Visual Arts, Banaras Hindu University",
};

export default function ScholarsPage() {
  const awardedScholars = [
    {
      name: "Shweta Pandey",
      topic: "Folk Elements in the Paintings of Yamini Roy",
    },
    {
      name: "Priyanka Gupta",
      topic:
        "Depiction of Nature in Contemporary Indian Painting (With reference to Uttar Pradesh)",
    },
    {
      name: "Smriti Bajpai",
      topic:
        "Contribution of Bhavesh Chandra Sanyal in Contemporary Indian Art",
    },
    {
      name: "Ram Awadh",
      topic: "Creative World of Contemporary Artist Rameshwar Broota",
    },
    {
      name: "Vijay Shankar Gond",
      topic: "Mural Paintings of Temples in Ayodhya",
    },
    {
      name: "Pradeep Kumar",
      topic: "Kalighat Pattachitra: A Cultural Study",
    },
    {
      name: "Mohd. Asfaq",
      topic: "Art Journey of Arpana Kaur",
    },
    {
      name: "Neha Kumari",
      topic:
        "Mythological Elements in Contemporary Indian Painting (1950–Present)",
    },
  ];

  const ongoingScholars = [
    {
      name: "Ashwini Kumar Singh",
      topic:
        "Impact of Non-Traditional Mediums on Contemporary Indian Painting",
    },
    {
      name: "Indal Yadav",
      topic:
        "Contemporary Painting Scenario of Uttar Pradesh (1950–2020)",
    },
    {
      name: "Kaushiki Chauhan",
      topic:
        "Modern Transformation of Odisha Pattachitra",
    },
    {
      name: "Sudipta Swarnakar",
      topic:
        "Effect of Music, Poetry and Nature on Abstract Painting",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Research Scholars</h1>
        <p className="text-gray-600 max-w-3xl">
          Details of PhD scholars guided by Prof. Dr. Uttama Dixit in the field of
          Painting and Visual Arts at Banaras Hindu University.
        </p>
      </header>

      {/* Awarded Scholars */}
      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          PhD Awarded
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {awardedScholars.map((scholar, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold mb-2">
                {scholar.name}
              </h3>
              <p className="text-sm text-gray-600">
                <strong>Research Topic:</strong> {scholar.topic}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Ongoing Scholars */}
      <div>
        <h2 className="text-2xl font-semibold mb-6">
          Ongoing PhD Scholars
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {ongoingScholars.map((scholar, index) => (
            <div
              key={index}
              className="border rounded-lg p-6 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold mb-2">
                {scholar.name}
              </h3>
              <p className="text-sm text-gray-600">
                <strong>Research Topic:</strong> {scholar.topic}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Note */}
      <div className="mt-16 text-sm text-gray-500 max-w-4xl">
        <p>
          Prof. Dr. Uttama Dixit has guided several PhD scholars in the areas of
          Folk Art, Contemporary Indian Painting, Visual Culture, and
          Interdisciplinary Art Studies.
        </p>
      </div>
    </section>
  );
}
