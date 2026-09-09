import { CTASection, PageHero } from "@/components/Common";
import { BreadcrumbSchema } from "@/components/JsonLd";
import ResearchBrowser from "@/components/ResearchBrowser";
import { metadata as makeMetadata } from "@/lib/seo";
export const metadata = makeMetadata(
  "바둑교육 연구소",
  "학부모 가이드와 바둑 교육 이야기를 검색하고 주제별로 살펴보세요.",
  "/research",
);
export default function Research() {
  return (
    <>
      <PageHero
        title="아이를 이해하는, 바둑 이야기"
        eyebrow="바둑교육 연구소"
        description="처음 바둑을 만나는 날부터 생각이 깊어지는 순간까지, 함께 읽는 교육 이야기."
      />
      <BreadcrumbSchema items={[{ name: "바둑교육 연구소", path: "/research" }]} />
      <section className="content-section">
        <div className="container">
          <ResearchBrowser />
          <div className="notice">
            현재 글은 홈페이지 구성을 위한 예시 콘텐츠입니다. 학원에서 검토한 공식 교육 자료나 연구
            결과가 아니며, 특정 교육효과를 보장하지 않습니다.
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
