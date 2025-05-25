import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "深圳周喜珠宝产业服务有限公司",
  description: "深圳周喜珠宝产业服务有限公司",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ fontSize: "8.25px" }}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
