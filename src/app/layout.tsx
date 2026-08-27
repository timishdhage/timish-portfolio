import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Timish Dhage | Data Science · ML · AI Engineering",
  description: "Building systems that learn, retrieve and move. MSc Data Science graduate specializing in AI engineering, RAG systems, and machine learning.",
  keywords: ["Timish Dhage", "Data Science", "Machine Learning", "AI Engineering", "RAG", "Portfolio"],
  authors: [{ name: "Timish Dhage" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
