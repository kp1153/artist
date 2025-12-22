// lib/sanity.js - Sanity Client Setup
import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: true,
})

// Image URL builder
const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}

// ============================================
// QUERIES
// ============================================

// Get all artworks
export async function getAllArtworks() {
  const query = `*[_type == "artwork"] | order(publishedAt desc) {
    _id,
    title,
    titleHindi,
    slug,
    mainImage,
    year,
    medium,
    price,
    availabilityStatus,
    featured,
    category->{
      title,
      slug
    }
  }`
  
  return await client.fetch(query)
}

// Get featured artworks (for homepage)
export async function getFeaturedArtworks() {
  const query = `*[_type == "artwork" && featured == true] | order(publishedAt desc) [0...6] {
    _id,
    title,
    slug,
    mainImage,
    year,
    category->{title}
  }`
  
  return await client.fetch(query)
}

// Get single artwork by slug
export async function getArtworkBySlug(slug) {
  const query = `*[_type == "artwork" && slug.current == $slug][0] {
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
    featured,
    publishedAt,
    category->{
      title,
      slug
    }
  }`
  
  return await client.fetch(query, { slug })
}

// Get artworks by category
export async function getArtworksByCategory(categorySlug) {
  const query = `*[_type == "artwork" && category->slug.current == $categorySlug] | order(year desc) {
    _id,
    title,
    slug,
    mainImage,
    year,
    price,
    availabilityStatus
  }`
  
  return await client.fetch(query, { categorySlug })
}

// Get all categories
export async function getAllCategories() {
  const query = `*[_type == "category"] | order(title asc) {
    _id,
    title,
    slug,
    description
  }`
  
  return await client.fetch(query)
}

// Get all exhibitions
export async function getAllExhibitions() {
  const query = `*[_type == "exhibition"] | order(startDate desc) {
    _id,
    title,
    slug,
    type,
    venue,
    startDate,
    endDate,
    description
  }`
  
  return await client.fetch(query)
}

// Get available artworks (for sale)
export async function getAvailableArtworks() {
  const query = `*[_type == "artwork" && availabilityStatus == "available"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    year,
    price,
    dimensions,
    category->{title}
  }`
  
  return await client.fetch(query)
}