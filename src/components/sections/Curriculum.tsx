"use client";

import { curriculumData, onlineCourse, offlineCourse } from "@/data/curriculum";
import { ChevronDown, Monitor, MapPin, Gift, CheckCircle } from "lucide-react";
import { useState } from "react";
import { AnimatedSection, AnimatedItem } from "@/components/ui/animated-section";

export default function Curriculum() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="curriculum" className="py-32 bg-[#0A0A0A]">
            <div className="max-w-6xl mx-auto px-4">
                <AnimatedSection>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">커리큘럼</h2>
                        <p className="text-gray-400 text-lg">5회차 구성으로 기획부터 배포까지 완성합니다</p>
                    </div>
                </AnimatedSection>

                {/* 아코디언 */}
                <AnimatedSection delay={0.1}>
                    <div className="max-w-3xl mx-auto mb-20 space-y-3">
                        {curriculumData.map((item, index) => (
                            <div
                                key={item.session}
                                className="border border-white/[0.06] rounded-xl overflow-hidden bg-white/[0.02] backdrop-blur hover:border-purple-500/20 transition-colors"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-5 hover:bg-white/[0.02] transition-colors"
                                >
                                    <div className="flex items-center gap-4 text-left">
                                        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white font-bold text-sm shrink-0">
                                            {item.session}
                                        </span>
                                        <span className="text-white font-semibold">{item.title}</span>
                                    </div>
                                    <ChevronDown
                                        className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""}`}
                                    />
                                </button>
                                {openIndex === index && (
                                    <div className="px-5 pb-5 pt-0 text-center">
                                        <p className="text-gray-400 mb-3">{item.description}</p>
                                        <div className="flex flex-wrap justify-center gap-2">
                                            {item.keywords.map((kw) => (
                                                <span
                                                    key={kw}
                                                    className="text-xs bg-purple-600/15 text-purple-300 px-3 py-1 rounded-full border border-purple-500/15"
                                                >
                                                    {kw}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                {/* 수강 과정 카드 */}
                <AnimatedSection>
                    <div className="text-center mb-10">
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">나에게 맞는 방식을 선택하세요</h3>
                        <p className="text-gray-500">온라인과 오프라인 중 편한 방식으로 수강할 수 있습니다</p>
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <AnimatedItem delay={0}>
                        <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 h-full text-center">
                            <div className="flex flex-col items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-purple-600/15 flex items-center justify-center">
                                    <Monitor className="w-6 h-6 text-purple-400" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white">온라인 과정</h4>
                                    <p className="text-gray-500 text-sm">{onlineCourse.schedule} · {onlineCourse.sessions}</p>
                                </div>
                            </div>
                            <ul className="space-y-3 mb-8">
                                {onlineCourse.features.map((f) => (
                                    <li key={f} className="flex items-center justify-center gap-2.5 text-gray-300">
                                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                                        <span className="text-sm">{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="text-3xl font-bold text-white">{onlineCourse.price}</div>
                        </div>
                    </AnimatedItem>

                    <AnimatedItem delay={0.15}>
                        <div className="relative rounded-2xl border-2 border-purple-500/40 bg-purple-500/[0.03] p-8 h-full text-center">
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                                <span className="bg-purple-600 text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1">
                                    <Gift className="w-3 h-3" /> 추천
                                </span>
                            </div>
                            <div className="flex flex-col items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-xl bg-purple-600/15 flex items-center justify-center">
                                    <MapPin className="w-6 h-6 text-purple-400" />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-white">오프라인 과정</h4>
                                    <p className="text-gray-500 text-sm">{offlineCourse.schedule} · {offlineCourse.sessions}</p>
                                </div>
                            </div>
                            <ul className="space-y-3 mb-8">
                                {offlineCourse.features.map((f) => (
                                    <li key={f} className="flex items-center justify-center gap-2.5 text-gray-300">
                                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                                        <span className="text-sm">{f}</span>
                                    </li>
                                ))}
                            </ul>
                            <div className="text-3xl font-bold text-white mb-2">{offlineCourse.price}</div>
                            <p className="text-sm text-pink-400 font-semibold flex items-center justify-center gap-1">
                                <Gift className="w-4 h-4" /> {offlineCourse.bonus}
                            </p>
                        </div>
                    </AnimatedItem>
                </div>
            </div>
        </section>
    );
}
