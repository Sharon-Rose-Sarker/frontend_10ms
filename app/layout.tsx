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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}

// Make searchParams optional to avoid runtime errors
type PageProps = {
  searchParams?: { [key: string]: string | undefined };
};

async function getProductData(lang: string) {
  // Replace this with your actual data fetching logic
  return {
    title: "Course Page",
    description: "Course description",
    seo: {
      title: "SEO Title",
      description: "SEO Description",
      image: "/default-image.png",
    },
  };
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const lang = searchParams?.lang || "en";
  const product = await getProductData(lang);

  return {
    title: product?.seo?.title || product?.title || "Course Page",
    description: product?.seo?.description || product?.description,
    openGraph: {
      images: product?.seo?.image ? [{ url: product.seo.image }] : [],
    },
  };
}
