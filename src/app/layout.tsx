import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Choiz - Productos Capilares para la Pérdida de Cabello",
  description:
    "Choiz ofrece soluciones capilares avanzadas para la pérdida de cabello, mejorando la salud capilar con productos efectivos y naturales. Descubre más sobre nuestros tratamientos.",
  keywords:
    "productos capilares, pérdida de cabello, salud capilar, tratamiento de caída del cabello, cuidado del cabello, Choiz",
  openGraph: {
    title: "Choiz - Productos Capilares para la Pérdida de Cabello",
    description:
      "Choiz ofrece soluciones capilares avanzadas para la pérdida de cabello, mejorando la salud capilar con productos efectivos y naturales.",
    url: "https://www.choiz.com.mx", // Asegúrate de reemplazar esto con tu URL real
    siteName: "Choiz",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "https://www.choiz.com.mx",
    title: "Choiz - Productos Capilares para la Pérdida de Cabello",
    description:
      "Choiz ofrece soluciones capilares avanzadas para la pérdida de cabello, mejorando la salud capilar con productos efectivos y naturales.",
  },
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
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Choiz ofrece soluciones capilares avanzadas para la pérdida de cabello, mejorando la salud capilar con productos efectivos y naturales."
        />
        <meta
          name="keywords"
          content="productos capilares, pérdida de cabello, salud capilar, tratamiento de caída del cabello, cuidado del cabello, Choiz"
        />
        <meta name="author" content="Choiz" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
