import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LocalBoost - Websites That Help Local Businesses Sell More",
  description:
    "Professional websites with online ordering, QR codes, payment integration, and email marketing for restaurants, salons, gyms, and local businesses.",
  keywords:
    "local business website, restaurant website, online ordering, QR code menu, small business web design",
  openGraph: {
    title: "LocalBoost - Websites That Help Local Businesses Sell More",
    description:
      "End-to-end website solutions for local businesses. Online ordering, QR menus, payments, and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
