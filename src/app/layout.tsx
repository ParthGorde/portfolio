import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Providers from "@/components/Providers";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Calistoga, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const calistoga = Calistoga({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Parth Gorde - Frontend Engineer",
  description:
    "Frontend Engineer specializing in React, Next.js, and modern web development. Explore my projects and insights.",
  keywords: [
    "Parth Gorde",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "JavaScript",
    "Web Development",
  ],
  authors: [{ name: "Parth Gorde", url: "https://parthgorde.vercel.app" }],
  icons: {
    icon: "/img/favicon.ico", // Default favicon;
  },
  openGraph: {
    title: "Parth Gorde - Frontend Engineer",
    description:
      "Frontend Engineer specializing in React, Next.js, and modern web development.",
    url: "https://parthgorde.vercel.app",
    siteName: "Parth Gorde",
    images: [
      {
        url: "/img/me/me.jpg",
        width: 1200,
        height: 630,
        alt: "Parth Gorde Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Parth Gorde - Frontend Engineer",
    description:
      "Frontend Engineer specializing in React, Next.js, and modern web development.",
    images: ["/img/me/me.jpg"],
  },
  metadataBase: new URL("https://parthgorde.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={cn(
          "mx-auto flex min-h-screen max-w-3xl flex-col px-8 font-sans antialiased",
          inter.variable,
          calistoga.variable,
        )}
      >
        <Providers>
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
