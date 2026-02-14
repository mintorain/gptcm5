"use client";

import { curriculumData, onlineCourse, offlineCourse } from "@/data/curriculum";
import { ChevronDown, Monitor, MapPin, Gift, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function Curriculum() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section id="curriculum" className="py-20 bg-[#1A1A2E]">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">커리큘럼</h2>
                    <p className="text-gray-400 text-lg">5회차 구성으로 기획부터 배포까지 완성합니다</p>
                </div>

                {/* 아코디언 */}
                <div className="max-w-3xl mx-auto mb-16 space-y-3">
                    {curriculumData.map((item, index) => (
                        <div
                            key={item.session}
                            className="border border-white/10 rounded-xl overflow-hidden bg-white/5 backdrop-blur"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
                            >
                                <div className="flex items-center gap-4">
                                    <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-sm shrink-0">
                                        {item.session}
                                    </span>
                                    <span className="text-white font-semibold">{item.title}</span>
                                </div>
                                <ChevronDown
                                    className={`w-5 h-5 text-gray-400 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                                />
                            </button>
                            {openIndex === index && (
                                <div className="px-5 pb-5 pt-0">
                                    <p className="text-gray-400 mb-3 pl-14">{item.description}</p>
                                    <div className="flex flex-wrap gap-2 pl-14">
                                        {item.keywords.map((kw) => (
                                            <span
                                                key={kw}
                                                className="text-xs bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full border border-purple-500/20"
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

                {/* 수강 과정 카드 */}
                <div className="text-center mb-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">나에게 맞는 방식을 선택하세요</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    {/* 온라인 과정 */}
                    <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-8 hover:border-purple-500/50 transition-all">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center">
                                <Monitor className="w-6 h-6 text-purple-400" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white">온라인 과정</h4>
                                <p className="text-gray-400 text-sm">{onlineCourse.schedule} · {onlineCourse.sessions}</p>
                            </div>
                        </div>
                        <ul className="space-y-3 mb-6">
                            {onlineCourse.features.map((f) => (
                                <li key={f} className="flex items-center gap-2 text-gray-300">
                                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                                    <span className="text-sm">{f}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="text-3xl font-bold text-white">
                            {onlineCourse.price}
                        </div>
                    </div>

                    {/* 오프라인 과정 */}
                    <div className="relative rounded-2xl border-2 border-purple-500/50 bg-white/5 backdrop-blur p-8 hover:border-purple-400 transition-all">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                            <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-4 py-1 rounded-full flex items-center gap-1">
                                <Gift className="w-3 h-3" /> 추천
                            </span>
                        </div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-purple-600/20 flex items-center justify-center">
                                <MapPin className="w-6 h-6 text-purple-400" />
                            </div>
                            <div>
                                <h4 className="text-xl font-bold text-white">오프라인 과정</h4>
                                <p className="text-gray-400 text-sm">{offlineCourse.schedule} · {offlineCourse.sessions}</p>
                            </div>
                        </div>
                        <ul className="space-y-3 mb-6">
                            {offlineCourse.features.map((f) => (
                                <li key={f} className="flex items-center gap-2 text-gray-300">
                                    <CheckCircle className="w-4 h-4 text-green-400 shrink-0" />
                                    <span className="text-sm">{f}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="text-3xl font-bold text-white mb-2">
                            {offlineCourse.price}
                        </div>
                        <p className="text-sm text-pink-400 font-semibold flex items-center gap-1">
                            <Gift className="w-4 h-4" /> {offlineCourse.bonus}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
