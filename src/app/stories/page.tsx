import { BookOpen, Flag, MessageCircle, Sprout } from "lucide-react";
import { CTASection, PageHero, SectionHeading, StoryCards } from "@/components/Common";
import { BreadcrumbSchema } from "@/components/JsonLd";
import { metadata as makeMetadata } from "@/lib/seo";
export const metadata = makeMetadata(
  "학생 성장사례",
  "학생의 배움과 성장, 학부모 후기를 전하는 공간입니다. 실제 사례 자료를 준비하고 있습니다.",
  "/stories",
);
export default function Stories() {
  return (
    <>
      <PageHero
        title="한 수씩 쌓이는, 우리 아이의 성장"
        eyebrow="아이들의 성장 이야기"
        description="작은 변화도 소중하게. 확인된 실제 사례와 동의받은 이야기만 전하겠습니다."
      />
      <BreadcrumbSchema items={[{ name: "성장사례", path: "/stories" }]} />
      <section className="content-section">
        <div className="container grid two">
          {[
            { title: "학생 성장사례", text: "학생 성장사례 자료 등록 예정", icon: Sprout },
            {
              title: "수업 전후의 변화",
              text: "수업 과정과 변화에 관한 실제 관찰 자료 등록 예정",
              icon: BookOpen,
            },
            { title: "대회·활동 기록", text: "확인된 대회·활동 자료 등록 예정", icon: Flag },
            { title: "학부모 후기", text: "실제 학부모 후기 등록 예정", icon: MessageCircle },
          ].map(({ title, text, icon: Icon }) => (
            <div key={title}>
              <h2 style={{ fontSize: 25, marginBottom: 18 }}>{title}</h2>
              <div className="empty-state">
                <Icon size={36} />
                <h3>{text}</h3>
                <p>개인정보와 초상권을 확인하고, 공개에 동의한 자료를 차근차근 소개하겠습니다.</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="content-section tinted">
        <div className="container">
          <SectionHeading title="함께 나눌 이야기를 준비합니다" />
          <StoryCards />
        </div>
      </section>
      <CTASection />
    </>
  );
}
