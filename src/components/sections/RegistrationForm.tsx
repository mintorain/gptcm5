"use client";

import { useState } from "react";
import { Send, Gift, Star } from "lucide-react";

export default function RegistrationForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        courseType: "online",
        formType: "register",
        review: "",
        rating: 5,
        kakao: false,
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState<string | null>(null);

    const showReview = formData.formType === "review" || formData.formType === "both";

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.name || !formData.email) return;
        if (showReview && formData.review.length < 50) {
            alert("후기는 최소 50자 이상 작성해주세요.");
            return;
        }

        setLoading(true);
        try {
            const res = await fetch("/api/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                alert(data.error || "오류가 발생했습니다.");
                return;
            }

            if (formData.formType === "review" || formData.formType === "both") {
                setSuccess("후기 감사합니다! 🎁 선물이 이메일로 발송됩니다.");
            } else {
                setSuccess("신청이 완료되었습니다! 카카오톡에서 안내 메시지를 확인해주세요.");
            }
            setFormData({ name: "", email: "", phone: "", courseType: "online", formType: "register", review: "", rating: 5, kakao: false });
        } catch {
            alert("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="apply" className="py-32 bg-[#0A0A0A]">
            <div className="max-w-2xl mx-auto px-4">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-5">수강 신청 & 후기</h2>
                    <div className="inline-flex items-center gap-2 bg-pink-600/10 border border-pink-500/15 rounded-full px-5 py-2.5">
                        <Gift className="w-4 h-4 text-pink-400" />
                        <span className="text-sm text-pink-300">후기를 작성하시면 GPT 프롬프트 모음집을 이메일로 보내드립니다!</span>
                    </div>
                </div>

                {success ? (
                    <div className="text-center p-10 rounded-2xl bg-green-500/10 border border-green-500/30">
                        <div className="text-5xl mb-4">🎉</div>
                        <p className="text-xl text-green-300 font-semibold mb-4">{success}</p>
                        <a
                            href="http://pf.kakao.com/_UzjZG/chat"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white rounded-full bg-yellow-500 hover:bg-yellow-600 transition-all"
                        >
                            💬 카카오톡 문의하기
                        </a>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-5 p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]">
                        {/* 폼 유형 */}
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-3 text-center">유형 선택</label>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                {[
                                    { value: "register", label: "수강 신청" },
                                    { value: "review", label: "후기 작성 + 선물" },
                                    { value: "both", label: "둘 다" },
                                ].map((opt) => (
                                    <button
                                        type="button"
                                        key={opt.value}
                                        onClick={() => setFormData({ ...formData, formType: opt.value })}
                                        className={`px-4 py-3 rounded-xl text-sm font-medium transition-all border ${formData.formType === opt.value
                                            ? "bg-purple-600 border-purple-500 text-white"
                                            : "bg-white/5 border-white/10 text-gray-400 hover:border-purple-500/30"
                                            }`}
                                    >
                                        {opt.label}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* 수강 과정 */}
                        {(formData.formType === "register" || formData.formType === "both") && (
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-3 text-center">수강 과정</label>
                                <div className="grid grid-cols-2 gap-2">
                                    <button
                                        type="button"
                                        onClick={() => setFormData({ ...formData, courseType: "online" })}
                                        className={`p-4 rounded-xl text-center border transition-all ${formData.courseType === "online"
                                            ? "bg-purple-600/20 border-purple-500 text-white"
                                            : "bg-white/5 border-white/10 text-gray-400 hover:border-purple-500/30"
                                            }`}
                                    >
                                        <p className="font-semibold text-sm">온라인 과정</p>
                                        <p className="text-xs mt-1 opacity-70">33만원 · 5회</p>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => setFormData({ ...formData, courseType: "offline" })}
                                        className={`p-4 rounded-xl text-center border transition-all ${formData.courseType === "offline"
                                            ? "bg-purple-600/20 border-purple-500 text-white"
                                            : "bg-white/5 border-white/10 text-gray-400 hover:border-purple-500/30"
                                            }`}
                                    >
                                        <p className="font-semibold text-sm">오프라인 과정</p>
                                        <p className="text-xs mt-1 opacity-70">55만원 · 온라인 무료</p>
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* 이름/이메일/연락처 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">이름 *</label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
                                    placeholder="홍길동"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-300 mb-2">이메일 *</label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
                                    placeholder="email@example.com"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-300 mb-2">연락처 (선택)</label>
                            <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all"
                                placeholder="010-1234-5678"
                            />
                        </div>

                        {/* 후기 영역 */}
                        {showReview && (
                            <>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">별점</label>
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4, 5].map((s) => (
                                            <button
                                                type="button"
                                                key={s}
                                                onClick={() => setFormData({ ...formData, rating: s })}
                                            >
                                                <Star
                                                    className={`w-7 h-7 transition-colors ${s <= formData.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-600"
                                                        }`}
                                                />
                                            </button>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-300 mb-2">
                                        후기 내용 * <span className="text-gray-500 font-normal">({formData.review.length}/50자 이상)</span>
                                    </label>
                                    <textarea
                                        required
                                        rows={4}
                                        value={formData.review}
                                        onChange={(e) => setFormData({ ...formData, review: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all resize-none"
                                        placeholder="강의에 대한 솔직한 후기를 남겨주세요..."
                                    />
                                </div>
                            </>
                        )}

                        {/* 카카오톡 */}
                        <label className="flex items-center gap-3 cursor-pointer">
                            <input
                                type="checkbox"
                                checked={formData.kakao}
                                onChange={(e) => setFormData({ ...formData, kakao: e.target.checked })}
                                className="w-5 h-5 rounded border-white/20 bg-white/5 text-purple-600 focus:ring-purple-500"
                            />
                            <span className="text-sm text-gray-300">카카오톡 오픈채팅에 참여하겠습니다</span>
                        </label>

                        {/* 제출 버튼 */}
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full py-4 rounded-xl text-lg font-semibold text-white bg-purple-600 hover:bg-purple-700 transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                            {loading ? (
                                <span className="animate-spin w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                            ) : (
                                <>
                                    <Send className="w-5 h-5" />
                                    신청 & 후기 완료하기
                                </>
                            )}
                        </button>
                    </form>
                )}
            </div>
        </section>
    );
}
