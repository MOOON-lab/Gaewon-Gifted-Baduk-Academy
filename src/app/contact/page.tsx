import Link from "next/link";
import { PageHero } from "@/components/Common";
import { BreadcrumbSchema } from "@/components/JsonLd";
import ContactForm from "@/components/ContactForm";
import { site } from "@/data/site";
import { metadata as makeMetadata } from "@/lib/seo";
export const metadata = makeMetadata(
  "상담 및 무료 체험수업",
  "우리 아이에게 맞는 바둑교육을 상담하세요. 무료 체험수업 신청 안내와 상담 데모 폼.",
  "/contact",
);
export default function Contact() {
  return (
    <>
      <PageHero
        title="우리 아이의 첫 한 수를 함께해요"
        eyebrow="상담 및 무료 체험수업"
        description="아이의 연령과 경험을 알려주시면, 알맞은 시작을 함께 고민하겠습니다."
      />
      <BreadcrumbSchema items={[{ name: "상담문의", path: "/contact" }]} />
      <section className="content-section">
        <div className="container">
          <div className="notice" style={{ marginTop: 0, marginBottom: 28 }}>
            <strong>현재 데모 모드입니다.</strong> 입력 검증만 체험할 수 있으며, 내용이
            전송·저장되거나 상담이 접수되지 않습니다. 실제 접수 서비스와 연락처는 준비 중입니다.
          </div>
          <div className="contact-grid">
            <ContactForm />
            <aside className="contact-aside">
              <section className="card info-card" id="contact-info">
                <h2>상담 안내</h2>
                <dl>
                  <dt>전화번호</dt>
                  <dd>
                    {site.phone ? <a href={`tel:${site.phone}`}>{site.phone}</a> : "정보 입력 예정"}
                  </dd>
                  <dt>학원 주소</dt>
                  <dd>{site.address || "정보 입력 예정"}</dd>
                  <dt>운영시간</dt>
                  <dd>{site.hours || "정보 입력 예정"}</dd>
                  <dt>수강료 · 시간표</dt>
                  <dd>상담 문의</dd>
                </dl>
              </section>
              <section className="card info-card">
                <h3>상담 전에 살펴보세요</h3>
                <p>
                  연령과 학년은 참고 기준입니다. 바둑 경험과 학습 속도에 따라 과정이 달라질 수
                  있습니다.
                </p>
                <Link className="text-link" href="/programs">
                  교육과정 비교하기 →
                </Link>
                <br />
                <Link className="text-link" href="/faq">
                  자주 묻는 질문 보기 →
                </Link>
              </section>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
