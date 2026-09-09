import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { articles } from "@/data/articles";
import { site } from "@/data/site";
import { ArticleCard, Breadcrumbs, CTASection, SectionHeading } from "@/components/Common";
import { BreadcrumbSchema, JsonLd } from "@/components/JsonLd";
import { metadata as makeMetadata } from "@/lib/seo";
export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = articles.find((a) => a.slug === slug);
  if (!a) return {};
  const m = makeMetadata(a.title, a.description, `/research/${slug}`, a.image);
  return {
    ...m,
    openGraph: { ...m.openGraph, type: "article", publishedTime: a.date, modifiedTime: a.date },
  };
}
export default async function Article({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const a = articles.find((a) => a.slug === slug);
  if (!a) notFound();
  return (
    <>
      <article>
        <header className="article-header">
          <div className="container narrow">
            <Breadcrumbs
              items={[{ label: "바둑교육 연구소", href: "/research" }, { label: a.title }]}
            />
            <p className="eyebrow">{a.category}</p>
            <h1>{a.title}</h1>
            <p>{a.description}</p>
            <p className="article-meta" style={{ marginTop: 18 }}>
              <time dateTime={a.date}>{a.date.replaceAll("-", ".")}</time> · 홈페이지 예시 콘텐츠
            </p>
          </div>
        </header>
        <div className="container narrow">
          <figure className="article-cover">
            <Image
              src={a.image}
              alt="바둑을 함께 배우는 AI 교육 장면 예시"
              width={1536}
              height={1024}
              loading="eager"
              style={{ objectPosition: a.imagePosition }}
            />
          </figure>
          <p className="data-note">{site.imageNote}</p>
          <div className="notice">
            학원 검토 전 예시 글입니다. 아래 내용은 일반적인 활동 제안으로, 전문 연구 결과나
            교육효과를 보장하는 자료가 아닙니다.
          </div>
          <div className="prose">
            {a.sections.map((section) => (
              <section key={section.title}>
                <h2>{section.title}</h2>
                <p>{section.body}</p>
              </section>
            ))}
          </div>
          <Link href="/research" className="text-link" style={{ margin: "18px 0 40px" }}>
            ← 연구소 전체 글로 돌아가기
          </Link>
        </div>
      </article>
      <BreadcrumbSchema
        items={[
          { name: "바둑교육 연구소", path: "/research" },
          { name: a.title, path: `/research/${slug}` },
        ]}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: a.title,
          description: a.description,
          datePublished: a.date,
          dateModified: a.date,
          image: site.url + a.image,
          mainEntityOfPage: site.url + `/research/${slug}`,
          articleSection: a.category,
          creativeWorkStatus: "Draft",
          inLanguage: "ko-KR",
        }}
      />
      <section className="content-section tinted">
        <div className="container">
          <SectionHeading title="함께 읽으면 좋은 이야기" />
          <div className="grid two">
            {articles
              .filter((other) => other.slug !== a.slug)
              .map((other) => (
                <ArticleCard article={other} key={other.slug} />
              ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
