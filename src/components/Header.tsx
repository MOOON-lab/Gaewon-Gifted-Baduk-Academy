"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navigation, site } from "@/data/site";

export function Logo() {
  return (
    <Link href="/" className="logo" aria-label={`${site.name} 홈`}>
      <span className="logo-mark" aria-hidden="true">
        <i />
        <i />
        <i />
      </span>
      <span>
        <strong>{site.name}</strong>
        <small>{site.tagline}</small>
      </span>
    </Link>
  );
}
export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        button.current?.focus();
      }
    };
    document.addEventListener("keydown", escape);
    return () => document.removeEventListener("keydown", escape);
  }, [open]);
  const active = (href: string) => pathname === href || pathname.startsWith(`${href}/`);
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className="desktop-nav" aria-label="주 메뉴">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={active(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="button primary header-cta" href="/contact">
          상담문의
        </Link>
        <button
          ref={button}
          className="menu-toggle"
          onClick={() => setOpen(!open)}
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="모바일 전체 메뉴"
        hidden={!open}
      >
        {[
          { href: "/", label: "홈" },
          ...navigation,
          { href: "/faq", label: "자주 묻는 질문" },
          { href: "/privacy", label: "개인정보처리방침" },
          { href: "/terms", label: "이용약관" },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setOpen(false)}
            aria-current={pathname === item.href ? "page" : undefined}
          >
            {item.label}
          </Link>
        ))}
        <Link className="button primary" href="/contact" onClick={() => setOpen(false)}>
          상담문의
        </Link>
      </nav>
    </header>
  );
}
