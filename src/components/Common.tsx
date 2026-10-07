import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Brain,
  Lightbulb,
  Settings,
  Handshake,
  Sprout,
  UsersRound,
  BookOpen,
  Heart,
  Phone,
  MessageCircle,
  ChevronRight,
} from "lucide-react";
import type { ReactNode } from "react";
import { benefits, navigation, programs, site, stories } from "@/data/site";
import { articles } from "@/data/articles";
import { Logo } from "./Header";

export function Button({
  href = "/contact",
  children = "상담문의",
  secondary = false,
}: {
  href?: string;
  children?: ReactNode;
  secondary?: boolean;
}) {
  return (
    <Link href={href} className={`button ${secondary ? "secondary" : "primary"}`}>
      {children}
      <ChevronRight size={18} aria-hidden="true" />
    </Link>
  );
}
export function SectionHeading({
  title,
  description,
  eyebrow,
}: {
  title: string;
  description?: string;
  eyebrow?: string;
}) {
  return (
    <div className="section-heading">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
export function Photo({
  className = "",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <figure className={`photo ${className}`}>
      <Image
        src={site.heroImage}
        alt="선생님과 어린이가 바둑을 함께 두는 AI 교육 장면 예시"
        width={1536}
        height={1024}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
      />
      <figcaption>AI 교육 장면 예시</figcaption>
    </figure>
  );
}
export function ValueStrip() {
  const values = [
    { icon: Sprout, first: "바둑으로 키우는", second: "더 큰 내일" },
    { icon: UsersRound, first: "아이 한 사람을 위한", second: "맞춤 지도" },
    { icon: BookOpen, first: "생각하는 힘을 기르는", second: "체계적인 교육" },
    { icon: Heart, first: "바른 인성과", second: "건강한 성장" },
  ];
  return (
    <section className="value-strip" aria-label="학원의 핵심 가치">
      <div className="container value-grid">
        {values.map(({ icon: Icon, first, second }) => (
          <div key={second}>
            <Icon size={40} strokeWidth={1.6} aria-hidden="true" />
            <p>
              {first}
              <strong>{second}</strong>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
export function Benefits() {
  const icons = [Brain, Lightbulb, Settings, Handshake];
  return (
    <div className="grid four">
      {benefits.map((benefit, i) => {
        const Icon = icons[i];
        return (
          <Link
            className="benefit-card card"
            href={`/research/${benefit.slug}`}
            key={benefit.title}
          >
            <Icon size={48} strokeWidth={1.35} aria-hidden="true" />
            <h3>{benefit.title}</h3>
            <p>{benefit.text}</p>
            <span className="card-link">
              교육 이야기 읽기 <ArrowRight size={16} />
            </span>
          </Link>
        );
      })}
    </div>
  );
}
export function ProgramCard({
  program,
  index,
}: {
  program: (typeof programs)[number];
  index: number;
}) {
  return (
    <Link className="program-card card" href={`/programs/${program.slug}`}>
      <div
        className={`course-photo course-${index}`}
        role="img"
        aria-label={`${program.name} 바둑 수업 AI 예시 이미지`}
        style={{ backgroundImage: `url(${site.courseImage})` }}
      >
        <span>AI 예시 이미지</span>
      </div>
      <div className="program-body">
        <span className="program-level">{program.level}</span>
        <h3>
          {program.name} <small>({program.audience})</small>
        </h3>
        <p>{program.summary}</p>
        <span className="card-link">
          자세히 보기 <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}
export function StoryCards() {
  return (
    <div className="grid three">
      {stories.map((story, i) => (
        <Link href="/stories" className="story-card card" key={i}>
          <span className="story-icon">
            <MessageCircle size={28} strokeWidth={1.3} />
          </span>
          <div>
            <small>{story.category}</small>
            <h3>{story.title}</h3>
            <p>{story.text}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
export function ArticleCard({ article }: { article: (typeof articles)[number] }) {
  return (
    <Link href={`/research/${article.slug}`} className="article-card card">
      <div className="article-photo">
        <Image
          src={article.image}
          alt="바둑 교육 장면 예시"
          width={480}
          height={320}
          style={{ objectPosition: article.imagePosition }}
        />
      </div>
      <div>
        <span className="category">{article.category} · 예시 글</span>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <time dateTime={article.date}>{article.date.replaceAll("-", ".")}</time>
      </div>
    </Link>
  );
}
export function CTASection() {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div>
          <p className="eyebrow">아이의 첫 한 수, 함께 시작해요</p>
          <h2>궁금한 점은 상담으로 안내해 드립니다</h2>
          <p>아이의 가능성, 바둑이 함께합니다.</p>
        </div>
        <Button>상담 신청</Button>
      </div>
    </section>
  );
}
export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="breadcrumbs" aria-label="현재 위치">
      <Link href="/">홈</Link>
      {items.map((item, i) => (
        <span key={i}>
          <ChevronRight size={13} aria-hidden="true" />
          {item.href ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            <span aria-current="page">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
export function PageHero({
  title,
  description,
  eyebrow,
  parent,
}: {
  title: string;
  description: string;
  eyebrow?: string;
  parent?: { label: string; href: string };
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <Breadcrumbs items={[...(parent ? [parent] : []), { label: title }]} />
        {eyebrow && <p className="eyebrow">{eyebrow}</p>}
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
export function FAQAccordion({ items }: { items: { question: string; answer: string }[] }) {
  return (
    <div className="faq-list">
      {items.map((item) => (
        <details key={item.question}>
          <summary>
            <span>Q.</span>
            {item.question}
            <span className="faq-plus" aria-hidden="true">
              +
            </span>
          </summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
export function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="footer-main">
            <Logo />
            <nav aria-label="푸터 메뉴">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
              <Link href="/faq">자주 묻는 질문</Link>
            </nav>
            <div className="footer-contact">
              <strong>
                <Phone size={18} /> 상담문의
              </strong>
              <p>전화번호: {site.phone || "정보 입력 예정"}</p>
              <p>주소: {site.address || "정보 입력 예정"}</p>
              <p>운영시간: {site.hours || "정보 입력 예정"}</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} {site.name}. All rights reserved.
            </p>
            <div>
              <Link href="/privacy">개인정보처리방침</Link>
              <Link href="/terms">이용약관</Link>
            </div>
          </div>
        </div>
      </footer>
      <div className="mobile-contact-bar">
        {site.phone ? (
          <a href={`tel:${site.phone}`}>
            <Phone size={18} /> 전화상담
          </a>
        ) : (
          <Link href="/contact#contact-info">
            <Phone size={18} /> 전화상담 안내
          </Link>
        )}
        <Link href="/contact">
          상담문의 <ArrowRight size={17} />
        </Link>
      </div>
    </>
  );
}
