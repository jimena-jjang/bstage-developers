import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "b.stage 개발자센터",
  description: "b.stage API, SDK 레퍼런스 및 개발자 가이드를 확인하세요.",
  openGraph: {
    title: "b.stage 개발자센터",
    description: "b.stage API, SDK 레퍼런스 및 개발자 가이드를 확인하세요.",
    siteName: "b.stage Developers",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-white text-[#1a1d27]">
        <Header />
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}
