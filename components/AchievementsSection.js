export default function AchievementsSection() {
  const achievements = [
    { icon: "🏆", text: "Kalashree Award", year: "2025" },
    { icon: "🏅", text: "Guru Pranam Samman", year: "2022" },
    { icon: "🏵️", text: "Padma Shri Dr. Vishnu Shridhar Wakankar Award", year: "2019" },
    { icon: "🎓", text: "Guided 14 PhD Scholars (7 ongoing)", year: "" },
  ];

  return (
    <section className="bg-[#f5efe6] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">
          Awards & Recognition
        </h2>
        <ul className="space-y-6 text-lg text-gray-700">
          {achievements.map((achievement, index) => (
            <li key={index} className="flex items-center gap-3">
              <span className="text-2xl">{achievement.icon}</span>
              <span>
                {achievement.text}
                {achievement.year && <span className="font-semibold"> – {achievement.year}</span>}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}