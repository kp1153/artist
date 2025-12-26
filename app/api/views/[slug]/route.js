// app/api/views/[slug]/route.js
import { NextResponse } from "next/server";
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  apiVersion: "2023-01-01",
});

export async function POST(request, { params }) {
  try {
    const { slug } = await params;

    if (!slug) {
      return NextResponse.json({ error: "Slug required" }, { status: 400 });
    }

    // artwork या post दोनों को support करो
    const item = await client.fetch(
      `*[(_type == "artwork" || _type == "post") && slug.current == $slug][0]{ _id, views }`,
      { slug }
    );

    if (!item) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    // Views increment करें
    const newViews = (item.views || 0) + 1;

    await client.patch(item._id).set({ views: newViews }).commit();

    return NextResponse.json({
      success: true,
      views: newViews,
    });
  } catch (error) {
    console.error("Error incrementing views:", error);
    return NextResponse.json(
      { error: "Failed to increment views" },
      { status: 500 }
    );
  }
}

export async function GET(request, { params }) {
  try {
    const { slug } = await params;

    const item = await client.fetch(
      `*[(_type == "artwork" || _type == "post") && slug.current == $slug][0]{ views }`,
      { slug }
    );

    if (!item) {
      return NextResponse.json({ error: "Item not found" }, { status: 404 });
    }

    return NextResponse.json({
      views: item.views || 0,
    });
  } catch (error) {
    console.error("Error fetching views:", error);
    return NextResponse.json(
      { error: "Failed to fetch views" },
      { status: 500 }
    );
  }
}