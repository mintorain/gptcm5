"use client";

import { motion } from "motion/react";
import { Monitor, School, Target, ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
            {/* 배경 그라데이션 오브 */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-purple-600 opacity-[0.07] blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-pink-600 opacity-[0.05] blur-[100px] pointer-events-none" />

            {/* 그리드 패턴 */}
            <div
                className="absolute inset-0 opacity-[0.04]"
                style={{
                    backgroundImage: `linear-gradient(rgba(124,58,237,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.5) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="relative max-w-5xl mx-auto text-center px-4 py-32">
                {/* 후기선물 배지 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full px-5 py-2.5 mb-8 backdrop-blur-sm"
                >
                    <span className="text-lg">🎁</span>
                    <span className="text-sm font-medium text-purple-300">지금 후기 남기면 특별 선물 증정!</span>
                </motion.div>

                {/* 메인 헤드라인 */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight"
                >
                    <span className="text-white">코딩 몰라도 가능합니다</span>
                    <br />
                    <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                        GPT로 만드는 나만의 웹서비스
                    </span>
                </motion.h1>

                {/* 서브 헤드라인 */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
                >
                    GPT콘텐츠메이커 5기 (바이브코딩편) — 기획부터 배포까지 완성형 실습
                </motion.p>

                {/* 키 넘버 뱃지 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    {[
                        { icon: Monitor, label: "온라인 5회" },
                        { icon: School, label: "오프라인 3회" },
                        { icon: Target, label: "100% 실습 중심" },
                    ].map(({ icon: Icon, label }) => (
                        <div key={label} className="flex items-center gap-2.5 bg-white/[0.04] backdrop-blur-sm border border-white/[0.08] rounded-full px-5 py-3">
                            <Icon className="w-4 h-4 text-purple-400" />
                            <span className="text-sm font-medium text-gray-300">{label}</span>
                        </div>
                    ))}
                </motion.div>

                {/* CTA 버튼 */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.0 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a
                        href="#apply"
                        className="btn-glow inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-500/25"
                    >
                        지금 바로 신청하기
                        <ArrowRight className="w-5 h-5" />
                    </a>
                    <a
                        href="#curriculum"
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-300 rounded-full border border-white/10 hover:border-purple-500/40 hover:text-white hover:bg-white/[0.03] transition-all"
                    >
                        일정 확인하기
                    </a>
                </motion.div>
            </div>

            {/* 하단 페이드 */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0A0A0A] to-transparent pointer-events-none" />
        </section>
    );
}
