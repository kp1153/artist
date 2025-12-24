export default function AcademicSection() {
  return (
    <section id="academic" className="bg-zinc-900 text-white py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Academic Profile
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-amber-400 mb-4">Current Positions</h3>
            <ul className="space-y-3 text-lg">
              <li>• Dean, Faculty of Visual Arts (2023 - Present)</li>
              <li>• Head, Department of Painting (2022 - Present)</li>
              <li>• Professor, BHU (Since 2018)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-amber-400 mb-4">Research Guidance</h3>
            <ul className="space-y-3 text-lg">
              <li>• 12 PhD Degrees Awarded</li>
              <li>• 7 Ongoing Research Scholars</li>
              <li>• 18 Years Guidance Experience</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}