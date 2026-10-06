import { PageHero } from "@/components/Common";
import { BreadcrumbSchema } from "@/components/JsonLd";
import { metadata as makeMetadata } from "@/lib/seo";
export const metadata = makeMetadata(
  "이용약관",
  "개원영재바둑교습소 홈페이지 시안과 데모 기능 이용에 관한 안내.",
  "/terms",
);
export default function Terms() {
  return (
    <>
      <PageHero
        title="이용약관"
        description="홈페이지 정보와 데모 기능의 이용 범위를 안내합니다."
      />
      <BreadcrumbSchema items={[{ name: "이용약관", path: "/terms" }]} />
      <section className="content-section">
        <div className="container narrow prose">
          <p className="legal-note">
            운영자 검토 전 이용 안내 시안입니다. 실제 운영 조건에 맞춘 확정 약관은 추후 등록
            예정입니다.
          </p>
          <h2>1. 홈페이지의 목적</h2>
          <p>
            이 홈페이지는 개원영재바둑교습소의 교육과정과 상담 방법을 안내하기 위한 제작 시안입니다.
          </p>
          <h2>2. 정보의 확인</h2>
          <p>
            임시로 표시된 연령 기준, 교육 내용과 소개 문구는 실제 운영 내용 확정 후 변경될 수
            있습니다. 수강료와 시간표는 상담 문의로 안내할 예정이며, 현재 전화번호와 주소는 등록
            준비 중입니다.
          </p>
          <h2>3. 데모 기능</h2>
          <p>
            상담 폼의 입력 확인은 신청 접수나 수강 계약 체결이 아닙니다. 실제 상담 예약, 결제, 수강
            신청 기능은 제공하지 않습니다.
          </p>
          <h2>4. 콘텐츠 안내</h2>
          <p>
            AI 교육 장면은 실제 학원, 선생님 또는 학생의 사진이 아닙니다. 연구소의 예시 글은 공식
            연구 자료가 아니며 특정 교육효과를 보장하지 않습니다. 실제 후기와 경력은 확인된 자료만
            등록할 예정입니다.
          </p>
          <h2>5. 실제 운영 전 확인 사항</h2>
          <p>
            운영 주체, 연락처, 서비스 제공 조건, 변경 안내 방식 등은 실제 운영 전 확정하여 게시해야
            합니다. 실제 수강 계약 관련 사항은 별도 안내가 필요합니다.
          </p>
        </div>
      </section>
    </>
  );
}
