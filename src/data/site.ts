export const site = {
  name: "개원영재바둑교습소",
  tagline: "생각하는 아이, 더 큰 내일",
  url: "https://개원영재바둑.com",
  phone: "",
  address: "",
  hours: "",
  sns: [] as { label: string; url: string }[],
  heroImage: "/images/classroom.png",
  courseImage: "/images/programs.png",
  imageNote: "AI로 제작한 교육 장면 예시이며, 실제 학원·선생님·학생 사진이 아닙니다.",
};
export const navigation = [
  { href: "/about", label: "학원소개" },
  { href: "/programs", label: "교육과정" },
  { href: "/teacher", label: "김상순 선생님" },
  { href: "/stories", label: "성장사례" },
  { href: "/research", label: "바둑교육 연구소" },
  { href: "/contact", label: "상담문의" },
];
export const teacher = {
  name: "김상순",
  intro: "아이의 눈높이에서, 바둑을 통해 더 큰 세상을 만나도록 돕습니다.",
  philosophy: "정답을 알려주기 전에, 아이의 생각을 먼저 듣겠습니다.",
  description:
    "한 수를 고르는 이유를 함께 이야기하고, 스스로 답을 찾는 시간을 소중하게 생각합니다. 결과만큼 생각하는 과정에 귀 기울이는 교육을 지향합니다.",
  placeholder: true,
  careerEnabled: false,
  careers: [] as string[],
  awardsEnabled: false,
  awards: [] as string[],
  careerPlaceholder: "경력 자료 입력 예정",
  message:
    "아이마다 배우는 속도와 관심은 다릅니다. 첫 바둑돌을 놓는 순간부터 자신의 생각을 말하는 순간까지, 한 걸음씩 함께하겠습니다.",
};
export const benefits = [
  {
    icon: "brain",
    title: "집중력",
    text: "한 수를 고민하는 과정에서 눈앞의 문제에 차분히 머무르는 연습을 합니다.",
    slug: "power-of-focus",
  },
  {
    icon: "lightbulb",
    title: "사고력",
    text: "다양한 경우를 생각하며 나만의 이유를 찾고, 다음 수를 그려봅니다.",
    slug: "five-gifts",
  },
  {
    icon: "settings",
    title: "문제해결력",
    text: "스스로 해답을 찾아가는 과정에서 새로운 방법을 시도합니다.",
    slug: "five-gifts",
  },
  {
    icon: "handshake",
    title: "인성과 예절",
    text: "상대를 존중하고 차례를 기다리며, 승패를 받아들이는 태도를 배웁니다.",
    slug: "first-baduk",
  },
];
export const programs = [
  {
    slug: "kindergarten",
    name: "유치부",
    audience: "5~7세",
    level: "즐거운 첫 만남",
    summary: "바둑을 처음 만나는 아이도 쉽고 재미있게",
    goal: "놀이를 통해 바둑과 친해지고, 차례를 기다리는 습관을 익힙니다.",
    topics: ["흑돌·백돌과 바둑판 알아보기", "돌 놓기와 차례 지키기", "돌의 활로를 찾는 놀이"],
    method: "짧은 설명과 손으로 해보는 놀이를 번갈아 진행하는 수업을 제안합니다.",
    changes: "바둑판 앞에 앉는 즐거움, 내 차례를 기다리는 경험을 쌓습니다.",
    recommend: "바둑이 처음이고 놀이 중심의 접근이 필요한 아이",
    imagePosition: "top-left",
  },
  {
    slug: "elementary-beginner",
    name: "초등 입문반",
    audience: "1~2학년",
    level: "기초를 탄탄하게",
    summary: "바둑의 기초를 차근차근, 생각하는 습관부터",
    goal: "기본 규칙을 이해하고 스스로 한 판을 두는 경험을 만듭니다.",
    topics: ["활로와 돌 따내기", "단수·연결·끊기", "작은 바둑판에서 대국하기"],
    method: "규칙 설명, 예제 풀이, 짧은 대국, 생각 나누기의 순서로 배웁니다.",
    changes: "규칙을 지키며 자신의 선택을 말하는 연습을 합니다.",
    recommend: "바둑 규칙을 처음 배우거나 기초를 정리하고 싶은 아이",
    imagePosition: "top-right",
  },
  {
    slug: "elementary-intermediate",
    name: "초등 중급반",
    audience: "3~4학년",
    level: "생각을 더 깊게",
    summary: "여러 수를 비교하며 나만의 판단을 만드는 시간",
    goal: "여러 선택을 비교하고, 선택한 이유를 설명하는 힘을 기릅니다.",
    topics: ["기초 사활과 수 읽기", "돌의 연결과 모양", "대국 복기와 선택 비교"],
    method: "수준별 문제를 풀고 대국에서 적용한 뒤, 복기로 다른 선택을 살펴봅니다.",
    changes: "성급하게 돌을 놓기 전에 한 번 더 생각하는 연습을 합니다.",
    recommend: "기본 규칙을 알고 대국 경험이 있는 아이",
    imagePosition: "bottom-left",
  },
  {
    slug: "advanced",
    name: "초등 고급반",
    audience: "5학년 이상",
    level: "넓게 보고 깊게 생각하기",
    summary: "전략적 사고와 실전 감각을 키우는 심화 수업",
    goal: "전체 판을 살피며 계획을 세우고 자신의 대국을 돌아봅니다.",
    topics: ["포석과 중반 운영", "사활·맥과 끝내기", "실전 대국과 자기 복기"],
    method: "개별 과제를 확인하고 실전 대국의 판단 과정을 함께 분석합니다.",
    changes: "자신의 선택을 검토하고 다음 목표를 정하는 경험을 쌓습니다.",
    recommend: "꾸준한 대국 경험을 바탕으로 심화 학습을 원하는 아이",
    imagePosition: "bottom-right",
  },
];
export const programNotice =
  "연령·학년과 교육 내용은 임시 안내입니다. 실제 반 편성은 학생의 경험과 수준을 확인한 후 상담으로 안내합니다.";
