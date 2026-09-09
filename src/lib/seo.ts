import type { Metadata } from "next";
import { site } from "@/data/site";
export function metadata(
  title: string,
  description: string,
  path: string,
  image = site.heroImage,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url: path,
      type: "website",
      locale: "ko_KR",
      siteName: site.name,
      images: [{ url: image, width: 1536, height: 1024, alt: site.imageNote }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
