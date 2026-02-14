"use client";

import { Gift } from "lucide-react";
import { useEffect, useState } from "react";

export default function FloatingCTA() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 500);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    if (!visible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden p-4 bg-[#0A0A0A]/95 backdrop-blur border-t border-white/10">
            <a
                href="#apply"
                className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-500/25"
            >
                <Gift className="w-5 h-5" />
                수강신청 + 🎁 후기선물
            </a>
        </div>
    );
}