export const stories = [
  {
    title: "실제 학부모 후기 등록 예정",
    category: "학부모의 이야기",
    text: "학부모님의 동의를 받은 후, 아이의 배움과 변화를 전하겠습니다.",
  },
  {
    title: "학생 성장사례 자료 등록 예정",
    category: "생각이 자라는 순간",
    text: "아이의 수업 과정과 변화를 확인할 수 있는 자료를 준비하고 있습니다.",
  },
  {
    title: "실제 학부모 후기 등록 예정",
    category: "함께하는 성장",
    text: "확인된 실제 이야기만 차근차근 소개하겠습니다.",
  },
];
export const faqs = [
  {
    question: "바둑을 전혀 몰라도 시작할 수 있나요?",
    answer:
      "처음 접하는 학생을 위한 입문 과정을 안내합니다. 학생의 연령과 바둑 경험을 상담 시 알려주시면 적합한 시작 방법을 함께 찾을 수 있습니다.",
  },
  {
    question: "학년만으로 반이 정해지나요?",
    answer:
      "학년은 참고 기준입니다. 규칙 이해도와 대국 경험, 학습 속도 등을 확인해 적합한 과정을 상담합니다. 현재 게시된 연령 기준은 임시 안내입니다.",
  },
  {
    question: "수강료와 수업 시간표가 궁금해요.",
    answer:
      "수강료와 시간표는 상담 문의로 안내할 예정입니다. 확정된 정보가 등록되면 홈페이지에도 안내하겠습니다.",
  },
  {
    question: "무료 체험수업은 어떻게 신청하나요?",
    answer:
      "상담문의 페이지에서 신청 항목을 확인하실 수 있습니다. 현재는 데모 화면으로 실제 접수되지 않으며, 접수 서비스 연결 후 신청을 받을 예정입니다.",
  },
  {
    question: "대회에 반드시 참가해야 하나요?",
    answer:
      "대회 운영과 참가 기준은 확정 안내가 준비 중입니다. 아이의 관심과 학습 목표에 맞춰 상담해 주세요.",
  },
  {
    question: "학원 위치와 운영시간은 어디서 확인하나요?",
    answer:
      "주소, 전화번호, 운영시간은 정보 입력 예정입니다. 실제 정보가 확인되면 학원소개와 상담문의 페이지에 반영됩니다.",
  },
];
