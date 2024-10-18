import type { Metadata } from "next";
import "./globals.css";
import TheHeader from "@/components/layout/TheHeader";

export const metadata: Metadata = {
  title: "Printer Supplies Client",
  description: "Client for printer-supplies-api.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TheHeader />
        <main>{children}</main>
      </body>
    </html>
  );
}
