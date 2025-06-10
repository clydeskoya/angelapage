import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Dra. Ângela Ribeiro - Psiquiatra em Lisboa | Consultas de Psiquiatria e Psicoterapia",
  description: "Dra. Ângela Ribeiro, psiquiatra com mais de 30 anos de experiência em Lisboa. Consultas de psiquiatria, psicoterapia e grupanálise. Marque sua consulta: 218 480 046 ou 962 556 989.",
  keywords: "psiquiatra lisboa, psiquiatra portugal, consulta psiquiatria, psicoterapia lisboa, grupanálise, ansiedade, depressão, saúde mental, dra ângela ribeiro",
  authors: [{ name: "Dra. Ângela Ribeiro" }],
  creator: "Dra. Ângela Ribeiro",
  publisher: "Dra. Ângela Ribeiro",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://angelapage.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Dra. Ângela Ribeiro - Psiquiatra em Lisboa",
    description: "Dra. Ângela Ribeiro, psiquiatra com mais de 30 anos de experiência em Lisboa. Consultas de psiquiatria, psicoterapia e grupanálise.",
    url: 'https://angelapage.vercel.app',
    siteName: 'Dra. Ângela Ribeiro - Psiquiatra',
    locale: 'pt_PT',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Dra. Ângela Ribeiro - Psiquiatra em Lisboa',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Dra. Ângela Ribeiro - Psiquiatra em Lisboa",
    description: "Dra. Ângela Ribeiro, psiquiatra com mais de 30 anos de experiência em Lisboa. Consultas de psiquiatria, psicoterapia e grupanálise.",
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
    google: 'your-google-verification-code',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  other: {
    'theme-color': '#4A90E2',
  },
};

export default function RootLayout({children}: any) {
  return (
    <html lang="pt">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {/* Structured Data for Medical Practice */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalBusiness",
              "name": "Dra. Ângela Ribeiro - Psiquiatra",
              "description": "Consultório de psiquiatria e psicoterapia em Lisboa",
              "url": "https://angelapage.vercel.app",
              "telephone": ["+351218480046", "+351962556989"],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Avenida de Roma 3, 2°E",
                "addressLocality": "Lisboa",
                "postalCode": "1000-260",
                "addressCountry": "PT"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "38.7223",
                "longitude": "-9.1393"
              },
              "openingHours": "Mo-Fr 14:30-19:30",
              "priceRange": "€€",
              "medicalSpecialty": "Psychiatry",
              "availableService": [
                "Psiquiatria",
                "Psicoterapia", 
                "Grupanálise"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Serviços Psiquiátricos",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalProcedure",
                      "name": "Consulta de Psiquiatria",
                      "description": "Recolha cuidadosa do sintoma ou doença visando o seu alívio e cura"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "MedicalProcedure",
                      "name": "Psicoterapia",
                      "description": "Tomar conhecimento psicodinâmico para obter estabilidade emocional"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "MedicalProcedure", 
                      "name": "Grupanálise",
                      "description": "Tratamento em grupo heterogéneo onde o conhecimento inter-pessoal é chave"
                    }
                  }
                ]
              },
              "sameAs": [
                "https://www.facebook.com/draangelaribeiro",
                "https://www.linkedin.com/in/dra-ângela-ribeiro"
              ]
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
