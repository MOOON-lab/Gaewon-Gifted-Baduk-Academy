"use client";
import { useRef, useState } from "react";
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
  const lock = useRef(false);
  const operator = process.env.NEXT_PUBLIC_CONSULTATION_OPERATOR || "";
  const privacyContact = process.env.NEXT_PUBLIC_CONSULTATION_PRIVACY_CONTACT || "";
  const retention = process.env.NEXT_PUBLIC_CONSULTATION_RETENTION || "";
  const ready = !!(operator && privacyContact && retention && process.env.NEXT_PUBLIC_CONSULTATION_ENABLED === "true");
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState<Partial<Record<FieldName, string>>>({});
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState("");
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (lock.current) return;
    setResult("");
    setSubmitError("");
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
    if (!ready) {
      setSubmitError("개인정보 수집 안내가 확정되지 않아 온라인 접수를 아직 받지 않습니다. 전화 02-579-9714로 문의해 주세요. 입력 내용은 전송되지 않았습니다.");
      return;
    }
    if (data.get("bot-field")) {
      setSubmitError("자동 입력으로 판단되어 접수하지 않았습니다. 전화로 문의해 주세요.");
      return;
    }
    lock.current = true;
    setBusy(true);
    try {
      const payload = new URLSearchParams();
      data.forEach((value, key) => payload.append(key, String(value)));
      const response = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload.toString(),
        signal: AbortSignal.timeout(20000),
      });
      if (!response.ok) throw new Error("SUBMISSION_FAILED");
      setResult("상담 신청이 전송되었습니다. 확인 후 남겨주신 연락처로 안내드리겠습니다.");
      form.reset();
    } catch {
      setSubmitError("접수 완료를 확인하지 못했습니다. 입력 내용은 유지됩니다. 중복 접수가 걱정되시면 02-579-9714로 문의해 주세요.");
    } finally {
      lock.current = false;
      setBusy(false);
    }
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
      name="consultation"
      method="POST"
      action="/__forms.html"
      data-netlify-honeypot="bot-field"
      className="card form-card"
      noValidate
      onSubmit={submit}
      onInput={() => {
        if (result) setResult("");
      }}
      aria-label="상담 신청 폼"
      aria-busy={busy}
    >
      <input type="hidden" name="form-name" value="consultation" />
      <input type="hidden" name="consent-policy" value={ready ? `처리자: ${operator}; 목적: 상담 접수 및 연락; 보유 기간: ${retention}; 문의: ${privacyContact}` : "미확정"} />
      <p hidden aria-hidden="true"><label>자동입력 방지<input name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
      <h2 style={{ fontSize: 26, marginBottom: 10 }}>무료 체험수업 상담</h2>
      <p style={{ fontSize: 14, marginBottom: 24 }}>
        별표(*) 항목은 필수입니다. 수업과 입학에 관한 문의를 남겨 주세요.
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
      <p className="data-note">
        {ready ? `개인정보처리자: ${operator}. 수집 목적: 상담 접수 및 연락. 수집 항목: 보호자 성함, 연락처, 학생 연령·학년, 바둑 경험, 상담 방식, 선택 입력한 희망 시간·문의 내용, 동의 여부. 보유 기간: ${retention}. 문의: ${privacyContact}. 제출 내용은 Netlify Forms에 전송·저장되며 교습소 관리자가 확인합니다. 동의를 거부할 수 있으나 온라인 상담 접수는 제한됩니다.` : "개인정보 수집 안내를 확정 중이므로 온라인 제출은 아직 열리지 않았습니다. 입력은 가능하며 전화 02-579-9714로 문의해 주세요."}
      </p>
      <label className="consent" htmlFor="consent">
        <input {...props("consent")} type="checkbox" value="동의" required />
        <span>
          위 개인정보 수집·이용 안내를 확인하고 동의합니다. <span className="required">*</span>
        </span>
      </label>
      {error("consent")}
      <div aria-live="polite" aria-atomic="true">
        {submitError && <p className="field-error" role="alert">{submitError}</p>}
        {result && (
          <p className="form-result" role="status">
            {result}
          </p>
        )}
      </div>
      <button className="button primary" type="submit" disabled={busy || !ready}>
        {busy ? "접수 중…" : "상담 신청하기"}
      </button>
      <p className="data-note">
        {ready ? "신청 후 안내 메시지를 확인해 주세요." : "개인정보 안내 확정 전에는 입력 내용이 전송되지 않습니다."}
      </p>
    </form>
  );
}

