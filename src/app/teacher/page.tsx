import { Button, CTASection, PageHero, TeacherPhoto } from "@/components/Common";
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
            <TeacherPhoto priority />
            
          </div>
          <div>
            <h2>{teacher.name} 선생님</h2>
            <p>{teacher.description}</p>
            <div className="quote-panel" style={{ marginTop: 24 }}>
              {teacher.philosophy}
            </div>
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
      <section className="content-section tinted">
        <div className="container narrow">
          <h2>바둑이 교육에 미치는 좋은 점</h2>
          <ul style={{ paddingLeft: 24, lineHeight: 2 }}>
            <li>주의 집중력 증가 → 수업태도 향상</li>
            <li>창의성 증진 → 과학탐구력 증진</li>
            <li>수학적 사고기능의 촉진 → 수학능력 향상</li>
            <li>논리적 설득 및 인과관계 → 글쓰기 및 논리적 사고 함양</li>
            <li>기억력 증진 및 정서적 안정성 → 전반적인 수업능력 높임</li>
          </ul>
          <h2 style={{ marginTop: 36 }}>바둑은 어떤 점에서 어린이 교육에 좋을까요?</h2>
          <ol style={{ paddingLeft: 24, lineHeight: 1.9 }}>
            <li style={{ marginBottom: 20 }}>
              바둑에는 ‘수읽기’라는 것이 있습니다. 이 ‘수읽기’를 하다 보면 두뇌의 회전이 빨라지고 몇 수 앞을 미리 보면서 생각을 하게 되면 계산 능력이 뛰어나게 좋아집니다.
              이 점은 단순히 수학적인 능력 향상뿐 아니라, 미래의 일을 논리적으로 예측하는 사고(세상을 살아가는 지혜)를 키우게 되어 아이가 성장한 후 더욱 빛을 발합니다.
            </li>
            <li style={{ marginBottom: 20 }}>또한, 바둑을 두는 사이에 매사 집중하는 습관이 생겨 한 가지 일에 집중력이 생기게끔 도와줍니다.</li>
            <li style={{ marginBottom: 20 }}>매번 대국을 할 때마다 새로운 바둑을 두게 되는 것이지요. 그래서 창의성과 응용력이 좋아집니다.</li>
            <li style={{ marginBottom: 20 }}>완전한 한 판의 바둑을 다 외울 수 있으면 그 아이는 다른 아이들과는 기억력에 있어서는 완전히 다르다는 것을 느끼실 것입니다.</li>
            <li style={{ marginBottom: 20 }}>바둑을 두면 뇌의 신경세포를 전체적으로 넓게 사용해 신경세포 간의 연결을 좋게 만들어 주므로 머리가 좋아지게 됩니다.</li>
          </ol>
          <p style={{ marginTop: 24, textAlign: "right", fontWeight: 700 }}>김상순 원장 (초대여류국수)</p>
        </div>
      </section>
      <CTASection />
    </>
  );
}
