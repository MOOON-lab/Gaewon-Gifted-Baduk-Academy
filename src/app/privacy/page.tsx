import { PageHero } from "@/components/Common";
import { BreadcrumbSchema } from "@/components/JsonLd";
import { metadata as makeMetadata } from "@/lib/seo";
export const metadata = makeMetadata(
  "개인정보처리방침",
  "데모 상담 폼의 개인정보 미전송 안내 및 실제 접수 서비스 연결 전 확인할 사항.",
  "/privacy",
);
export default function Privacy() {
  return (
    <>
      <PageHero
        title="개인정보처리방침"
        description="현재 홈페이지의 데이터 처리 상태를 안내합니다."
      />
      <BreadcrumbSchema items={[{ name: "개인정보처리방침", path: "/privacy" }]} />
      <section className="content-section">
        <div className="container narrow prose">
          <p className="legal-note">
            시안 안내 · 실제 접수 기능 도입 전 운영자가 확정해야 하는 문서입니다. 확정된 법률 검토
            문서가 아닙니다.
          </p>
          <h2>1. 현재 데모 폼의 처리 방식</h2>
          <p>
            상담 폼은 입력 형식 확인 기능만 제공합니다. 입력 내용은 페이지의 메모리에서만 처리되며,
            학원 서버로 전송하거나 브라우저 저장소에 저장하지 않습니다. 입력 확인은 상담 접수를
            의미하지 않습니다.
          </p>
          <h2>2. 입력 항목과 사용 목적</h2>
          <p>
            화면에는 보호자 성함, 연락처, 학생 연령 또는 학년, 바둑 경험, 희망 상담 방식, 희망 시간,
            문의 내용, 동의 여부 항목이 있습니다. 현재 목적은 폼 검증 시연이며 실제 개인정보 대신
            테스트 내용을 사용해 주세요.
          </p>
          <h2>3. 동의와 이용</h2>
          <p>
            동의하지 않아도 홈페이지의 안내 콘텐츠를 열람할 수 있습니다. 데모 폼의 입력 확인을
            진행하려면 화면의 개인정보 안내 확인 항목을 선택해야 합니다. 이 동의는 향후 실제 서비스
            수집에 대한 동의로 재사용하지 않습니다.
          </p>
          <h2>4. 외부 리소스 및 호스팅</h2>
          <p>
            글꼴 제공 서비스와 호스팅 서비스는 페이지 요청 시 IP 주소와 브라우저 정보를 처리할 수
            있습니다. 상담 입력 내용은 해당 요청에 포함하지 않습니다. 서비스 제공자의 처리 조건은
            실제 운영 환경 확정 시 안내해야 합니다.
          </p>
          <h2>5. 실제 서비스 연결 전 확정 사항</h2>
          <p>
            개인정보처리자와 담당자 연락처, 수집 목적 및 항목, 보유 기간과 파기 절차, 위탁 또는
            제3자 제공 여부, 정보주체 권리 행사 방법을 확정한 후 안내문과 동의 항목을 갱신해야
            합니다. 현재 관련 담당 정보는 입력 예정입니다.
          </p>
        </div>
      </section>
    </>
  );
}
