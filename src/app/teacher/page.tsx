import { Button, CTASection, PageHero, Photo } from "@/components/Common";
import { BreadcrumbSchema } from "@/components/JsonLd";
import { teacher } from "@/data/site";
import { metadata as makeMetadata } from "@/lib/seo";
export const metadata = makeMetadata(
  "김상순 선생님",
  "아이의 눈높이에서 생각하는 과정을 함께하는 김상순 선생님의 소개와 지도철학 안내.",
  "/teacher",
);
export default function Teacher() {
  return (
    <>
      <PageHero
        title="아이의 생각을 먼저 듣겠습니다"
        eyebrow="김상순 선생님"
        description={teacher.intro}
      />
      <BreadcrumbSchema items={[{ name: "김상순 선생님", path: "/teacher" }]} />
      <section className="content-section">
        <div className="container split">
          <div>
            <Photo priority />
            <p className="data-note">
              AI 교육 장면 예시입니다. 김상순 선생님의 실제 프로필 사진은 등록 예정입니다.
            </p>
          </div>
          <div>
            <h2>{teacher.name} 선생님</h2>
            <p>{teacher.description}</p>
            <div className="quote-panel" style={{ marginTop: 24 }}>
              {teacher.philosophy}
            </div>
            <p className="data-note">지도철학 및 인사말은 선생님 확인 전의 소개 시안입니다.</p>
          </div>
        </div>
      </section>
      <section className="content-section tinted">
        <div className="container grid two">
          <div className="card info-card">
            <h2>주요 경력</h2>
            {teacher.careerEnabled && teacher.careers.length ? (
              <ul>
                {teacher.careers.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            ) : (
              <p style={{ marginTop: 18 }}>{teacher.careerPlaceholder}</p>
            )}
          </div>
          <div className="card info-card">
            <h2>수상·활동 이력</h2>
            {teacher.awardsEnabled && teacher.awards.length ? (
              <ul>
                {teacher.awards.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            ) : (
              <p style={{ marginTop: 18 }}>확인된 수상·활동 자료 등록 예정</p>
            )}
          </div>
        </div>
      </section>
      <section className="content-section">
        <div className="container split">
          <div>
            <h2>아이들을 지도하는 방식</h2>
            <div className="steps">
              {[
                [
                  "한 사람의 속도를 살핍니다",
                  "아이의 관심과 경험을 확인하고 작은 목표부터 시작합니다.",
                ],
                [
                  "선택한 이유를 묻습니다",
                  "한 수를 놓은 이유를 아이의 말로 표현하도록 기다립니다.",
                ],
                ["과정을 함께 돌아봅니다", "승패와 함께 고민한 순간과 새로운 발견을 이야기합니다."],
              ].map(([title, text]) => (
                <div className="step" key={title}>
                  <div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2>학부모님께 전하는 마음</h2>
            <p>{teacher.message}</p>
            <div className="button-row" style={{ marginTop: 26 }}>
              <Button href="/programs" secondary>
                교육과정 살펴보기
              </Button>
              <Button />
            </div>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
