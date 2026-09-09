import { notFound } from "next/navigation";
import { Button, CTASection, FAQAccordion, PageHero } from "@/components/Common";
import { BreadcrumbSchema, FAQSchema } from "@/components/JsonLd";
import { programs, programNotice, faqs, site } from "@/data/site";
import { metadata as makeMetadata } from "@/lib/seo";
export function generateStaticParams() {
  return programs.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = programs.find((p) => p.slug === slug);
  return p
    ? makeMetadata(p.name, `${p.audience} 대상 ${p.name}. ${p.goal}`, `/programs/${slug}`)
    : {};
}
export default async function ProgramDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = programs.find((p) => p.slug === slug);
  if (!p) notFound();
  const index = programs.indexOf(p);
  return (
    <>
      <PageHero
        title={p.name}
        eyebrow={p.level}
        description={p.summary}
        parent={{ label: "교육과정", href: "/programs" }}
      />
      <BreadcrumbSchema
        items={[
          { name: "교육과정", path: "/programs" },
          { name: p.name, path: `/programs/${slug}` },
        ]}
      />
      <section className="content-section">
        <div className="container split">
          <div>
            <div
              className={`course-photo course-${index}`}
              role="img"
              aria-label={`${p.name} AI 수업 예시`}
              style={{ backgroundImage: `url(${site.courseImage})`, borderRadius: 6 }}
            >
              <span>AI 예시 이미지 · 실제 수업 사진 아님</span>
            </div>
            <p className="data-note">{programNotice}</p>
          </div>
          <div>
            <h2>이런 아이와 함께해요</h2>
            <dl className="detail-list">
              <dt>대상</dt>
              <dd>{p.audience} (임시 기준)</dd>
              <dt>추천 기준</dt>
              <dd>{p.recommend}</dd>
              <dt>수업 목표</dt>
              <dd>{p.goal}</dd>
              <dt>수강료</dt>
              <dd>상담 문의</dd>
              <dt>시간표</dt>
              <dd>상담 문의</dd>
            </dl>
            <div style={{ marginTop: 24 }}>
              <Button />
            </div>
          </div>
        </div>
      </section>
      <section className="content-section tinted">
        <div className="container split">
          <div>
            <h2>무엇을 배우나요?</h2>
            <div className="steps">
              {p.topics.map((topic) => (
                <div className="step" key={topic}>
                  <h3>{topic}</h3>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2>수업은 이렇게 진행됩니다</h2>
            <p>{p.method}</p>
            <h2 style={{ marginTop: 30 }}>기대할 수 있는 경험</h2>
            <p>{p.changes}</p>
            <div className="notice">
              학생의 변화는 개인의 경험과 학습 과정에 따라 다르며, 특정 성과나 교육효과를 보장하지
              않습니다.
            </div>
          </div>
        </div>
      </section>
      <section className="content-section">
        <div className="container narrow">
          <h2 style={{ marginBottom: 24 }}>자주 묻는 질문</h2>
          <FAQAccordion items={faqs.slice(0, 4)} />
          <FAQSchema items={faqs.slice(0, 4)} />
        </div>
      </section>
      <CTASection />
    </>
  );
}
