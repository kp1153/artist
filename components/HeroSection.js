import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-[#f5efe6] py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="uppercase tracking-widest text-sm text-gray-600 mb-4">
            Artist • Educator • Art Historian • Researcher
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Dr. Uttama Dixit
          </h1>

          <h2 className="mt-5 text-xl md:text-2xl text-gray-700 font-medium">
            Professor, Dean & Head (Painting) <br />
            Faculty of Visual Arts, <span className="font-semibold">BHU, Varanasi</span>
          </h2>

          <p className="mt-8 text-gray-700 leading-relaxed text-lg">
            Dr. Uttama Dixit is a renowned Indian artist, academic leader, and
            researcher with over <strong>23 years of experience</strong> in
            painting, visual culture, applied arts, and art education. She is
            widely respected for bridging traditional Indian knowledge systems
            with contemporary artistic practices.
          </p>

          <p className="mt-5 text-gray-700 leading-relaxed">
            Associated with Banaras Hindu University since 2007, she became
            Professor in 2018 and currently serves as the Dean and Head of the
            Department of Painting. Her work reflects deep engagement with
            Indian cultural heritage, folk traditions, and modern visual
            discourse.
          </p>

          {/* STATS */}
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-gray-900">23+</p>
              <p className="text-sm text-gray-600">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">45+</p>
              <p className="text-sm text-gray-600">Group Exhibitions</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">5</p>
              <p className="text-sm text-gray-600">Solo Shows</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-gray-900">45</p>
              <p className="text-sm text-gray-600">Research Papers</p>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/about"
              className="px-8 py-4 bg-black text-white rounded-md text-lg hover:bg-gray-800 transition"
            >
              About Her Work
            </Link>
            <Link
              href="/publications"
              className="px-8 py-4 border-2 border-black text-black rounded-md text-lg hover:bg-black hover:text-white transition"
            >
              Publications
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE + HIGHLIGHTS */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative mb-12">
            <Image
              src="/uttama-dixit.jpg"
              alt="Dr. Uttama Dixit - Renowned Indian Artist and Professor at BHU Varanasi"
              width={450}
              height={450}
              className="w-80 h-80 md:w-[450px] md:h-[450px] object-cover rounded-2xl shadow-2xl"
              priority
              quality={90}
            />

            {/* AWARD BADGE - Below Image */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-500 to-orange-600 px-8 py-4 rounded-full shadow-xl">
              <p className="text-white font-bold text-base flex items-center gap-2">
                <span className="text-2xl">🏆</span>
                Kalashree Award – 2025
              </p>
            </div>
          </div>

          {/* SIDE INFO - Repositioned */}
          <div className="hidden lg:block absolute -right-8 top-20 bg-white p-7 rounded-2xl shadow-2xl max-w-[280px] border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-4 text-lg border-b pb-2">
              Academic Contributions
            </h3>
            <ul className="text-gray-700 space-y-3 text-sm leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>Author: <em className="font-medium">Kashi Sanskriti evam Lok Chitrakala</em></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>14</strong> PhD Scholars Awarded</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span><strong>7</strong> PhD Scholars Ongoing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-orange-600 font-bold">•</span>
                <span>National & International Curator</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}