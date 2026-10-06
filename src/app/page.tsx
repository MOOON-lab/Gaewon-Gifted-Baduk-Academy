import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  ArticleCard,
  Benefits,
  Button,
  CTASection,
  Photo,
  ProgramCard,
  SectionHeading,
  StoryCards,
  ValueStrip,
} from "@/components/Common";
import { programs, programNotice, teacher } from "@/data/site";
import { articles } from "@/data/articles";
import { metadata as makeMetadata } from "@/lib/seo";
export const metadata = makeMetadata(
  "생각하는 힘을 키우는 바둑교육",
  "아이의 집중력과 사고력을 바둑으로 키웁니다. 개원영재바둑교습소의 교육과정과 무료 체험수업 안내.",
  "/",
);
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">한 수 한 수, 생각이 자라는 곳</p>
            <h1>개원영재바둑교습소</h1>
            <h2>생각하는 힘을 키우는 바둑교육</h2>
            <p className="hero-description">아이의 집중력과 사고력을 바둑으로 키웁니다.</p>
            <div className="button-row">
              <Button />
              <Button href="/programs" secondary>
                교육과정 보기
              </Button>
            </div>
            <p className="hero-quote">
              “한 수를 생각하는 시간이
              <br />
              아이의 하루를 더 깊게 만듭니다.”
            </p>
          </div>
          <Photo priority className="hero-photo" />
        </div>
      </section>
      <ValueStrip />
      <section className="section benefits-section">
        <div className="container">
          <SectionHeading
            title="바둑이 키우는 네 가지 힘"
            description="작은 바둑판 위에서, 오늘의 배움이 내일의 가능성으로 자랍니다."
          />
          <Benefits />
        </div>
      </section>
      <section className="section programs-section">
        <div className="container">
          <SectionHeading
            title="연령과 수준에 맞춘 수업"
            description="아이의 발달 단계에 맞춰, 처음부터 한 걸음씩 함께합니다."
          />
          <div className="grid four">
            {programs.map((p, i) => (
              <ProgramCard key={p.slug} program={p} index={i} />
            ))}
          </div>
          <p className="data-note">{programNotice}</p>
        </div>
      </section>
      <section className="section teacher-section">
        <div className="container teacher-grid">
          <Photo className="teacher-photo" />
          <div className="teacher-copy">
            <p className="eyebrow">아이의 생각을 듣는 선생님</p>
            <h2>김상순 선생님 소개</h2>
            <p>{teacher.intro}</p>
            <div className="teacher-intro card">
              <h3>{teacher.name} 선생님</h3>
              <p>{teacher.description}</p>
              <small>소개 문구는 확인 전 시안입니다. {teacher.careerPlaceholder}</small>
            </div>
            <Link className="text-link" href="/teacher">
              선생님 자세히 알아보기 <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </section>
      <section className="section stories-section">
        <div className="container">
          <SectionHeading
            title="아이들의 성장 이야기"
            description="바둑이 만들어가는 작은 변화, 확인된 실제 이야기로 전하겠습니다."
          />
          <StoryCards />
        </div>
      </section>
      <section className="section research-section">
        <div className="container">
          <div className="section-top">
            <div>
              <h2>바둑교육 연구소</h2>
              <p>바둑과 교육에 대한 이야기를 함께 나눕니다.</p>
            </div>
            <Link href="/research" className="text-link">
              더 많은 글 보기 <ArrowRight size={17} />
            </Link>
          </div>
          <div className="grid three">
            {articles.map((article) => (
              <ArticleCard article={article} key={article.slug} />
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
