import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const HOST_URL ='https://dexodus.vercel.app/'
export const metadata = {
  metadataBase: HOST_URL ? new URL(HOST_URL) : undefined,
  title: "Dexodus",
  description:     "Your gateway to gasless trading with stable fees, trading across multiple markets, copy trading, singles transactions for a CEX-like experience and competitive rankings."  ,
  openGraph: {
    images: "/assets/images/meta/seo.png",
    title: "Dexodus",
  },
};


// Main layout component


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
