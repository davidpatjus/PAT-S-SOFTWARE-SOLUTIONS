import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import clsx from "clsx";
import "./globals.css";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PAT'S Software Solutions - Desarrollo Web y Aplicaciones Freelance",
  description: "Desarrollador freelance especializado en soluciones Full-Stack con Angular, React, Next.js y más. Proyectos personalizados para tu negocio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "PAT'S Software Solutions",
    "url": "https://pats-software-solutions.vercel.app/",
    "logo": "../assets/images/logosaas.png",
    "sameAs": [
      "https://www.linkedin.com/in/david-esteban-patino-juspian-561861317/",
      "https://www.instagram.com/david.juspian/",
      "https://github.com/davidpatjus",
      "https://api.whatsapp.com/send?phone=573146200770&text=%F0%9F%91%BE%20Hi%20David%2C%20how%20are%20you%3F%20I%20am%20interested%20in%20your%20services.%20%F0%9F%91%BE%20"
    ],
    "description": "Desarrollador freelance especializado en soluciones Full-Stack con Angular, React, Next.js y más.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+57 3146200770",
      "contactType": "Customer Support"
    }
  };

  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://pats-software-solutions.vercel.app/" />
        <meta property="og:title" content="PAT'S Software Solutions - Desarrollo Web y Aplicaciones Freelance" />
        <meta property="og:description" content="Desarrollador freelance especializado en soluciones Full-Stack con Angular, React, Next.js y más. Proyectos personalizados para tu negocio." />
        <meta property="og:image" content="../assets/images/logosaas.png" />
        <meta property="og:url" content="https://pats-software-solutions.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PAT'S Software Solutions - Desarrollo Web y Aplicaciones Freelance" />
        <meta name="twitter:description" content="Desarrollador freelance especializado en soluciones Full-Stack con Angular, React, Next.js y más." />
        <meta name="twitter:image" content="../assets/images/logosaas.png" />
        <link rel="icon" href="../assets/images/logosaas.png" />
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={clsx(dmSans.className, "antialiased")}>
        {children}
      </body>
    </html>
  );
}
