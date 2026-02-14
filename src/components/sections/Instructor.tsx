import { User } from "lucide-react";

export default function Instructor() {
    return (
        <section id="instructor" className="py-20 bg-[#1A1A2E]">
            <div className="max-w-4xl mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* 프로필 */}
                    <div className="shrink-0">
                        <div className="w-40 h-40 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 p-1">
                            <div className="w-full h-full rounded-full bg-[#1A1A2E] flex items-center justify-center">
                                <User className="w-20 h-20 text-purple-400" />
                            </div>
                        </div>
                    </div>

                    {/* 소개 */}
                    <div>
                        <p className="text-purple-400 font-semibold text-sm mb-2">생성형 AI 활용 교육 전문가</p>
                        <h3 className="text-3xl font-bold text-white mb-4">이신우</h3>
                        <p className="text-gray-400 leading-relaxed mb-6">
                            AI·콘텐츠·교육 분야에서 다수의 실전 프로젝트와 강의 경험을 바탕으로,
                            비전공자도 이해할 수 있는 현실적인 설명과 끝까지 완성시키는 수업을 진행합니다.
                        </p>
                        <div className="p-6 rounded-xl bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/20">
                            <p className="text-lg text-gray-300 italic leading-relaxed">
                                &ldquo;<span className="text-white font-semibold">GPT로 글만 쓰는 시대는 끝났습니다.</span><br />
                                이제는 GPT로 직접 만들고 직접 배포하는 시대입니다.&rdquo;
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
