"use client";

import { Play } from "lucide-react";
import { AnimatedSection, AnimatedItem } from "@/components/ui/animated-section";

const videos = [
    {
        id: 1,
        title: "1회차: 개발 환경 셋팅 및 코딩 기초",
        description: "Node.js 설치부터 VS Code 세팅까지",
        duration: "2:00:00",
        thumbnail: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=225&fit=crop",
    },
    {
        id: 2,
        title: "2회차: 디자인 & 랜딩페이지 제작",
        description: "Tailwind CSS로 프리미엄 웹페이지 구현",
        duration: "2:00:00",
        thumbnail: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=225&fit=crop",
    },
    {
        id: 3,
        title: "3회차: 홈페이지 구조 설계",
        description: "멀티 페이지 구조와 사용자 동선 설계",
        duration: "2:00:00",
        thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=225&fit=crop",
    },
];

export default function VideoPreview() {
    return (
        <section id="video" className="py-24 bg-[#0A0A0A]">
            <div className="max-w-6xl mx-auto px-4">
                <AnimatedSection>
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            5기 바이브코딩, 이런 내용을 배웁니다
                        </h2>
                        <p className="text-gray-400 text-lg">녹화 영상으로 강의 퀄리티를 직접 확인하세요</p>
                    </div>
                </AnimatedSection>

                <AnimatedSection delay={0.1}>
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-12 bg-[#1A1A2E] border border-white/10">
                        <iframe
                            className="absolute inset-0 w-full h-full"
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                            title="GPT콘텐츠메이커 5기 미리보기"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {videos.map((video, i) => (
                        <AnimatedItem key={video.id} delay={0.1 * i}>
                            <div className="group relative rounded-xl overflow-hidden bg-white/[0.02] border border-white/[0.06] cursor-pointer">
                                <div className="relative aspect-video overflow-hidden">
                                    <img
                                        src={video.thumbnail}
                                        alt={video.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-14 h-14 rounded-full bg-purple-600/90 flex items-center justify-center">
                                            <Play className="w-6 h-6 text-white ml-0.5" />
                                        </div>
                                    </div>
                                    <span className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded font-mono">
                                        {video.duration}
                                    </span>
                                </div>
                                <div className="p-5">
                                    <h3 className="text-white font-semibold text-sm mb-1">{video.title}</h3>
                                    <p className="text-gray-500 text-xs">{video.description}</p>
                                </div>
                            </div>
                        </AnimatedItem>
                    ))}
                </div>

                <AnimatedSection>
                    <div className="text-center">
                        <a
                            href="#apply"
                            className="inline-flex items-center gap-2 px-8 py-4 text-lg font-semibold text-white rounded-full bg-purple-600 hover:bg-purple-700 transition-colors"
                        >
                            수강 신청하기
                        </a>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
}
