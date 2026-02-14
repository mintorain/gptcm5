"use client";

import { Home, Globe, Bot, Wrench, CheckCircle, Gift } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "@/components/ui/animated-section";

export default function Transformation() {
    return (
        <section className="py-24 bg-[#0A0A0A]">
            <div className="max-w-6xl mx-auto px-4">
                <AnimatedSection>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            이 과정을 마치면 당신은 이렇게 달라집니다
                        </h2>
                        <p className="text-gray-400 text-lg">바이브코딩으로 얻게 되는 실질적인 능력</p>
                    </div>
                </AnimatedSection>

                {/* 4개 성과 카드 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-16">
                    {[
                        { icon: Home, title: "내가 직접 만든 홈페이지 보유", desc: "외주 없이 100% 내 손으로 만든 웹사이트. 원할 때 언제든 수정하고 업데이트할 수 있습니다." },
                        { icon: Globe, title: "실제 배포된 웹페이지 URL 확보", desc: "전 세계 어디서든 접속 가능한 실제 주소. 명함에 적고, 포트폴리오로 활용하세요." },
                        { icon: Bot, title: "GPT를 개발 파트너로 활용하는 능력", desc: "코딩 문법을 몰라도 GPT에게 명령하여 원하는 기능을 구현하는 바이브코딩 스킬을 습득합니다." },
                        { icon: Wrench, title: "원하는 모든 웹앱을 만드는 능력", desc: "홈페이지뿐 아니라 예약 시스템, 회원 관리, 자동화 도구까지. 상상하는 모든 것을 직접 만들 수 있습니다." },
                    ].map(({ icon: Icon, title, desc }, i) => (
                        <AnimatedItem key={title} delay={0.08 * i}>
                            <div className="p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] h-full text-center">
                                <div className="w-12 h-12 rounded-xl bg-purple-600/15 flex items-center justify-center mb-5 mx-auto">
                                    <Icon className="w-6 h-6 text-purple-400" />
                                </div>
                                <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                            </div>
                        </AnimatedItem>
                    ))}
                </div>

                {/* 마무리 문구 */}
                <AnimatedSection>
                    <p className="text-center text-xl md:text-2xl text-gray-300 font-medium mb-16">
                        이제는 &lsquo;만들어보고 싶다&rsquo;가 아니라<br />
                        <span className="text-purple-400 font-bold">&lsquo;내가 만들었다&rsquo;</span>라고 말할 수 있습니다.
                    </p>
                </AnimatedSection>

                {/* 혜택 목록 */}
                <AnimatedSection>
                    <div className="max-w-2xl mx-auto">
                        <h3 className="text-xl font-bold text-white text-center mb-8">수강 혜택</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {[
                                { icon: CheckCircle, text: "녹화 영상 무제한 다시보기", color: "text-emerald-400" },
                                { icon: CheckCircle, text: "실습 템플릿 제공", color: "text-emerald-400" },
                                { icon: CheckCircle, text: "카카오톡 커뮤니티 참여", color: "text-emerald-400" },
                                { icon: CheckCircle, text: "1:1 피드백 제공", color: "text-emerald-400" },
                                { icon: Gift, text: "무료특강 후기 작성 시 선물 증정", color: "text-pink-400" },
                                { icon: Gift, text: "오프라인 신청 시 온라인 과정 무료!", color: "text-pink-400" },
                            ].map(({ icon: Icon, text, color }) => (
                                <div key={text} className="flex items-center justify-center gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/[0.04]">
                                    <Icon className={`w-5 h-5 ${color} shrink-0`} />
                                    <span className="text-gray-300 text-sm">{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
