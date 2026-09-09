import { Button, CTASection, PageHero, ProgramCard, SectionHeading } from "@/components/Common";
import { BreadcrumbSchema } from "@/components/JsonLd";
import { programs, programNotice } from "@/data/site";
import { metadata as makeMetadata } from "@/lib/seo";
export const metadata = makeMetadata(
  "교육과정",
  "유치부, 초등 입문반, 중급반, 고급반의 대상과 목표를 비교하고 아이에게 맞는 바둑교육을 찾아보세요.",
  "/programs",
);
export default function Programs() {
  return (
    <>
      <PageHero
        title="우리 아이에게 맞는 한 걸음"
        eyebrow="연령·수준별 교육과정"
        description="처음의 설렘부터 깊이 있는 생각까지, 아이의 속도에 맞는 수업을 만납니다."
      />
      <BreadcrumbSchema items={[{ name: "교육과정", path: "/programs" }]} />
      <section className="content-section tinted">
        <div className="container">
          <h2 className="sr-only">전체 교육과정</h2>
          <div className="grid four">
            {programs.map((p, i) => (
              <ProgramCard program={p} index={i} key={p.slug} />
            ))}
          </div>
          <p className="data-note">{programNotice}</p>
        </div>
      </section>
      <section className="content-section">
        <div className="container">
          <SectionHeading
            title="교육과정을 한눈에 비교하세요"
            description="학년과 함께 바둑 경험, 규칙 이해도, 학습 속도를 살펴봅니다."
          />
          <div
            className="table-wrap"
            tabIndex={0}
            role="region"
            aria-label="교육과정 비교표, 작은 화면에서 좌우 스크롤 가능"
          >
            <table>
              <thead>
                <tr>
                  <th scope="col">과정 / 대상</th>
                  <th scope="col">교육 목표</th>
                  <th scope="col">주요 학습 내용</th>
                  <th scope="col">추천 기준</th>
                </tr>
              </thead>
              <tbody>
                {programs.map((p) => (
                  <tr key={p.slug}>
                    <th scope="row">
                      {p.name}
                      <br />
                      <small>{p.audience} · 임시 기준</small>
                    </th>
                    <td>{p.goal}</td>
                    <td>{p.topics.join(" · ")}</td>
                    <td>{p.recommend}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid two">
            {programs.map((p) => (
              <div className="card info-card" key={p.slug}>
                <h3>{p.name} 수업 방식</h3>
                <p>{p.method}</p>
              </div>
            ))}
          </div>
          <div className="notice">
            수강료: 상담 문의 · 시간표: 상담 문의. 과정 안내는 실제 운영 내용 확인 전 시안입니다.
          </div>
          <div className="section-heading">
            <h2>어떤 반이 맞을지 고민되시나요?</h2>
            <p>아이의 나이와 바둑 경험을 알려주세요.</p>
            <div style={{ marginTop: 20 }}>
              <Button>알맞은 반 상담받기</Button>
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
