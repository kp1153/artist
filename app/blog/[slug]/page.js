import { notFound } from "next/navigation";
import { createClient } from "@sanity/client";
import { PortableText } from "@portabletext/react";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: "2023-01-01",
});

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title
    }`,
    { slug }
  );

  if (!post) {
    return { title: "Not Found" };
  }

  return {
    title: `${post.title} | Prof. Uttama Dixit`,
  };
}

const components = {
  types: {
    cloudinaryImage: ({ value }) => (
      <div className="my-8">
        <img
          src={value.url}
          alt={value.caption || ""}
          className="w-full rounded-lg"
        />
        {value.caption && (
          <p className="text-sm text-gray-600 mt-2 text-center italic">
            {value.caption}
          </p>
        )}
      </div>
    ),
    gallery: ({ value }) => (
      <div className="my-8 grid grid-cols-2 md:grid-cols-3 gap-4">
        {value.images?.map((img, index) => (
          <img
            key={index}
            src={img.url}
            alt={img.alt || ""}
            className="w-full h-64 object-cover rounded-lg"
          />
        ))}
      </div>
    ),
    youtube: ({ value }) => (
      <div className="my-8">
        
          href={value.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-red-600 text-white text-center py-4 rounded-lg hover:bg-red-700 transition"
        >
          YouTube पर देखें
        </a>
        {value.caption && (
          <p className="text-sm text-gray-600 mt-2 text-center italic">
            {value.caption}
          </p>
        )}
      </div>
    ),
  },
};

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;

  const post = await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
      mainImage,
      publishedAt,
      body
    }`,
    { slug }
  );

  if (!post) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <article className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">
          {post.title}
        </h1>

        <p className="text-gray-600 mb-8">
          {new Date(post.publishedAt).toLocaleDateString('hi-IN', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
        </p>

        {post.mainImage && (
          <div className="mb-8 rounded-lg overflow-hidden">
            <img
              src={post.mainImage}
              alt={post.title}
              className="w-full h-auto"
            />
          </div>
        )}

        <div className="prose prose-lg max-w-none">
          <PortableText value={post.body} components={components} />
        </div>
      </article>
    </div>
  );
}