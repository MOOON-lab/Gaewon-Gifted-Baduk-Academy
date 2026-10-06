# 개원영재바둑교습소 홈페이지

첨부 목업의 네이비·아이보리 색감과 섹션 구성을 실제 HTML/CSS로 구현한 한국어 멀티페이지 홈페이지입니다. Next.js App Router + TypeScript + Tailwind CSS를 사용하며 정적 파일로 배포합니다.

## 실행

Node.js 22 이상, pnpm을 사용합니다.

```sh
pnpm install
pnpm dev
```

개발 주소는 실행 로그의 Local URL을 사용합니다. 기본 주소는 http://localhost:3000 입니다.

```sh
pnpm lint
pnpm typecheck
pnpm build
python scripts/verify_site.py
```

빌드 결과는 `out/`에 생성됩니다. `output: 'export'` 프로젝트이므로 `next start` 대신 정적 서버로 `out/`을 서비스합니다. 예: `python -m http.server 3000 --directory out`. GitHub/Vercel 배포는 `DEPLOY-GITHUB-VERCEL.md`를 참고하세요. 위 Python 검수 스크립트는 표준 라이브러리만 사용합니다.

## 구조

```text
src/app/                 독립 URL, 레이아웃, 공통 스타일, SEO 경로
src/components/          헤더, 카드, 폼, 검색, FAQ, 구조화 데이터
src/data/site.ts         학원·선생님·과정·후기·FAQ
src/data/articles.ts     연구소 글 제목·날짜·분류·요약·본문
src/lib/seo.ts           공통 페이지 메타데이터 생성
public/images/          교체 가능한 AI 예시 사진
qa/                     스크린샷과 검수 결과
scripts/verify_site.py   정적 결과물 경로·링크·메타데이터 검수
Concept.md              목적, 고객, 사이트맵, 페이지별 전환 목표
Design.md               디자인 토큰과 반응형 규칙
ToDo.md                 완료 상태
```

## 콘텐츠 수정 위치

| 내용 | 파일 / 설정 |
| --- | --- |
| 학원명·연락처·주소·시간·SNS | `src/data/site.ts`의 `site` |
| 실제 도메인·canonical·사이트맵 | `site.url` 수정 후 재빌드 |
| 김상순 선생님 소개 | `teacher` 객체. 확인 후 placeholder 안내 문구 갱신 |
| 경력·수상 | `teacher.careers`, `teacher.awards` 입력 후 각각 `careerEnabled`, `awardsEnabled` 활성화 |
| 과정 대상·내용·추천 기준 | `programs` 배열. `programNotice`도 확정 내용에 맞춰 수정 |
| 실제 후기 | `stories` 배열. 학생·학부모의 공개 동의와 원문 확인 후 교체 |
| 성장사례 상세·대회 기록 | `/stories/page.tsx` 빈 상태 섹션을 검증된 데이터와 연결 |
| FAQ | `faqs` 배열. 화면과 FAQPage 스키마에 함께 반영 |
| 연구소 글 | `articles.ts`에 고유 slug의 객체 추가. `sections`에 제목·본문 추가 후 빌드하면 상세 URL 자동 생성 |
| 색상·크기·여백 | `src/app/globals.css` |
| 개인정보·이용약관 | `src/app/privacy/page.tsx`, `src/app/terms/page.tsx` |

연구소는 MDX 실행 환경 대신 TypeScript 데이터로 관리합니다. 현재 본문은 제목과 문단 배열이며, 검색은 제목·요약·본문을 함께 조회합니다. 운영자가 수정 후 빌드하는 방식으로, 관리자 CMS는 포함하지 않습니다.

## 이미지 교체

- `public/images/classroom.png`: AI 제작 교육 장면 예시. 히어로·소개·연구소에서 사용하며 실제 김상순 선생님 사진이 아닙니다.
- `public/images/programs.png`: 네 과정의 AI 제작 2×2 예시 사진. CSS의 `course-0`~`course-3`이 각 사분면을 표시합니다. 동일 비율로 교체하거나 `ProgramCard`의 이미지 경로를 개별 파일로 연결할 수 있습니다.
- 실제 사진을 사용할 때 `Photo`의 alt/figcaption과 과정의 예시 표시도 함께 수정하세요. 실제 선생님 사진을 전체 예시 사진과 혼동하지 않도록 별도 파일로 관리하는 것을 권장합니다.
- 사진은 2026-09-09 image_gen으로 생성했습니다. 글자나 홈페이지 스크린샷을 통째로 배경에 넣지 않았습니다.
- Google Fonts의 Noto Serif KR을 사용하며 글꼴이 차단되어도 시스템 명조와 고딕 폰트로 표시됩니다.

## 상담 폼과 실제 서비스 연결 지점

현재 **데모 모드**입니다. `src/components/ContactForm.tsx`의 `submit`은 입력 형식을 검사하고 약 650ms 처리 중 상태를 보여준 뒤, **접수되지 않았음**을 명시합니다. 네트워크 요청, 데이터베이스 저장, localStorage 저장을 하지 않습니다.

실제 접수 연결 시:

1. 개인정보 수집 주체·목적·항목·보유 기간·담당자·위탁 내용을 확정하고 개인정보 문서를 갱신합니다.
2. `submit`의 `DEMO ONLY` 주석 블록을 승인된 HTTP 접수 API 호출로 교체합니다.
3. 서버에서도 필수값·전화번호·동의를 검사하고 길이 제한, 요청 빈도 제한, 오류 처리를 구현합니다.
4. 서버에서 저장 또는 접수 확인이 돌아온 경우에만 실제 완료 메시지를 표시합니다. 실패 시 입력을 유지하고 오류와 재시도 방법을 알립니다.
5. Next.js 서버 API를 사용하려면 정적 내보내기를 서버 배포로 전환해야 합니다. 현재 정적 배포를 유지하려면 별도의 승인된 HTTPS API가 필요합니다.

이 프로젝트에는 실제 접수·이메일 발송·결제 기능이 연결되어 있지 않습니다.

## 실제 운영 전 필요한 자료

정확한 전화번호, 주소, 운영시간, 학원 시설 사진, 김상순 선생님 프로필 사진·검증된 경력·활동 이력, 확정 교육과정·수강료·시간표, 공개 동의를 받은 후기·성장사례, 검토 완료된 교육 글, 확정된 개인정보처리방침 및 이용약관, 실제 상담 접수 서비스.

기존 사이트는 공개되어 있습니다. 이 파일 묶음은 GitHub와 Vercel로 옮기기 위한 소스이며, 새 배포의 공개 범위와 도메인은 Vercel에서 설정합니다.

## 검수

`qa/`에 PC·모바일 캡처, 전체 17개 페이지의 모바일 확인 결과, 정적 링크·메타데이터 검사 결과를 기록합니다. 360px/768px/1440px의 레이아웃, 모바일 메뉴·ESC, 검색/카테고리/빈 결과 초기화, 필수 입력/전화번호/동의 검증, 처리 중과 데모 완료 상태를 확인합니다.
