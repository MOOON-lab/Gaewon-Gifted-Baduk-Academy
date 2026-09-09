import type { MetadataRoute } from "next";
import { site, programs } from "@/data/site";
import { articles } from "@/data/articles";
export const dynamic = "force-static";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "",
    "/about",
    "/programs",
    "/teacher",
    "/stories",
    "/research",
    "/faq",
    "/contact",
    "/privacy",
    "/terms",
    ...programs.map((p) => `/programs/${p.slug}`),
    ...articles.map((a) => `/research/${a.slug}`),
  ].map((path) => ({
    url: site.url + path + "/",
    changeFrequency: "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}
