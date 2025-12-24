export default function AwardsSection() {
  const awards = [
    { year: "2025", title: "Kalashree Award", org: "KASHIKA Artist Group, Varanasi" },
    { year: "2022", title: "Guru Pranam Samman", org: "Amar Ujala" },
    { year: "2019", title: "Padma Shri Dr. Vishnu Shridhar Wakankar Award", org: "Ministry of Culture, Govt of India" },
    { year: "2005", title: "Gold Medal", org: "Agnipath Art Exhibition, New Delhi" },
  ];

  return (
    <section id="awards" className="bg-amber-50 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          Awards & Honors
        </h2>

        <div className="space-y-6">
          {awards.map((award, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-amber-600">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{award.title}</h3>
                  <p className="text-gray-600">{award.org}</p>
                </div>
                <span className="text-2xl font-bold text-amber-600">{award.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}