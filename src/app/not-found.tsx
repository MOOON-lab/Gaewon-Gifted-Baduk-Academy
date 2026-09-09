import { Button } from "@/components/Common";
export default function NotFound() {
  return (
    <section className="content-section">
      <div className="container empty-state">
        <p className="eyebrow">404</p>
        <h1 style={{ fontSize: 32 }}>페이지를 찾을 수 없습니다</h1>
        <p style={{ margin: "18px auto 25px" }}>
          주소를 다시 확인하거나 홈에서 원하는 안내를 찾아주세요.
        </p>
        <Button href="/">홈으로 돌아가기</Button>
      </div>
    </section>
  );
}
