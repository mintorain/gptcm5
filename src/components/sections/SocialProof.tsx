"use client";

import { testimonials, stats } from "@/data/testimonials";
import { Star, Quote } from "lucide-react";
import { useEffect, useState, useRef } from "react";

function CountUp({ end, suffix, duration = 2000 }: { end: number; suffix: string; duration?: number }) {
    const [count, setCount] = useState(0);
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
            <div className="text-3xl md:text-4xl font-bold text-white">
                {count}{suffix}
            </div>
        </div>
    );
}

export default function SocialProof() {
    return (
        <section id="social-proof" className="py-20 bg-[#1A1A2E]">
            <div className="max-w-6xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">수강생들의 이야기</h2>
                    <p className="text-gray-400 text-lg">실제 수강생들의 생생한 후기</p>
                </div>

                {/* 숫자 카운트업 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {stats.map((s) => (
                        <div key={s.label} className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
                            <CountUp end={s.value} suffix={s.suffix} />
                            <p className="text-gray-400 text-sm mt-2">{s.label}</p>
                        </div>
                    ))}
                </div>

                {/* 후기 카드 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {testimonials.map((t) => (
                        <div key={t.name} className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all">
                            <Quote className="w-8 h-8 text-purple-500/30 mb-4" />
                            <p className="text-gray-300 text-sm leading-relaxed mb-4">{t.content}</p>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-white font-semibold text-sm">{t.name}</p>
                                    <p className="text-gray-500 text-xs">{t.role}</p>
                                </div>
                                <div className="flex gap-0.5">
                                    {Array.from({ length: t.rating }).map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
