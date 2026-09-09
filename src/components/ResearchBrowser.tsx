"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import { articles, categories } from "@/data/articles";
import { ArticleCard } from "./Common";
export default function ResearchBrowser() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("전체");
  const filtered = articles.filter(
    (article) =>
      (category === "전체" || category === article.category) &&
      `${article.title} ${article.description} ${article.sections.map((s) => s.body).join(" ")}`
        .toLocaleLowerCase()
        .includes(query.trim().toLocaleLowerCase()),
  );
  return (
    <>
      <h2 className="sr-only">연구소 글 목록</h2>
      <label htmlFor="article-search" className="text-link">
        궁금한 바둑 이야기를 찾아보세요
      </label>
      <div className="search-field">
        <input
          id="article-search"
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="제목이나 내용으로 검색"
        />
        <Search size={20} aria-hidden="true" />
      </div>
      <div className="filter-bar" role="group" aria-label="글 카테고리">
        {["전체", ...categories].map((item) => (
          <button key={item} aria-pressed={category === item} onClick={() => setCategory(item)}>
            {item}
          </button>
        ))}
      </div>
      <p className="data-note" role="status" style={{ marginBottom: 20 }}>
        총 {filtered.length}개의 글
      </p>
      {filtered.length ? (
        <div className="grid three article-list">
          {filtered.map((article) => (
            <ArticleCard article={article} key={article.slug} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <Search size={32} />
          <h3>해당하는 글이 아직 없습니다</h3>
          <p>다른 검색어나 카테고리를 선택해 주세요.</p>
          <button
            className="button secondary"
            style={{ marginTop: 20 }}
            onClick={() => {
              setCategory("전체");
              setQuery("");
            }}
          >
            전체 글 보기
          </button>
        </div>
      )}
    </>
  );
}
