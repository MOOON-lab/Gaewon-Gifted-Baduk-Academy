"use client";
import Link from "next/link";
import { useState } from "react";
import type { FormEvent } from "react";
type FieldName =
  | "guardian"
  | "phone"
  | "age"
  | "experience"
  | "method"
  | "time"
  | "message"
  | "consent";
export default function ContactForm() {
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setResult("");
    const form = event.currentTarget;
    const data = new FormData(form);
    const next: Partial<Record<FieldName, string>> = {};
    const value = (key: FieldName) => String(data.get(key) || "").trim();
    if (value("guardian").length < 2) next.guardian = "보호자 성함을 2자 이상 입력해 주세요.";
    const phone = value("phone").replace(/[\s-]/g, "");
    if (!/^(01[016789]\d{7,8}|02\d{7,8}|0[3-6][1-5]\d{7,8})$/.test(phone))
      next.phone = "연락 가능한 전화번호를 정확히 입력해 주세요.";
    if (!value("age")) next.age = "학생의 연령 또는 학년을 입력해 주세요.";
    if (!value("experience")) next.experience = "바둑 경험을 선택해 주세요.";
    if (!value("method")) next.method = "희망 상담 방식을 선택해 주세요.";
    if (!data.get("consent")) next.consent = "개인정보 수집 안내를 확인하고 동의해 주세요.";
    setErrors(next);
    if (Object.keys(next).length) {
      const first = form.elements.namedItem(Object.keys(next)[0]);
      if (first instanceof HTMLElement) first.focus();
      return;
    }
    setBusy(true);
    // DEMO ONLY: validation delay, no fetch, no storage, no personal information transmission.
    // Live integration: replace this block with POST /api/inquiries, repeat validation on server,
    // require verified consent policy and only show a receipt after server-confirmed persistence.
    await new Promise((resolve) => setTimeout(resolve, 650));
    setBusy(false);
    setResult(
      "입력 확인이 완료되었습니다. 현재 데모 모드로, 상담 신청은 접수되지 않았으며 입력 내용은 서버로 전송되거나 저장되지 않았습니다.",
    );
  }
  const props = (name: FieldName) => ({
    id: name,
    name,
    "aria-invalid": !!errors[name],
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });
  const error = (name: FieldName) =>
    errors[name] ? (
      <p className="field-error" id={`${name}-error`}>
        {errors[name]}
      </p>
    ) : null;
  return (
    <form
      className="card form-card"
      noValidate
      onSubmit={submit}
      onInput={() => {
        if (result) setResult("");
      }}
      aria-label="무료 체험수업 상담 데모 폼"
      aria-busy={busy}
    >
      <h2 style={{ fontSize: 26, marginBottom: 10 }}>무료 체험수업 상담</h2>
      <p style={{ fontSize: 14, marginBottom: 24 }}>
        별표(*) 항목은 필수입니다. 실제 개인정보 대신 테스트 내용으로 확인해 주세요.
      </p>
      <div className="form-grid">
        <div className="field">
          <label htmlFor="guardian">
            보호자 성함 <span className="required">*</span>
          </label>
          <input
            {...props("guardian")}
            required
            autoComplete="name"
            maxLength={40}
            placeholder="성함을 입력해 주세요"
          />
          {error("guardian")}
        </div>
        <div className="field">
          <label htmlFor="phone">
            연락처 <span className="required">*</span>
          </label>
          <input
            {...props("phone")}
            type="tel"
            required
            autoComplete="tel"
            maxLength={20}
            placeholder="숫자 또는 하이픈 포함"
          />
          {error("phone")}
        </div>
        <div className="field">
          <label htmlFor="age">
            학생 연령 또는 학년 <span className="required">*</span>
          </label>
          <input {...props("age")} required maxLength={30} placeholder="예: 7세, 초등 2학년" />
          {error("age")}
        </div>
        <div className="field">
          <label htmlFor="experience">
            바둑 경험 <span className="required">*</span>
          </label>
          <select {...props("experience")} required defaultValue="">
            <option value="" disabled>
              선택해 주세요
            </option>
            <option>처음이에요</option>
            <option>기본 규칙을 알아요</option>
            <option>대국 경험이 있어요</option>
            <option>잘 모르겠어요</option>
          </select>
          {error("experience")}
        </div>
        <div className="field">
          <label htmlFor="method">
            희망 상담 방식 <span className="required">*</span>
          </label>
          <select {...props("method")} required defaultValue="">
            <option value="" disabled>
              선택해 주세요
            </option>
            <option>전화 상담</option>
            <option>방문 상담</option>
          </select>
          {error("method")}
        </div>
        <div className="field">
          <label htmlFor="time">희망 수업 시간</label>
          <input
            {...props("time")}
            maxLength={80}
            placeholder="가능한 요일과 시간대를 알려주세요"
          />
        </div>
        <div className="field full">
          <label htmlFor="message">문의 내용</label>
          <textarea
            {...props("message")}
            rows={5}
            maxLength={1500}
            placeholder="아이의 관심이나 궁금한 점을 편하게 남겨주세요."
          />
        </div>
      </div>
      <label className="consent" htmlFor="consent">
        <input {...props("consent")} type="checkbox" required />
        <span>
          <Link href="/privacy" target="_blank" rel="noopener">
            개인정보 수집 안내 (새 창)
          </Link>
          를 확인하고 동의합니다. <span className="required">*</span>
        </span>
      </label>
      {error("consent")}
      <div aria-live="polite" aria-atomic="true">
        {result && (
          <p className="form-result" role="status">
            {result}
          </p>
        )}
      </div>
      <button className="button primary" type="submit" disabled={busy}>
        {busy ? "입력 내용을 확인하고 있어요…" : "입력 내용 확인하기 (데모)"}
      </button>
      <p className="data-note">
        현재 실제 신청은 접수되지 않습니다. 접수 서비스 연결 후 이용할 수 있습니다.
      </p>
    </form>
  );
}
