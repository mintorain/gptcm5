"use client";

import { gifts, steps } from "@/data/gifts";
import { ArrowRight } from "lucide-react";
import { AnimatedSection, AnimatedItem, AnimatedScale } from "@/components/ui/animated-section";

export default function GiftBenefit() {
    return (
        <section className="py-24 bg-[#0A0A0A] relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-pink-600 opacity-[0.03] blur-[120px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4">
                <AnimatedSection>
                    <div className="text-center mb-16">
                        <p className="text-pink-400 font-semibold text-sm tracking-widest uppercase mb-3">Gift Benefit</p>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            무료특강 후기 남기고 선물 받으세요!
                        </h2>
                        <p className="text-gray-400 text-lg">후기를 작성해주시면 감사의 마음을 담아 선물을 보내드립니다</p>
                    </div>
                </AnimatedSection>

                {/* 선물 카드 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
                    {gifts.map((g, i) => (
                        <AnimatedScale key={g.title} delay={0.08 * i}>
                            <div className="card-hover p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center h-full">
                                <div className="text-5xl mb-5">{g.icon}</div>
                                <h3 className="text-white font-bold mb-2">{g.title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{g.description}</p>
                            </div>
                        </AnimatedScale>
                    ))}
                </div>

                {/* 3단계 스텝 */}
                <AnimatedSection>
                    <div className="max-w-3xl mx-auto mb-14">
                        <h3 className="text-xl font-bold text-white text-center mb-8">참여 방법은 간단합니다</h3>
                        <div className="flex flex-col md:flex-row items-stretch gap-4">
                            {steps.map((s, i) => (
                                <div key={s.step} className="flex items-center gap-4 flex-1">
                                    <div className="flex flex-col items-center text-center flex-1 p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold mb-3 shadow-lg shadow-purple-500/20">
                                            {s.step}
                                        </div>
                                        <h4 className="text-white font-semibold text-sm mb-1">{s.title}</h4>
                                        <p className="text-gray-500 text-xs">{s.description}</p>
                                    </div>
                                    {i < steps.length - 1 && (
                                        <ArrowRight className="w-5 h-5 text-purple-400/40 shrink-0 hidden md:block" />
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>

                {/* CTA */}
                <AnimatedSection>
                    <div className="text-center">
                        <a
                            href="#apply"
                            className="btn-glow inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-500/25"
                        >
                            후기 작성하고 선물 받기
                        </a>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
