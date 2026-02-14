"use client";

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center bg-[#0A0A0A]">
            <div className="max-w-4xl mx-auto text-center px-4 py-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="inline-flex items-center gap-2 bg-purple-600/10 border border-purple-500/20 rounded-full px-4 py-2 mb-8"
                >
                    <span>🎁</span>
                    <span className="text-sm text-purple-300">지금 후기 남기면 특별 선물 증정!</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                >
                    <span className="text-white">코딩 몰라도 가능합니다</span>
                    <br />
                    <span className="text-purple-400">GPT로 만드는 나만의 웹서비스</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-lg md:text-xl text-gray-400 mb-6 max-w-2xl mx-auto"
                >
                    GPT콘텐츠메이커 5기 (바이브코딩편) — 기획부터 배포까지 완성형 실습
                </motion.p>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="text-sm text-gray-500 mb-12"
                >
                    온라인 5회 · 오프라인 3회 · 100% 실습 중심
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a
                        href="#apply"
                        className="btn-glow inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-semibold text-white rounded-full bg-purple-600"
                    >
                        지금 바로 신청하기
                        <ArrowRight className="w-5 h-5" />
                    </a>
                    <a
                        href="#curriculum"
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-400 rounded-full border border-white/10 hover:border-white/20 hover:text-white transition-all"
                    >
                        일정 확인하기
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
