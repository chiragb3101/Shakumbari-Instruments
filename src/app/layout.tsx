import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shakumbari Instruments - Professional Paper Testing Equipment",
  description: "Industry-leading precision instruments for comprehensive paper, pulp, and packaging material analysis. Delivering accurate, reliable testing solutions for quality control and research applications.",
  keywords: "paper testing equipment, precision instruments, quality control, laboratory equipment, packaging testing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-slate-200 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
