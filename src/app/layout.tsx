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

  return (
    <html lang="es">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://pats-software-solutions.vercel.app/" />
        <meta property="og:title" content="PAT'S Software Solutions - Desarrollo Web y Aplicaciones Freelance" />
        <meta property="og:description" content="Desarrollador freelance especializado en soluciones Full-Stack con Angular, React, Next.js y más. Proyectos personalizados para tu negocio." />
        <meta property="og:image" content="./ogimg.png" />
        <meta property="og:url" content="https://pats-software-solutions.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="PAT'S Software Solutions - Desarrollo Web y Aplicaciones Freelance" />
        <meta name="twitter:description" content="Desarrollador freelance especializado en soluciones Full-Stack con Angular, React, Next.js y más." />
        <meta name="twitter:image" content="../assets/images/logosaas.png" />
        <link rel="icon" href="../assets/images/logosaas.png" />
      </head>
      <body className={clsx(dmSans.className, "antialiased")}>
        {children}
      </body>
    </html>
  );
}
