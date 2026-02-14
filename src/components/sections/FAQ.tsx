"use client";

import { faqData } from "@/data/faq";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-20 bg-[#0A0A0A]">
            <div className="max-w-3xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">자주 묻는 질문</h2>
                    <p className="text-gray-400 text-lg">궁금한 점이 있으시면 카카오톡으로 문의해주세요</p>
                </div>

                <div className="space-y-3">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="border border-white/10 rounded-xl overflow-hidden bg-white/5 backdrop-blur"
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
                            >
                                <span className="text-white font-medium pr-4">{item.question}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-gray-400 shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""
                                        }`}
                                />
                            </button>
                            {openIndex === index && (
                                <div className="px-5 pb-5">
                                    <p className="text-gray-400 text-sm leading-relaxed">{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
