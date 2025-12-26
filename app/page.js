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
  description: "Portfolio of Prof. Uttama Dixit featuring contemporary art, folk art, exhibitions and research work.",
};

export default async function HomePage() {
  const posts = await client.fetch(
    `*[_type == "artwork"] | order(_createdAt desc)[0...12]{
      slug,
title,
category,
createdDate,
views,
description
    }`
  );

  return (
    <div className="min-h-screen">
      <HeroSlider />
      
      <div className="bg-gradient-to-br from-amber-50 to-rose-50">
        <section className="max-w-7xl mx-auto px-4 py-16">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Latest Works</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link 
                key={post.slug.current}
                href={`/${post.category}/${post.slug.current}`}
                className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-br from-teal-600 to-amber-600 group-hover:from-teal-700 group-hover:to-amber-700 transition-all"></div>
                <div className="p-6">
                  <span className="text-xs text-teal-600 font-semibold uppercase">{post.category}</span>
                  <h3 className="text-2xl font-bold mb-2 text-gray-800 group-hover:text-teal-700 transition">{post.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{post.description}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.date}</span>
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