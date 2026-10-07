import type { Metadata } from "next";
import Header from "@/components/Header";
import { Footer } from "@/components/Common";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/data/site";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | 생각하는 힘을 키우는 바둑교육`, template: `%s | ${site.name}` },
  description:
    "유치부부터 초등 고급반까지, 아이의 눈높이에 맞춘 바둑교육. 교육과정을 살펴보고 상담으로 문의하세요.",
  icons: { icon: "/favicon.svg" },
  robots: { index: true, follow: true },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <meta name="naver-site-verification" content="4265f4896be5e8bee42feef66ab48d7d0469aa5f" />
      </head>
      <body>
        <a className="skip-link" href="#main">
          본문 바로가기
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "EducationalOrganization",
            name: site.name,
            url: site.url,
            description: "유치부·초등학생을 위한 연령·수준별 바둑교육",
            logo: site.url + "/favicon.svg",
          }}
        />
      </body>
    </html>
  );
}
