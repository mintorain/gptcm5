"use client";

import { testimonials, stats } from "@/data/testimonials";
import { Star, Quote } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { AnimatedSection, AnimatedItem } from "@/components/ui/animated-section";

function CountUp({ end, suffix, duration = 2000 }: { end: number; suffix: string; duration?: number }) {
    const [count, setCount] = useState<number | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
            { threshold: 0.5 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [started]);

    useEffect(() => {
        if (!started) return;
        const isFloat = end % 1 !== 0;
        const steps = 60;
        const increment = end / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
                setCount(end);
                clearInterval(timer);
            } else {
                setCount(isFloat ? parseFloat(current.toFixed(1)) : Math.floor(current));
            }
        }, duration / steps);
        return () => clearInterval(timer);
    }, [started, end, duration]);

    return (
        <div ref={ref} className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {count !== null ? `${count}${suffix}` : `${end}${suffix}`}
            </div>
        </div>
    );
}

export default function SocialProof() {
    return (
        <section id="social-proof" className="py-24 bg-[#0d0d1a] relative">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />

            <div className="max-w-6xl mx-auto px-4">
                <AnimatedSection>
                    <div className="text-center mb-16">
                        <p className="text-purple-400 font-semibold text-sm tracking-widest uppercase mb-3">Social Proof</p>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">수강생들의 이야기</h2>
                        <p className="text-gray-400 text-lg">실제 수강생들의 생생한 후기</p>
                    </div>
                </AnimatedSection>

                {/* 숫자 카운트업 */}
                <AnimatedSection delay={0.1}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                        {stats.map((s) => (
                            <div key={s.label} className="text-center p-6 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                                <CountUp end={s.value} suffix={s.suffix} />
                                <p className="text-gray-500 text-sm mt-2">{s.label}</p>
                            </div>
                        ))}
                    </div>
                </AnimatedSection>

                {/* 후기 카드 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {testimonials.map((t, i) => (
                        <AnimatedItem key={t.name} delay={0.08 * i}>
                            <div className="card-hover p-7 rounded-2xl bg-white/[0.02] border border-white/[0.06] h-full">
                                <Quote className="w-8 h-8 text-purple-500/20 mb-4" />
                                <p className="text-gray-300 text-sm leading-relaxed mb-6">{t.content}</p>
                                <div className="flex items-center justify-between pt-4 border-t border-white/[0.04]">
                                    <div>
                                        <p className="text-white font-semibold text-sm">{t.name}</p>
                                        <p className="text-gray-500 text-xs">{t.role}</p>
                                    </div>
                                    <div className="flex gap-0.5">
                                        {Array.from({ length: t.rating }).map((_, idx) => (
                                            <Star key={idx} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </AnimatedItem>
                    ))}
                </div>
            </div>
        </section>
    );
}
