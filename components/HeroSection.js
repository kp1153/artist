import Link from 'next/link';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="bg-[#f5efe6] py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* TOP SECTION - Title & Tagline */}
        <div className="text-center mb-12">
          <p className="uppercase tracking-widest text-xs md:text-sm text-gray-600 mb-3">
            Artist • Educator • Art Historian • Researcher
          </p>
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Dr. Uttama Dixit
          </h1>
          <h2 className="mt-4 text-lg md:text-xl text-gray-700 font-medium">
            Professor, Dean & Head (Painting) <br />
            Faculty of Visual Arts, <span className="font-semibold">BHU, Varanasi</span>
          </h2>
        </div>

        {/* MAIN GRID - Image + Content */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-14 items-start">

          {/* LEFT - Image Section */}
          <div className="relative flex flex-col items-center">
            {/* Main Image */}
            <div className="relative w-full max-w-md">
              <Image
                src="/uttama-dixit.jpg"
                alt="Dr. Uttama Dixit - Renowned Indian Artist and Professor at BHU Varanasi"
                width={450}
                height={450}
                className="w-full aspect-square object-cover rounded-2xl shadow-2xl"
                priority
                quality={90}
              />
            </div>

            {/* Award Badge - Below Image */}
            <div className="mt-6 bg-gradient-to-r from-amber-500 to-orange-600 px-6 py-3 rounded-full shadow-xl">
              <p className="text-white font-bold text-sm md:text-base flex items-center gap-2">
                <span className="text-xl md:text-2xl">🏆</span>
                Kalashree Award — 2025
              </p>
            </div>

            {/* Academic Contributions Card - Below Award */}
            <div className="mt-8 w-full max-w-md bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
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

          {/* RIGHT - Text Content */}
          <div className="flex flex-col justify-center">
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              Dr. Uttama Dixit is a renowned Indian artist, academic leader, and
              researcher with over <strong>23 years of experience</strong> in
              painting, visual culture, applied arts, and art education. She is
              widely respected for bridging traditional Indian knowledge systems
              with contemporary artistic practices.
            </p>

            <p className="mt-5 text-gray-700 leading-relaxed text-base md:text-lg">
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
                <p className="text-xs md:text-sm text-gray-600">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">45+</p>
                <p className="text-xs md:text-sm text-gray-600">Group Exhibitions</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">5</p>
                <p className="text-xs md:text-sm text-gray-600">Solo Shows</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900">45</p>
                <p className="text-xs md:text-sm text-gray-600">Research Papers</p>
              </div>
            </div>

            {/* BUTTONS */}
            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                href="/about"
                className="px-6 md:px-8 py-3 md:py-4 bg-black text-white rounded-md text-base md:text-lg hover:bg-gray-800 transition"
              >
                About Her Work
              </Link>
              <Link
                href="/publications"
                className="px-6 md:px-8 py-3 md:py-4 border-2 border-black text-black rounded-md text-base md:text-lg hover:bg-black hover:text-white transition"
              >
                Publications
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}