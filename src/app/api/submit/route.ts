import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, courseType, formType, review, rating, kakao } =
      body;

    if (!name || !email) {
      return NextResponse.json(
        { error: "이름과 이메일은 필수입니다." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "올바른 이메일 형식이 아닙니다." },
        { status: 400 }
      );
    }

    if (
      (formType === "review" || formType === "both") &&
      (!review || review.length < 50)
    ) {
      return NextResponse.json(
        { error: "후기는 최소 50자 이상 작성해주세요." },
        { status: 400 }
      );
    }

    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
    if (!scriptUrl) {
      console.error("GOOGLE_SCRIPT_URL 환경 변수가 설정되지 않았습니다.");
      return NextResponse.json(
        { error: "서버 설정 오류가 발생했습니다." },
        { status: 500 }
      );
    }

    const response = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone: phone || "",
        courseType: courseType || "",
        formType: formType || "",
        review: review || "",
        rating: rating || "",
        kakao: kakao || false,
      }),
    });

    if (!response.ok) {
      throw new Error(`Google Sheets 저장 실패: ${response.status}`);
    }

    return NextResponse.json({ result: "success" });
  } catch (error) {
    console.error("폼 제출 오류:", error);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요." },
      { status: 500 }
    );
  }
}
