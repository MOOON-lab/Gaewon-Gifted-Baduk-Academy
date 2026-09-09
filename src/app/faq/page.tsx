import { CTASection, FAQAccordion, PageHero } from "@/components/Common";
import { BreadcrumbSchema, FAQSchema } from "@/components/JsonLd";
import { faqs } from "@/data/site";
import { metadata as makeMetadata } from "@/lib/seo";
export const metadata = makeMetadata(
  "자주 묻는 질문",
  "바둑 입문, 반 편성, 수강료, 시간표와 무료 체험수업에 관한 질문을 확인하세요.",
  "/faq",
);
export default function FAQ() {
  return (
    <>
      <PageHero
        title="궁금한 점을 함께 풀어볼까요?"
        eyebrow="자주 묻는 질문"
        description="바둑을 처음 알아보는 학부모님이 자주 궁금해하시는 내용을 모았습니다."
      />
      <BreadcrumbSchema items={[{ name: "자주 묻는 질문", path: "/faq" }]} />
      <section className="content-section">
        <div className="container narrow">
          <FAQAccordion items={faqs} />
          <FAQSchema items={faqs} />
        </div>
      </section>
      <CTASection />
    </>
  );
}
