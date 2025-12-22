import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ArtistNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dr. Uttama Dixit - Renowned Indian Artist, Educator & Researcher | BHU Varanasi",
  description: "Prof. Dr. Uttama Dixit is a distinguished Indian artist, educator and researcher serving as Dean at Faculty of Visual Arts, Banaras Hindu University. Explore her paintings, exhibitions, publications and workshops.",
  keywords: "Uttama Dixit, Indian artist, contemporary Indian art, BHU artist, Varanasi artist, art exhibitions India, Indian painter, visual arts professor, art researcher, Indian art educator, contemporary paintings",
  authors: [{ name: "Dr. Uttama Dixit" }],
  creator: "Dr. Uttama Dixit",
  publisher: "Dr. Uttama Dixit",
  metadataBase: new URL('https://www.uttamadixit.com'), // Update with actual domain
  alternates: {
    canonical: '/',
    languages: {
      'en': '/',
      'hi': '/?lang=hi',
    },
  },
  openGraph: {
    title: "Dr. Uttama Dixit - Renowned Indian Artist & Educator",
    description: "Distinguished artist, educator and researcher. Professor and Dean at Faculty of Visual Arts, Banaras Hindu University, Varanasi.",
    url: 'https://www.uttamadixit.com',
    siteName: 'Dr. Uttama Dixit',
    images: [
      {
        url: '/og-image.jpg', // Add your OG image
        width: 1200,
        height: 630,
        alt: 'Dr. Uttama Dixit - Indian Artist',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Uttama Dixit - Renowned Indian Artist & Educator',
    description: 'Distinguished artist, educator and researcher at BHU Varanasi',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // Add Google Search Console verification
    // yandex: 'your-yandex-verification',
    // bing: 'your-bing-verification',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#d97706" />
        
        {/* Structured Data for Artist */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Dr. Uttama Dixit",
              "jobTitle": "Professor, Dean, and Head of Department of Painting",
              "worksFor": {
                "@type": "EducationalOrganization",
                "name": "Banaras Hindu University",
                "department": "Faculty of Visual Arts"
              },
              "url": "https://www.uttamadixit.com",
              "email": "uttama.dixit@gmail.com",
              "telephone": "+91-9793331447",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Varanasi",
                "addressRegion": "Uttar Pradesh",
                "addressCountry": "IN"
              },
              "alumniOf": "Banaras Hindu University",
              "knowsAbout": ["Painting", "Visual Arts", "Art Education", "Applied Arts", "Visual Culture"],
              "award": [
                "Kalashree Award (2025)",
                "Guru Pranam Samman (2022)",
                "Padma Shri Dr. Vishnu Shridhar Wakankar Award (2019)"
              ],
              "image": "/dr-uttama-dixit.jpg",
              "sameAs": [
                // Add social media profiles when available
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ArtistNavbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}