import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ArtistNavbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Dr. Uttama Dixit - Renowned Indian Artist & Professor | BHU Varanasi",
    template: "%s | Dr. Uttama Dixit"
  },
  description: "Prof. Dr. Uttama Dixit - Distinguished Indian artist, educator & Dean at Faculty of Visual Arts, BHU. 23+ years experience, 45+ exhibitions, 12 PhDs awarded. Expert in Folk Art & Contemporary Painting.",
  keywords: [
    "Dr Uttama Dixit",
    "Uttama Dixit artist",
    "BHU Visual Arts",
    "Indian contemporary artist",
    "Varanasi artist",
    "Kashi folk art",
    "Indian painting professor",
    "art educator India",
    "Banaras Hindu University artist",
    "Indian art exhibitions",
    "contemporary Indian painting",
    "folk art researcher"
  ].join(", "),
  authors: [{ name: "Dr. Uttama Dixit", url: "https://www.artistuttamadixit.online" }],
  creator: "Dr. Uttama Dixit",
  publisher: "Dr. Uttama Dixit",
  metadataBase: new URL('https://www.artistuttamadixit.online'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Prof. Uttama Dixit - Renowned Indian Artist, Educator & Researcher",
    description: "Distinguished artist & Dean at Faculty of Visual Arts, BHU. Expert in Folk Art & Contemporary Painting. 45+ exhibitions, 12 PhDs awarded.",
    url: 'https://www.artistuttamadixit.online',
    siteName: 'Dr. Uttama Dixit - Artist Portfolio',
    images: [
      {
        url: '/uttama-dixit-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Uttama Dixit - Renowned Indian Artist and Professor',
      },
    ],
    locale: 'en_IN',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Uttama Dixit - Indian Artist & Educator',
    description: 'Professor & Dean at BHU Visual Arts | 45+ Exhibitions | Folk Art Expert',
    images: ['/uttama-dixit-og.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#d97706" />
        <meta name="geo.region" content="IN-UP" />
        <meta name="geo.placename" content="Varanasi" />
        
        {/* Enhanced Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Dr. Uttama Dixit",
              "alternateName": "Prof. Uttama",
              "description": "Renowned Indian artist, educator and researcher specializing in Folk Art and Contemporary Painting",
              "jobTitle": "Professor, Dean, and Head of Department of Painting",
              "worksFor": {
                "@type": "EducationalOrganization",
                "name": "Banaras Hindu University",
                "department": "Faculty of Visual Arts",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Varanasi",
                  "addressRegion": "Uttar Pradesh",
                  "postalCode": "221005",
                  "addressCountry": "IN"
                }
              },
              "url": "https://www.artistuttamadixit.online",
              "email": "uttama.dixit@bhu.ac.in",
              "telephone": "+919793331447",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Faculty of Visual Arts",
                "addressLocality": "Varanasi",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "221005",
                "addressCountry": "IN"
              },
              "alumniOf": {
                "@type": "EducationalOrganization",
                "name": "Banaras Hindu University"
              },
              "knowsAbout": [
                "Painting",
                "Visual Arts",
                "Folk Art",
                "Contemporary Art",
                "Art Education",
                "Applied Arts",
                "Kashi Folk Art",
                "Indian Cultural Heritage"
              ],
              "hasCredential": [
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "Ph.D. in Drawing and Painting",
                  "credentialCategory": "Doctorate"
                },
                {
                  "@type": "EducationalOccupationalCredential",
                  "name": "M.F.A.",
                  "credentialCategory": "Master"
                }
              ],
              "award": [
                "Kalashree Award (2025)",
                "Guru Pranam Samman (2022)",
                "Padma Shri Dr. Vishnu Shridhar Wakankar Award (2019)",
                "Gold Medal Art Exhibition Agnipath (2005)"
              ],
              "memberOf": [
                {
                  "@type": "Organization",
                  "name": "State Lalit Kala Academy, Uttar Pradesh"
                }
              ],
              "owns": [
                {
                  "@type": "Book",
                  "name": "Kashi Sanskriti evam Lok Chitrakala",
                  "author": "Dr. Uttama Dixit"
                }
              ],
              "image": "https://www.artistuttamadixit.online/uttama-dixit-og.jpg",
              "sameAs": []
            })
          }}
        />
        
        {/* Breadcrumb Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.artistuttamadixit.online"
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <GoogleAnalytics />
        <ArtistNavbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}