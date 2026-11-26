import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import AosInit from "@/components/AosInit";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Cici Sisilia | Junior Web Developer & Data Specialist — Portfolio",
  description:
    "Portfolio Cici Sisilia — Fresh Graduate D3 Manajemen Informatika Universitas Riau (IPK 3.64/4.00 Cum Laude). Memiliki kompetensi dalam Web Development (Laravel, Next.js, MySQL), Administrasi Data, Layanan Pelanggan, dan IT Support.",
  keywords: [
    "Cici Sisilia",
    "Portfolio",
    "Web Developer",
    "Data Specialist",
    "Laravel",
    "React",
    "Next.js",
    "PHP",
    "JavaScript",
    "MySQL",
    "Fresh Graduate",
    "Universitas Riau",
    "Castavia Property",
    "Lintasarta",
  ],
  authors: [{ name: "Cici Sisilia" }],
  openGraph: {
    title: "Cici Sisilia | Junior Web Developer & Data Specialist",
    description:
      "Fresh Graduate D3 Manajemen Informatika Universitas Riau — Web Developer & Data Specialist",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={plusJakarta.variable}>
        <AosInit />
        {children}
      </body>
    </html>
  );
}