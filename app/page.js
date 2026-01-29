import Link from "next/link";
import { createClient } from "@sanity/client";
import { Eye } from "lucide-react";
import HeroSlider from "@/components/HeroSlider";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: "2023-01-01",
});

export const metadata = {
  title: "Prof. Uttama Dixit - Artist, Educator, Researcher",
  description:
    "Portfolio of Prof. Uttama Dixit featuring contemporary art, folk art, exhibitions and research work.",
};

export default async function HomePage() {
  const posts = await client.fetch(
    `*[_type == "artwork"] | order(_createdAt desc)[0...12]{
      slug,
      title,
      category,
      createdDate,
      mainImage,
      views,
      description
    }`
  );

  const sections = [
    {
      title: "About",
      text: "Academic journey and achievements of Professor Uttama Dixit",
      link: "/about"
    },
    {
      title: "Experience",
      text: "Details of extensive experience in teaching and research",
      link: "/experience"
    },
    {
      title: "Research",
      text: "Information on research work, publications and contributions",
      link: "/research"
    },
    {
      title: "Administrative Roles",
      text: "Work done in various administrative positions",
      link: "/administrative-roles"
    },
    {
      title: "Research Scholars",
      text: "Guidance of research scholars and their achievements",
      link: "/research-scholars"
    }
  ];

  return (
    <div className="min-h-screen">
      <HeroSlider />

      {/* 5 Cards Section */}
      <section className="bg-gradient-to-br from-teal-50 to-amber-50 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {sections.map((section, index) => (
              <Link
                key={index}
                href={section.link}
                className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <h3 className="font-bold text-[#0f4c5c] text-lg mb-2">
                  {section.title}
                </h3>
                <p className="text-sm text-gray-700">
                  {section.text}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Artworks Gallery */}
      <div className="bg-gradient-to-br from-amber-50 to-rose-50">
        <section className="max-w-7xl mx-auto px-4 py-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug.current}
                href={`/${post.category}/${post.slug.current}`}
                className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-56 bg-gradient-to-br from-teal-600 to-amber-600 overflow-hidden">
                  {post.mainImage && typeof post.mainImage === "string" ? (
                    <img
                      src={post.mainImage}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <p className="text-white">No Image</p>
                    </div>
                  )}
                </div>

                <div className="p-5">
                  <span className="text-xs text-teal-600 font-semibold uppercase">
                    {post.category}
                  </span>
                  <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-teal-700 transition">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.createdDate}</span>
                    <div className="flex items-center gap-1">
                      <Eye size={14} />
                      <span>{post.views || 0}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}