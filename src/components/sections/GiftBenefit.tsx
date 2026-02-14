import { gifts, steps } from "@/data/gifts";
import { ArrowRight } from "lucide-react";

export default function GiftBenefit() {
    return (
        <section className="py-20 bg-[#0A0A0A]">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        🎁 무료특강 후기 남기고 선물 받으세요!
                    </h2>
                    <p className="text-gray-400 text-lg">후기를 작성해주시면 감사의 마음을 담아 선물을 보내드립니다</p>
                </div>

                {/* 선물 카드 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                    {gifts.map((g) => (
                        <div key={g.title} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all text-center hover:-translate-y-1">
                            <div className="text-4xl mb-4">{g.icon}</div>
                            <h3 className="text-white font-bold mb-2">{g.title}</h3>
                            <p className="text-gray-400 text-sm">{g.description}</p>
                        </div>
                    ))}
                </div>

                {/* 3단계 스텝 */}
                <div className="max-w-3xl mx-auto mb-12">
                    <h3 className="text-xl font-bold text-white text-center mb-8">참여 방법은 간단합니다</h3>
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        {steps.map((s, i) => (
                            <div key={s.step} className="flex items-center gap-4 flex-1">
                                <div className="flex flex-col items-center text-center flex-1 p-6 rounded-xl bg-white/5 border border-white/10">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center text-white font-bold mb-3">
                                        {s.step}
                                    </div>
                                    <h4 className="text-white font-semibold text-sm mb-1">{s.title}</h4>
                                    <p className="text-gray-400 text-xs">{s.description}</p>
                                </div>
                                {i < steps.length - 1 && (
                                    <ArrowRight className="w-5 h-5 text-purple-400 shrink-0 hidden md:block" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center">
                    <a
                        href="#apply"
                        className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40"
                    >
                        🎁 후기 작성하고 선물 받기
                    </a>
                </div>
            </div>
        </section>
    );
}
