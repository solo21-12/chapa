import "./globals.css";
import type { Metadata } from "next";
import { Inter,Roboto_Mono } from "next/font/google";

const inter = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Chapa",
  description: "Chapa.co clone made by Dawit Abraham using Next js 13 ",
  icons: {
    icon: "/chapa1.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
