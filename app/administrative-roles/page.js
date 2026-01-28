export const metadata = {
  title: "Administrative Roles | Dr. Uttama Dixit",
  description:
    "Administrative roles and responsibilities of Prof. Dr. Uttama Dixit at Faculty of Visual Arts, Banaras Hindu University",
};

export default function AdministrativePage() {
  const roles = [
    {
      title: "Dean, Faculty of Visual Arts",
      duration: "01 October 2023 – Present",
    },
    {
      title: "Head, Department of Painting",
      duration: "27 November 2022 – Present",
    },
    {
      title: "Head, Department of Applied Arts",
      duration: "01 October 2023 – 24 November 2024",
    },
    {
      title: "Head, Department of Plastic Arts",
      duration: "01 October 2023 – 24 November 2024",
    },
    {
      title: "Chairperson – NEP Implementation Committee",
      duration: "2023 – 2025",
    },
    {
      title: "Chairperson – Admission Committees (BFA & MFA)",
      duration: "2023 – 2025",
    },
    {
      title: "Chairperson – SC/ST & Women Grievance Cells",
      duration: "2023 – 2025",
    },
    {
      title: "Chairperson – IQAC (NAAC) & IOE Committees",
      duration: "2023 – 2025",
    },
    {
      title: "Vice-Chancellor Nominee (CAS & Selection Committees)",
      duration: "Multiple Universities (Ongoing)",
    },
    {
      title: "Chairperson – Convocation & Academic Committees",
      duration: "2023 – 2025",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Header */}
      <header className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          Administrative Roles & Responsibilities
        </h1>
        <p className="text-gray-600 max-w-3xl">
          A summary of major administrative, academic, and leadership roles
          undertaken by Prof. Dr. Uttama Dixit at the Faculty of Visual Arts,
          Banaras Hindu University.
        </p>
      </header>

      {/* Roles List */}
      <div className="grid md:grid-cols-2 gap-6">
        {roles.map((role, index) => (
          <div
            key={index}
            className="border rounded-lg p-6 hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold mb-2">
              {role.title}
            </h3>
            <p className="text-sm text-gray-500">
              {role.duration}
            </p>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="mt-14 text-sm text-gray-500 max-w-4xl">
        <p>
          In addition to the roles listed above, Prof. Dr. Uttama Dixit has
          served on numerous academic councils, examination boards, grievance
          redressal committees, selection panels, and research governance bodies
          at institutional, state, and national levels.
        </p>
      </div>
    </section>
  );
}
