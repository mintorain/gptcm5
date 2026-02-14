import type { Metadata } from "next";
import { Inter } from "next/font/google";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "GPT콘텐츠메이커 5기 (바이브코딩편) - 두온교육 × 미래이음연구소",
  description: "코딩 몰라도 가능합니다. GPT로 만드는 나만의 웹서비스. 기획부터 배포까지 완성형 실습. 온라인/오프라인 수강 신청.",
  keywords: ["바이브코딩", "GPT", "웹서비스", "코딩교육", "비전공자", "두온교육", "Next.js"],
  openGraph: {
    title: "GPT콘텐츠메이커 5기 (바이브코딩편)",
    description: "코딩 몰라도 가능합니다. GPT로 만드는 나만의 웹서비스 – 기획부터 배포까지 완성형 실습",
    type: "website",
    locale: "ko_KR",
    siteName: "두온교육 × 미래이음연구소",
  },
  twitter: {
    card: "summary_large_image",
    title: "GPT콘텐츠메이커 5기 (바이브코딩편)",
    description: "코딩 몰라도 가능합니다. GPT로 만드는 나만의 웹서비스",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="dark">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css"
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  );
}
