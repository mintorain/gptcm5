import { Lightbulb, Zap, Rocket, BookOpen, AlertCircle, CheckCircle, Code, Users, Laptop, Globe } from "lucide-react";

export default function WhyVibeCoding() {
    return (
        <section className="py-20 bg-[#0A0A0A]">
            <div className="max-w-6xl mx-auto px-4">
                {/* 왜 바이브코딩인가 */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">왜 바이브코딩인가?</h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        코드를 외우는 시대는 끝났습니다.<br className="hidden md:block" />
                        GPT에게 말하면 결과를 얻는 시대입니다.
                    </p>
                </div>

                {/* 4개 가치 카드 */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
                    {[
                        { icon: Lightbulb, title: "생각만 하면 된다", desc: "문법과 에러는 GPT가 처리, 아이디어만 제시하면 됩니다", color: "from-yellow-400 to-orange-500" },
                        { icon: Zap, title: "10배 빠른 개발", desc: "며칠 걸리던 작업을 몇 시간 만에 완성", color: "from-blue-400 to-cyan-500" },
                        { icon: Rocket, title: "무한한 확장성", desc: "홈페이지, 앱, 자동화 도구 등 원하는 모든 것을 제작", color: "from-purple-400 to-pink-500" },
                        { icon: BookOpen, title: "새로운 리터러시", desc: "GPT와 대화하며 원하는 것을 만들어내는 능력", color: "from-green-400 to-emerald-500" },
                    ].map(({ icon: Icon, title, desc, color }) => (
                        <div
                            key={title}
                            className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/30 transition-all hover:-translate-y-1"
                        >
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <Icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
                        </div>
                    ))}
                </div>

                {/* 리터러시 강조 */}
                <div className="max-w-3xl mx-auto text-center mb-20 p-8 rounded-2xl bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/20">
                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed italic">
                        &ldquo;글을 읽고 쓸 줄 알아야 했던 것처럼,<br />
                        이제는 <span className="text-purple-300 font-semibold">GPT와 대화하며 원하는 것을 만들어내는 능력</span>이 필요합니다.&rdquo;
                    </p>
                </div>

                {/* 문제-해결 섹션 */}
                <div className="max-w-4xl mx-auto mb-20">
                    <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-10">
                        이런 고민, 한 번이라도 해보셨다면
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
                        {[
                            "홈페이지가 필요하지만 개발자에게 맡기기엔 비용이 부담",
                            "GPT를 쓰고 있지만 글쓰기와 기획에서만 멈춰 있음",
                            "온라인 강의를 따라가다 오류에서 막혀 끝까지 완성 못함",
                            "아이디어는 있는데 '구현'이 안 돼서 포기",
                        ].map((problem) => (
                            <div key={problem} className="flex items-start gap-3 p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                                <AlertCircle className="w-5 h-5 text-red-400 shrink-0 mt-0.5" />
                                <p className="text-gray-300 text-sm">{problem}</p>
                            </div>
                        ))}
                    </div>

                    {/* 해결책 */}
                    <div className="text-center p-8 rounded-2xl bg-purple-600/10 border border-purple-500/20 mb-12">
                        <p className="text-lg text-gray-300 leading-relaxed">
                            GPT를 글쓰기 도구가 아닌 <span className="text-purple-300 font-bold">개발 파트너</span>로 활용하여<br />
                            직접 만들고, 직접 수정하고, 직접 배포하는 경험을 제공합니다.
                        </p>
                    </div>

                    {/* 강의 특징 4포인트 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                            { icon: Code, title: "코딩 몰라도 가능", desc: "문법은 GPT에게 맡기세요. 당신은 오직 기획에만 집중" },
                            { icon: Users, title: "비전공자 대상", desc: "디자이너, 기획자, 직장인 누구나 웹서비스 제작 가능" },
                            { icon: Laptop, title: "실습 중심 수업", desc: "이론은 최소화, 직접 만들면서 배우는 실전 커리큘럼" },
                            { icon: Globe, title: "실제 배포까지", desc: "전 세계에서 접속 가능한 실제 URL 보유" },
                        ].map(({ icon: Icon, title, desc }) => (
                            <div key={title} className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10">
                                <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center shrink-0">
                                    <Icon className="w-5 h-5 text-green-400" />
                                </div>
                                <div>
                                    <h4 className="text-white font-semibold mb-1">{title}</h4>
                                    <p className="text-gray-400 text-sm">{desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
