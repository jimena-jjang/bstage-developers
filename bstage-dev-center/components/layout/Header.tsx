"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, LogIn, Code2, BookOpen, Menu, X, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const apiSdkMenu = [
  {
    label: "API 레퍼런스",
    description: "엔드포인트, 파라미터, 요청·응답 객체를 확인하세요.",
    href: "/docs/reference",
    icon: BookOpen,
  },
  {
    label: "SDK 레퍼런스",
    description: "JavaScript, iOS, Android SDK 가이드를 확인하세요.",
    href: "/docs/sdk",
    icon: Code2,
  },
];

const navLinks = [
  { label: "가이드", href: "/docs/guide" },
  { label: "API & SDK", href: "#", hasDropdown: true },
  { label: "샌드박스", href: "/sandbox" },
  { label: "커뮤니티·지원", href: "/support" },
  { label: "블로그", href: "/blog" },
];

export default function Header() {
  const pathname = usePathname();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const leaveTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function handleMouseEnter() {
    if (leaveTimerRef.current) clearTimeout(leaveTimerRef.current);
    setDropdownOpen(true);
  }

  function handleMouseLeave() {
    leaveTimerRef.current = setTimeout(() => setDropdownOpen(false), 120);
  }

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-[#e8eaed] h-[60px]">
      <div className="max-w-[1280px] mx-auto px-6 h-full flex items-center justify-between gap-8">
        {/* ── 로고 ── */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <div className="flex items-center gap-1.5">
            <div className="w-7 h-7 rounded-[8px] bg-[#0066ff] flex items-center justify-center">
              <span className="text-white font-bold text-[13px] leading-none">b</span>
            </div>
            <span className="font-bold text-[16px] text-[#1a1d27] tracking-tight">b.stage</span>
          </div>
          <div className="h-4 w-px bg-[#e8eaed]" />
          <span className="text-[13px] text-[#6b7280] font-medium">개발자센터</span>
        </Link>

        {/* ── 데스크탑 네비게이션 ── */}
        <nav className="hidden md:flex items-center gap-1 flex-1" aria-label="글로벌 네비게이션">
          {navLinks.map((link) => {
            const isActive =
              link.href !== "#" &&
              (pathname === link.href || pathname.startsWith(link.href + "/"));
            const isApiSdk = link.hasDropdown;

            if (isApiSdk) {
              return (
                <div
                  key={link.label}
                  ref={dropdownRef}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  className="relative"
                >
                  <button
                    className={`flex items-center gap-0.5 px-3 py-2 rounded-[6px] text-[14px] font-medium transition-colors ${
                      dropdownOpen || pathname.startsWith("/docs/reference") || pathname.startsWith("/docs/sdk")
                        ? "text-[#0066ff] bg-[#eef2ff]"
                        : "text-[#6b7280] hover:text-[#1a1d27] hover:bg-[#f7f8fa]"
                    }`}
                    aria-haspopup="true"
                    aria-expanded={dropdownOpen}
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                  >
                    {link.label}
                  </button>

                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        className="absolute top-full left-0 mt-2 bg-white rounded-[12px] shadow-[0_8px_32px_rgba(0,0,0,0.14)] border border-[#e8eaed] min-w-[280px] p-2 z-50"
                        role="menu"
                      >
                        {apiSdkMenu.map((item) => {
                          const Icon = item.icon;
                          return (
                            <Link
                              key={item.href}
                              href={item.href}
                              role="menuitem"
                              onClick={() => setDropdownOpen(false)}
                              className="flex items-start gap-3 px-4 py-3 rounded-[8px] hover:bg-[#f7f8fa] transition-colors group"
                            >
                              <div className="w-9 h-9 rounded-[8px] bg-[#eef2ff] flex items-center justify-center flex-shrink-0 mt-0.5">
                                <Icon className="w-4 h-4 text-[#0066ff]" />
                              </div>
                              <div>
                                <p className="text-[14px] font-semibold text-[#1a1d27] group-hover:text-[#0066ff] transition-colors flex items-center gap-1">
                                  {item.label}
                                  <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </p>
                                <p className="text-[12px] text-[#6b7280] mt-0.5 leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                            </Link>
                          );
                        })}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link
                key={link.label}
                href={link.href}
                className={`px-3 py-2 rounded-[6px] text-[14px] font-medium transition-colors ${
                  isActive
                    ? "text-[#0066ff] bg-[#eef2ff]"
                    : "text-[#6b7280] hover:text-[#1a1d27] hover:bg-[#f7f8fa]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* ── 우측 액션 ── */}
        <div className="flex items-center gap-2">
          <button
            className="w-9 h-9 flex items-center justify-center rounded-[8px] text-[#6b7280] hover:bg-[#f7f8fa] hover:text-[#1a1d27] transition-colors"
            aria-label="검색"
          >
            <Search className="w-4.5 h-4.5" />
          </button>
          <Link
            href="/login"
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-[8px] bg-[#0066ff] text-white text-[13px] font-semibold hover:bg-[#0047b3] transition-colors"
          >
            <LogIn className="w-3.5 h-3.5" />
            로그인
          </Link>

          {/* 모바일 햄버거 */}
          <button
            className="md:hidden w-9 h-9 flex items-center justify-center rounded-[8px] text-[#6b7280] hover:bg-[#f7f8fa] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "메뉴 닫기" : "메뉴 열기"}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── 모바일 네비게이션 드로어 ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-[60px] bg-black/40 z-40 md:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="fixed right-0 top-[60px] bottom-0 w-[280px] bg-white z-50 md:hidden shadow-[0_0_32px_rgba(0,0,0,0.14)] overflow-y-auto"
            >
              <nav className="p-4 space-y-1">
                {navLinks.map((link) => {
                  if (link.hasDropdown) {
                    return (
                      <div key={link.label}>
                        <p className="px-3 py-2 text-[12px] font-semibold text-[#9ca3af] uppercase tracking-wider">
                          {link.label}
                        </p>
                        {apiSdkMenu.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-2 px-3 py-2.5 rounded-[8px] text-[14px] text-[#6b7280] hover:bg-[#f7f8fa] hover:text-[#1a1d27] transition-colors"
                          >
                            <item.icon className="w-4 h-4 flex-shrink-0" />
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    );
                  }
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-3 py-2.5 rounded-[8px] text-[14px] font-medium transition-colors ${
                        pathname === link.href
                          ? "text-[#0066ff] bg-[#eef2ff]"
                          : "text-[#6b7280] hover:text-[#1a1d27] hover:bg-[#f7f8fa]"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <div className="pt-4 border-t border-[#e8eaed]">
                  <Link
                    href="/login"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-1.5 w-full px-4 py-2.5 rounded-[8px] bg-[#0066ff] text-white text-[14px] font-semibold hover:bg-[#0047b3] transition-colors"
                  >
                    <LogIn className="w-4 h-4" />
                    로그인
                  </Link>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
