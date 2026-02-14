import { Phone, Mail, MessageCircle, ExternalLink } from "lucide-react";

export default function Footer() {
    return (
        <footer className="py-16 bg-[#050510] border-t border-white/5">
            <div className="max-w-6xl mx-auto px-4">
                {/* VOD 강좌 배너 */}
                <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-500/20 text-center">
                    <p className="text-gray-300 mb-3">두온교육 라이브클래스에서 더 많은 VOD 강좌를 만나보세요</p>
                    <a
                        href="https://duonedu.liveklass.com/classes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 font-semibold transition-colors"
                    >
                        두온교육 라이브클래스 바로가기 <ExternalLink className="w-4 h-4" />
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* 회사 정보 */}
                    <div>
                        <h4 className="text-white font-bold mb-4">두온교육(주) × 미래이음연구소</h4>
                        <div className="space-y-2 text-sm text-gray-500">
                            <p>사업자등록번호: 264-87-01676</p>
                            <p>통신판매업신고: 2020-경기평택-0204</p>
                            <p>주소: 경기도 평택시 고덕중앙로 322 704호</p>
                        </div>
                    </div>

                    {/* 연락처 */}
                    <div>
                        <h4 className="text-white font-bold mb-4">연락처</h4>
                        <div className="space-y-3">
                            <a href="tel:010-3343-4000" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                                <Phone className="w-4 h-4" /> 010-3343-4000
                            </a>
                            <a href="mailto:mintorain@gmail.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                                <Mail className="w-4 h-4" /> mintorain@gmail.com
                            </a>
                            <a href="http://pf.kakao.com/_UzjZG/chat" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm">
                                <MessageCircle className="w-4 h-4" /> 카카오톡 문의
                            </a>
                        </div>
                    </div>

                    {/* 법적 링크 */}
                    <div>
                        <h4 className="text-white font-bold mb-4">안내</h4>
                        <div className="space-y-3">
                            <a href="http://duon.myds.me/privacy.html" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors text-sm">
                                개인정보처리방침
                            </a>
                            <a href="http://duon.myds.me/terms.html" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors text-sm">
                                이용약관
                            </a>
                            <a href="http://duon.myds.me/guide.html" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-white transition-colors text-sm">
                                이용안내
                            </a>
                        </div>
                    </div>
                </div>

                {/* 저작권 */}
                <div className="mt-12 pt-8 border-t border-white/5 text-center">
                    <p className="text-gray-600 text-sm">
                        © 2025 두온교육(주) × 미래이음연구소. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
