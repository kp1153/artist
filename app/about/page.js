import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-teal-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-teal-800 to-amber-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 font-serif">About Dr. Uttama Dixit</h1>
          <p className="text-xl md:text-2xl">Professor, Dean & Head | Faculty of Visual Arts, BHU</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image */}
          <div className="relative">
            <div className="relative w-full h-[500px] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/dr-uttama-dixit.jpg"
                alt="Dr. Uttama Dixit"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-amber-200 rounded-lg -z-10"></div>
            <div className="absolute -top-6 -left-6 w-48 h-48 bg-teal-200 rounded-lg -z-10"></div>
          </div>

          {/* Bio */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-teal-600">
              <h2 className="text-3xl font-bold text-teal-900 mb-4">Profile</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Dr. Uttama Dixit is a distinguished Professor and Dean at the Faculty of Visual Arts, 
                Banaras Hindu University. With over 23 years of teaching experience, she has made 
                significant contributions to the field of Folk Art and Contemporary Painting.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Her research focuses on the rich cultural heritage of Kashi (Varanasi) and its 
                traditional art forms. She has successfully guided 12 PhD scholars and published 
                extensively in national and international journals.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Dr. Dixit's work has been exhibited at over 45 national and international exhibitions, 
                and she continues to inspire the next generation of artists through her teaching and 
                mentorship.
              </p>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="bg-gradient-to-br from-teal-600 to-teal-700 text-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-4xl font-bold mb-2">23+</p>
            <p className="text-lg">Years Experience</p>
          </div>
          <div className="bg-gradient-to-br from-amber-600 to-amber-700 text-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-4xl font-bold mb-2">45+</p>
            <p className="text-lg">Exhibitions</p>
          </div>
          <div className="bg-gradient-to-br from-teal-700 to-teal-800 text-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-4xl font-bold mb-2">12</p>
            <p className="text-lg">PhDs Awarded</p>
          </div>
          <div className="bg-gradient-to-br from-amber-700 to-amber-800 text-white p-6 rounded-lg shadow-lg text-center">
            <p className="text-4xl font-bold mb-2">34</p>
            <p className="text-lg">Publications</p>
          </div>
        </div>

        {/* Education & Qualifications */}
        <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
          <h2 className="text-3xl font-bold text-teal-900 mb-6">Education & Qualifications</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-amber-600 pl-4">
              <h3 className="text-xl font-bold text-gray-800">Ph.D. in Painting</h3>
              <p className="text-gray-600">Banaras Hindu University, Varanasi</p>
            </div>
            <div className="border-l-4 border-teal-600 pl-4">
              <h3 className="text-xl font-bold text-gray-800">Master of Fine Arts (M.F.A.)</h3>
              <p className="text-gray-600">Specialization in Painting</p>
            </div>
            <div className="border-l-4 border-amber-600 pl-4">
              <h3 className="text-xl font-bold text-gray-800">Bachelor of Fine Arts (B.F.A.)</h3>
              <p className="text-gray-600">Focus on Traditional and Contemporary Art</p>
            </div>
          </div>
        </div>

        {/* Expertise Areas */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-3xl font-bold text-teal-900 mb-6">Areas of Expertise</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-amber-600 text-2xl">•</span>
                <p className="text-gray-700">Kashi Folk Art and Traditional Painting</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-teal-600 text-2xl">•</span>
                <p className="text-gray-700">Contemporary Art Practices</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-600 text-2xl">•</span>
                <p className="text-gray-700">Cultural Heritage Studies</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-teal-600 text-2xl">•</span>
                <p className="text-gray-700">Art Education and Pedagogy</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-600 text-2xl">•</span>
                <p className="text-gray-700">Research Methodology in Visual Arts</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-teal-600 text-2xl">•</span>
                <p className="text-gray-700">Academic Leadership and Administration</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}