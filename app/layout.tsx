import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import AosInit from "@/components/AosInit";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Cici Sisilia | Junior Web Developer — Portfolio",
  description:
    "Portfolio Cici Sisilia — Fresh Graduate Manajemen Informatika dari Universitas Riau. Berpengalaman di Laravel, React, Next.js, PHP, JavaScript, MySQL. Terbuka untuk peluang kerja di bidang Web Development dan Data Analytics.",
  keywords: [
    "Cici Sisilia",
    "Portfolio",
    "Web Developer",
    "Laravel",
    "React",
    "Next.js",
    "PHP",
    "JavaScript",
    "MySQL",
    "Fresh Graduate",
    "Universitas Riau",
  ],
  authors: [{ name: "Cici Sisilia" }],
  openGraph: {
    title: "Cici Sisilia | Junior Web Developer",
    description:
      "Fresh Graduate Manajemen Informatika — Laravel, React, Next.js Developer",
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