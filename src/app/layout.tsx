import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Nav from "@/components/main/Nav";
import Header from "@/components/main/Header";
import { Providers } from "@/components/context/Providers";
import StarsCanvas from "@/components/main/StarBackground";

const inter = Inter({ subsets: ["latin"] });
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Marcello Nazar",
  description: "Portifolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} page bg-site text-white bg-cover bg-no-repeat font-sora relative`}
      >
        <div className="h-screen w-screen">
          <Nav />
          <Header />
          <StarsCanvas />
          {children}
        </div>
      </body>
    </html>
  );
}
