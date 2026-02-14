"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { label: "커리큘럼", href: "#curriculum" },
    { label: "강사소개", href: "#instructor" },
    { label: "후기", href: "#social-proof" },
    { label: "수강신청", href: "#apply" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-[#0A0A0A]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
                {/* 로고 */}
                <a href="#hero" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center text-white text-sm font-bold group-hover:scale-110 transition-transform">
                        G
                    </div>
                    <span className="text-white font-bold text-sm md:text-base">
                        GPT콘텐츠메이커 <span className="text-purple-400">5기</span>
                    </span>
                </a>

                {/* 데스크탑 네비게이션 */}
                <nav className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="px-4 py-2 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#apply"
                        className="ml-2 px-5 py-2 text-sm font-semibold text-white rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all shadow-md shadow-purple-500/20 hover:shadow-purple-500/30 hover:scale-105"
                    >
                        지금 신청하기
                    </a>
                </nav>

                {/* 모바일 메뉴 버튼 */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
                    aria-label="메뉴 토글"
                >
                    {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* 모바일 메뉴 */}
            {menuOpen && (
                <div className="md:hidden bg-[#0A0A0A]/98 backdrop-blur-md border-b border-white/10">
                    <nav className="flex flex-col p-4 space-y-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="px-4 py-3 text-sm text-gray-400 hover:text-white rounded-lg hover:bg-white/5 transition-all"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href="#apply"
                            onClick={() => setMenuOpen(false)}
                            className="mt-2 px-5 py-3 text-sm font-semibold text-white text-center rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all"
                        >
                            지금 신청하기
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
}
