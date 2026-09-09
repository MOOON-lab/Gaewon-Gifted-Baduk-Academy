import { Benefits, Button, CTASection, PageHero, Photo, SectionHeading } from "@/components/Common";
import { BreadcrumbSchema } from "@/components/JsonLd";
import { site } from "@/data/site";
import { metadata as makeMetadata } from "@/lib/seo";
export const metadata = makeMetadata(
  "학원소개",
  "한 수를 배우며 생각하는 힘을 기르는 곳. 개원영재바둑학원의 교육철학, 지도 방식과 학원 안내.",
  "/about",
);
export default function About() {
  return (
    <>
      <PageHero
        title="작은 바둑판에서, 더 큰 세상으로"
        description="바둑을 잘 두는 즐거움과 스스로 생각하는 기쁨을 함께 배웁니다."
        eyebrow="개원영재바둑학원 소개"
      />
      <BreadcrumbSchema items={[{ name: "학원소개", path: "/about" }]} />
      <section className="content-section">
        <div className="container split">
          <div>
            <h2>
              아이의 생각이
              <br />
              배움의 중심이 됩니다
            </h2>
            <p>
              개원영재바둑학원은 유치부·초등학생을 위한 연령·수준별 바둑교육을 소개합니다. 아이가 한
              수를 선택하고 자신의 생각을 이야기하는 과정을 중요하게 생각합니다.
            </p>
            <p>
              처음 만나는 규칙부터 깊이 있는 대국까지, 아이의 경험과 속도에 맞는 출발점을 함께
              찾습니다.
            </p>
            <div className="notice">
              학원 소개와 교육철학은 검토용 시안입니다. 실제 운영 내용 확인 후 업데이트할
              예정입니다.
            </div>
          </div>
          <Photo priority />
        </div>
      </section>
      <section className="content-section tinted">
        <div className="container">
          <SectionHeading
            title="우리가 소중하게 생각하는 가치"
            description="집중하는 시간, 생각을 나누는 대화, 서로를 존중하는 태도."
          />
          <Benefits />
        </div>
      </section>
      <section className="content-section">
        <div className="container">
          <SectionHeading title="아이의 속도에 맞춰 지도합니다" />
          <div className="grid three">
            {[
              [
                "먼저 살펴보기",
                "연령뿐 아니라 바둑 경험과 관심을 확인하며 알맞은 시작점을 찾습니다.",
              ],
              [
                "스스로 생각할 시간",
                "바로 정답을 알려주기보다 아이가 선택한 이유를 듣는 시간을 제안합니다.",
              ],
              ["함께 돌아보기", "대국이 끝나면 좋은 선택과 다른 가능성을 함께 살펴봅니다."],
            ].map(([title, text], i) => (
              <div className="card info-card" key={title}>
                <span className="number">0{i + 1}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="content-section tinted">
        <div className="container split">
          <div>
            <h2>수업환경 및 시설</h2>
            <div className="empty-state">
              <h3>실제 학원 사진 등록 예정</h3>
              <p>교실과 바둑 학습 공간의 사진 및 시설 정보를 확인 후 안내하겠습니다.</p>
            </div>
          </div>
          <div id="directions">
            <h2>오시는 길</h2>
            <p>주소: {site.address || "정보 입력 예정"}</p>
            <p>운영시간: {site.hours || "정보 입력 예정"}</p>
            <div className="notice">정확한 주소가 등록되면 지도와 교통편을 함께 안내합니다.</div>
            <Button href="/contact" secondary>
              방문 상담 안내
            </Button>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
