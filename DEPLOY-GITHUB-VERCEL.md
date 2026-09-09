# GitHub 업로드와 Vercel 배포

## 1. ZIP 압축 풀기
이 ZIP은 업로드용 소스입니다. ZIP 자체를 GitHub에 올리지 말고 압축을 푼 파일과 폴더를 올려주세요.
저장소 최상위에 package.json, pnpm-lock.yaml, next.config.ts, src/, public/이 있어야 합니다.
.gitignore 같은 숨김 파일도 포함하세요. 기존 게시 사이트의 인증정보나 Git 기록은 포함하지 않았습니다.

## 2. GitHub
새 저장소를 만들고 압축을 푼 내용을 업로드한 뒤 커밋합니다. GitHub Desktop 또는 Git을 사용해 폴더 전체를 게시해도 됩니다.
현재 압축 파일에는 홈페이지 소스, 이미지, 기획·디자인 문서, 콘텐츠 수정 안내, 검수 기록이 포함됩니다.
node_modules, .next, out, .git, .openai, 배포용 tar 파일은 제외했습니다.

## 3. Vercel
Vercel에서 GitHub 저장소를 가져와 프로젝트를 생성합니다.
- Framework Preset: Next.js
- Root Directory: package.json이 있는 폴더 (안내대로 업로드했다면 저장소 루트)
- Build Command: pnpm build
- Install Command: 자동 감지 기본값 사용 (pnpm-lock.yaml 포함)
- Output Directory: Next.js 기본 자동 감지 설정 유지
- Node.js: 22.x 이상 중 프로젝트 의존성을 지원하는 버전

현재 next.config.ts는 output: 'export'로 정적 내보내기를 사용합니다. next build가 out/을 생성합니다.
별도의 외부 API 키나 데이터베이스 연결 없이 화면과 데모 폼을 실행할 수 있습니다.
배포 성공 후 Vercel에서 부여하는 실제 URL을 확인해 주세요. 이 ZIP을 만드는 과정에서는 Vercel에 업로드하거나 배포하지 않았습니다.

## 4. 새 도메인 반영
src/data/site.ts의 site.url은 현재 운영 중인 ChatGPT Sites 주소입니다.
Vercel 주소 또는 사용할 공식 도메인이 확정되면 site.url을 해당 https 주소로 변경하고 다시 배포하세요.
canonical, Open Graph URL, sitemap.xml, robots.txt, 구조화 데이터가 함께 반영됩니다.

## 5. 실제 운영 자료
상담 폼은 입력 검증 데모이며 실제 신청이 전송·접수되지 않습니다.
전화번호·주소·운영시간, 실제 사진·검증된 경력·후기, 확정된 수업 정보와 개인정보 문서는 실제 자료로 교체해야 합니다.
콘텐츠 수정 위치와 실제 접수 연결 지점은 README.md를 확인하세요.

## 검증 범위
원본 프로젝트의 lint, TypeScript 검사와 프로덕션 빌드는 통과했습니다.
17개 페이지, 633개 내부 링크 및 메타데이터 검수를 수행했습니다.
이 ZIP은 해당 소스를 포함하며 압축 무결성과 파일 누락을 검사했습니다. Vercel 실배포 검증은 아직 수행하지 않았습니다.

공식 문서: https://vercel.com/docs/frameworks/full-stack/nextjs
프로젝트 설정: https://vercel.com/docs/project-configuration/project-settings
