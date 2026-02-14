"use client";

import { Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/ui/animated-section";

export default function Instructor() {
    return (
        <section id="instructor" className="py-24 bg-[#0d0d1a] relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

            <div className="max-w-4xl mx-auto px-4">
                <AnimatedSection>
                    <div className="text-center mb-12">
                        <p className="text-purple-400 font-semibold text-sm tracking-widest uppercase mb-3">Instructor</p>
                        <h2 className="text-3xl md:text-5xl font-bold text-white">강사 소개</h2>
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={0.15}>
                    <div className="flex flex-col md:flex-row items-center gap-10 p-8 md:p-10 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                        {/* 프로필 */}
                        <div className="shrink-0">
                            <div className="relative w-44 h-44 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 p-[3px]">
                                <div className="w-full h-full rounded-full bg-[#0d0d1a] flex items-center justify-center overflow-hidden">
                                    <div className="text-center">
                                        <Sparkles className="w-10 h-10 text-purple-400 mx-auto mb-2" />
                                        <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">이신우</span>
                                    </div>
                                </div>
                                {/* 장식 링 */}
                                <div className="absolute inset-[-8px] rounded-full border border-purple-500/20 pointer-events-none" />
                            </div>
                        </div>

                        {/* 소개 */}
                        <div className="text-center md:text-left">
                            <div className="inline-flex items-center gap-2 bg-purple-600/10 border border-purple-500/15 rounded-full px-4 py-1.5 mb-3">
                                <span className="text-xs font-semibold text-purple-300">생성형 AI 활용 교육 전문가</span>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-4">이신우</h3>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                AI·콘텐츠·교육 분야에서 다수의 실전 프로젝트와 강의 경험을 바탕으로,
                                비전공자도 이해할 수 있는 현실적인 설명과 끝까지 완성시키는 수업을 진행합니다.
                            </p>
                            <div className="p-6 rounded-xl bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/15">
                                <p className="text-lg text-gray-300 italic leading-relaxed">
                                    &ldquo;<span className="text-white font-semibold">GPT로 글만 쓰는 시대는 끝났습니다.</span><br />
                                    이제는 GPT로 직접 만들고 직접 배포하는 시대입니다.&rdquo;
                                </p>
                            </div>
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
