import type { Metadata } from "next";
import { site } from "@/data/site";
export function metadata(
  title: string,
  description: string,
  path: string,
  image = site.heroImage,
): Metadata {
  const seoTitle = path === "/" ? `${site.name} | 생각하는 힘을 키우는 바둑교육` : title;
  return {
    title: path === "/" ? { absolute: seoTitle } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: path === "/" ? seoTitle : `${title} | ${site.name}`,
      description,
      url: path,
      type: "website",
      locale: "ko_KR",
      siteName: site.name,
      images: [{ url: image, width: 1536, height: 1024, alt: site.imageNote }],
    },
    twitter: { card: "summary_large_image", title: seoTitle, description, images: [image] },
  };
}
