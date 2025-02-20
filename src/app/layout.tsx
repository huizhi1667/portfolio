import "./globals.css";
import type { Metadata } from "next";
import { robotoRegular } from "./fonts/fonts";
import { Header, Footer } from "./layouts";

export const metadata: Metadata = {
  title: "Hyeji Choi",
  description: "Hyeji Choi Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${robotoRegular.variable}`}>
      <body className="min-w-[900px]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
