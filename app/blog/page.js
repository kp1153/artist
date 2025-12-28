import Link from "next/link";
import { createClient } from "@sanity/client";
import { Eye } from "lucide-react";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: "2023-01-01",
});

export default async function BlogPage() {
  const posts = await client.fetch(
    `*[_type == "post"] | order(publishedAt desc){
      slug,
      title,
      publishedAt,
      mainImage,
      body
    }`
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="max-w-7xl mx-auto px-4 py-10">
        {posts.length === 0 ? null : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug.current}
                href={`/blog/${post.slug.current}`}
                className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={post.mainImage}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {post.title}
                  </h3>

                  <div className="text-sm text-gray-500 mt-2">
                    <span>{new Date(post.publishedAt).toLocaleDateString('hi-IN')}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}