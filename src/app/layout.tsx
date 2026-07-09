import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Piyush Singh | Frontend Developer & AI Training Contributor",
  description:
    "Portfolio and online resume for Piyush Singh, a React/Next.js frontend developer and AI training contributor based in Jaipur, India."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
