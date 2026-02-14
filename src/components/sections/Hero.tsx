"use client";

import { WarpBackground } from "@/components/ui/warp-background";
import { Monitor, School, Target } from "lucide-react";

export default function Hero() {
    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <WarpBackground
                className="w-full min-h-screen border-0 rounded-none bg-[#0A0A0A]"
                perspective={200}
                beamsPerSide={4}
                beamSize={4}
                beamDelayMax={5}
                beamDuration={5}
                gridColor="rgba(124, 58, 237, 0.15)"
            >
                <div className="max-w-5xl mx-auto text-center px-4 py-20">
                    {/* 후기선물 배지 */}
                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
                        <span className="text-lg">🎁</span>
                        <span className="text-sm font-medium text-purple-300">지금 후기 남기면 특별 선물 증정!</span>
                    </div>

                    {/* 메인 헤드라인 */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                        <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
                            코딩 몰라도 가능합니다
                        </span>
                        <br />
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            GPT로 만드는 나만의 웹서비스
                        </span>
                    </h1>

                    {/* 서브 헤드라인 */}
                    <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                        GPT콘텐츠메이커 5기 (바이브코딩편) — 기획부터 배포까지 완성형 실습
                    </p>

                    {/* 키 넘버 뱃지 */}
                    <div className="flex flex-wrap justify-center gap-4 mb-10">
                        <div className="flex items-center gap-2 bg-white/5 backdrop-blur border border-white/10 rounded-full px-5 py-2.5">
                            <Monitor className="w-5 h-5 text-purple-400" />
                            <span className="text-sm font-medium text-white">온라인 5회</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/5 backdrop-blur border border-white/10 rounded-full px-5 py-2.5">
                            <School className="w-5 h-5 text-purple-400" />
                            <span className="text-sm font-medium text-white">오프라인 3회</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/5 backdrop-blur border border-white/10 rounded-full px-5 py-2.5">
                            <Target className="w-5 h-5 text-purple-400" />
                            <span className="text-sm font-medium text-white">100% 실습 중심</span>
                        </div>
                    </div>

                    {/* CTA 버튼 */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="#apply"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105"
                        >
                            지금 바로 신청하기
                        </a>
                        <a
                            href="#curriculum"
                            className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-purple-300 rounded-full border border-purple-500/30 hover:bg-purple-500/10 transition-all hover:scale-105"
                        >
                            일정 확인하기
                        </a>
                    </div>
                </div>
            </WarpBackground>
        </section>
    );
}
