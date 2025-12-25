// lib/sanity.js
import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: true,
})

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

// ============================================
// HOME PAGE - Mixed content from all categories
// ============================================

export async function getHomePageContent() {
  const query = `{
    "folkArt": *[_type == "artwork" && category->slug.current == "folk-art"] | order(publishedAt desc) [0...4] {
      _id,
      title,
      slug,
      mainImage,
      year,
      category->{title, slug}
    },
    "contemporary": *[_type == "artwork" && category->slug.current == "contemporary"] | order(publishedAt desc) [0...4] {
      _id,
      title,
      slug,
      mainImage,
      year,
      category->{title, slug}
    },
    "exhibitions": *[_type == "exhibition"] | order(startDate desc) [0...4] {
      _id,
      title,
      slug,
      venue,
      startDate,
      endDate
    },
    "publications": *[_type == "publication"] | order(publishedAt desc) [0...4] {
      _id,
      title,
      slug,
      publishedAt,
      type
    },
    "blog": *[_type == "post"] | order(publishedAt desc) [0...4] {
      _id,
      title,
      slug,
      publishedAt,
      excerpt
    }
  }`
  
  return await client.fetch(query)
}

// ============================================
// CATEGORY PAGE - Get items by category slug
// ============================================

export async function getCategoryContent(categorySlug) {
  // Map URL slugs to Sanity types
  const typeMap = {
    "folk-art": "artwork",
    "contemporary": "artwork",
    "gallery": "artwork",
    "exhibitions": "exhibition",
    "publications": "publication",
    "blog": "post"
  }

  const type = typeMap[categorySlug]

  if (!type) return []

  let query = ""

  if (type === "artwork") {
    query = `*[_type == "artwork" && category->slug.current == $categorySlug] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      year,
      medium,
      dimensions,
      category->{title, slug}
    }`
  } else if (type === "exhibition") {
    query = `*[_type == "exhibition"] | order(startDate desc) {
      _id,
      title,
      slug,
      venue,
      startDate,
      endDate,
      description
    }`
  } else if (type === "publication") {
    query = `*[_type == "publication"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      type,
      authors
    }`
  } else if (type === "post") {
    query = `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      publishedAt,
      excerpt,
      mainImage
    }`
  }

  return await client.fetch(query, { categorySlug })
}

// ============================================
// DETAIL PAGE - Get single item by category + slug
// ============================================

export async function getItemBySlug(categorySlug, itemSlug) {
  const typeMap = {
    "folk-art": "artwork",
    "contemporary": "artwork",
    "gallery": "artwork",
    "exhibitions": "exhibition",
    "publications": "publication",
    "blog": "post"
  }

  const type = typeMap[categorySlug]
  if (!type) return null

  let query = ""

  if (type === "artwork") {
    query = `*[_type == "artwork" && slug.current == $itemSlug][0] {
      _id,
      title,
      titleHindi,
      slug,
      mainImage,
      gallery,
      year,
      medium,
      dimensions,
      description,
      price,
      availabilityStatus,
      category->{title, slug}
    }`
  } else if (type === "exhibition") {
    query = `*[_type == "exhibition" && slug.current == $itemSlug][0] {
      _id,
      title,
      slug,
      venue,
      startDate,
      endDate,
      description,
      images,
      type
    }`
  } else if (type === "publication") {
    query = `*[_type == "publication" && slug.current == $itemSlug][0] {
      _id,
      title,
      slug,
      publishedAt,
      type,
      authors,
      description,
      pdfFile
    }`
  } else if (type === "post") {
    query = `*[_type == "post" && slug.current == $itemSlug][0] {
      _id,
      title,
      slug,
      publishedAt,
      mainImage,
      body,
      author
    }`
  }

  return await client.fetch(query, { itemSlug })
}

// ============================================
// UTILITY QUERIES
// ============================================

export async function getAllCategories() {
  const query = `*[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description
  }`
  
  return await client.fetch(query)
}