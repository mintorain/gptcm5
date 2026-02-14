"use client";

import { Lightbulb, Zap, Rocket, BookOpen } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "@/components/ui/animated-section";

export default function WhyVibeCoding() {
    return (
        <section className="py-24 bg-[#0A0A0A]">
            <div className="max-w-6xl mx-auto px-4">
                <AnimatedSection>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">왜 바이브코딩인가?</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                            코드를 외우는 시대는 끝났습니다. GPT에게 말하면 결과를 얻는 시대입니다.
                        </p>
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
                    {[
                        { icon: Lightbulb, title: "생각만 하면 된다", desc: "문법과 에러는 GPT가 처리, 아이디어만 제시하면 됩니다" },
                        { icon: Zap, title: "10배 빠른 개발", desc: "며칠 걸리던 작업을 몇 시간 만에 완성" },
                        { icon: Rocket, title: "무한한 확장성", desc: "홈페이지, 앱, 자동화 도구 등 원하는 모든 것을 제작" },
                        { icon: BookOpen, title: "새로운 리터러시", desc: "GPT와 대화하며 원하는 것을 만들어내는 능력" },
                    ].map(({ icon: Icon, title, desc }, i) => (
                        <AnimatedItem key={title} delay={0.08 * i}>
                            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.06] h-full">
                                <div className="w-12 h-12 rounded-xl bg-purple-600/15 flex items-center justify-center mb-5">
                                    <Icon className="w-6 h-6 text-purple-400" />
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                            </div>
                        </AnimatedItem>
                    ))}
                </div>

                <AnimatedSection>
                    <div className="max-w-3xl mx-auto text-center">
                        <p className="text-lg text-gray-300 leading-relaxed">
                            GPT를 글쓰기 도구가 아닌 <span className="text-purple-400 font-semibold">개발 파트너</span>로 활용하여
                            직접 만들고, 직접 수정하고, 직접 배포하는 경험을 제공합니다.
                        </p>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
