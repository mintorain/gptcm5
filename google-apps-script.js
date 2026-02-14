/**
 * ============================================
 * GPT콘텐츠메이커 5기 - 랜딩페이지 폼 데이터 수집
 * Google Apps Script (Google Sheets용)
 * ============================================
 *
 * 📌 설정 방법:
 * 1. Google Sheets(15c2G5VB6y5B2rQ4JMtT9V64EU0qgV7v4LljX92Aw3DM)를 엽니다.
 * 2. 상단 메뉴 → [확장 프로그램] → [Apps Script] 클릭
 * 3. 기존 코드를 모두 지우고, 이 파일의 내용을 전부 붙여넣기
 * 4. 💾 저장 (Ctrl+S)
 * 5. 상단 [배포] → [새 배포] 클릭
 *    - 유형 선택: "웹 앱"
 *    - 실행 주체: "나"
 *    - 액세스 권한: "모든 사용자"
 *    - [배포] 클릭
 * 6. 생성된 URL을 복사하여 .env.local의 GOOGLE_SCRIPT_URL에 붙여넣기
 */

// 구글 시트 ID
const SHEET_ID = "15c2G5VB6y5B2rQ4JMtT9V64EU0qgV7v4LljX92Aw3DM";

// 시트 이름 (변경 가능)
const SHEET_NAME = "폼응답";

/**
 * 시트 초기화 - 헤더 행 자동 생성
 * 처음 한 번만 실행하면 됩니다.
 * Apps Script 편집기에서 이 함수를 선택하고 ▶ 실행 버튼 클릭
 */
function setupSheet() {
    const ss = SpreadsheetApp.openById(SHEET_ID);
    let sheet = ss.getSheetByName(SHEET_NAME);

    // 시트가 없으면 새로 생성
    if (!sheet) {
        sheet = ss.insertSheet(SHEET_NAME);
    }

    // 헤더 행 설정
    const headers = [
        "타임스탬프",
        "이름",
        "이메일",
        "연락처",
        "수강과정",
        "유형",
        "후기내용",
        "별점",
        "카카오참여"
    ];

    // 첫 번째 행에 헤더 작성
    sheet.getRange(1, 1, 1, headers.length).setValues([headers]);

    // 헤더 스타일 적용
    const headerRange = sheet.getRange(1, 1, 1, headers.length);
    headerRange.setFontWeight("bold");
    headerRange.setBackground("#4A00E0");
    headerRange.setFontColor("#FFFFFF");
    headerRange.setHorizontalAlignment("center");

    // 열 너비 자동 조정
    sheet.setColumnWidth(1, 180);  // 타임스탬프
    sheet.setColumnWidth(2, 100);  // 이름
    sheet.setColumnWidth(3, 200);  // 이메일
    sheet.setColumnWidth(4, 140);  // 연락처
    sheet.setColumnWidth(5, 100);  // 수강과정
    sheet.setColumnWidth(6, 100);  // 유형
    sheet.setColumnWidth(7, 400);  // 후기내용
    sheet.setColumnWidth(8, 60);   // 별점
    sheet.setColumnWidth(9, 100);  // 카카오참여

    // 첫 번째 행 고정
    sheet.setFrozenRows(1);

    Logger.log("✅ 시트 초기화 완료! 시트 이름: " + SHEET_NAME);
}

/**
 * POST 요청 처리 - 랜딩페이지에서 폼 데이터 수신
 */
function doPost(e) {
    try {
        // JSON 파싱
        const data = JSON.parse(e.postData.contents);

        // 시트 열기
        const ss = SpreadsheetApp.openById(SHEET_ID);
        let sheet = ss.getSheetByName(SHEET_NAME);

        // 시트가 없으면 자동 생성
        if (!sheet) {
            setupSheet();
            sheet = ss.getSheetByName(SHEET_NAME);
        }

        // 수강과정 한글 변환
        const courseTypeKR = {
            "online": "온라인",
            "offline": "오프라인"
        };

        // 유형 한글 변환
        const formTypeKR = {
            "register": "수강 신청",
            "review": "후기 작성",
            "both": "수강 신청 + 후기"
        };

        // 한국 시간 타임스탬프
        const now = new Date();
        const kst = Utilities.formatDate(now, "Asia/Seoul", "yyyy-MM-dd HH:mm:ss");

        // 데이터 행 구성 (헤더 순서와 동일)
        const row = [
            kst,                                           // 타임스탬프
            data.name || "",                               // 이름
            data.email || "",                              // 이메일
            data.phone || "",                              // 연락처
            courseTypeKR[data.courseType] || data.courseType || "",  // 수강과정
            formTypeKR[data.formType] || data.formType || "",      // 유형
            data.review || "",                             // 후기내용
            data.rating || "",                             // 별점
            data.kakao ? "참여" : "미참여"                  // 카카오참여
        ];

        // 시트에 데이터 추가 (마지막 행 다음에)
        sheet.appendRow(row);

        // 성공 응답
        return ContentService
            .createTextOutput(JSON.stringify({ result: "success" }))
            .setMimeType(ContentService.MimeType.JSON);

    } catch (error) {
        // 에러 응답
        Logger.log("❌ 에러: " + error.message);
        return ContentService
            .createTextOutput(JSON.stringify({ result: "error", message: error.message }))
            .setMimeType(ContentService.MimeType.JSON);
    }
}

/**
 * GET 요청 처리 - 테스트용
 * 브라우저에서 배포 URL을 직접 열면 이 함수가 실행됩니다.
 */
function doGet(e) {
    return ContentService
        .createTextOutput(JSON.stringify({
            status: "ok",
            message: "GPT콘텐츠메이커 5기 폼 API가 정상 작동 중입니다.",
            sheetId: SHEET_ID,
            sheetName: SHEET_NAME
        }))
        .setMimeType(ContentService.MimeType.JSON);
}

/**
 * 테스트 함수 - Apps Script 편집기에서 직접 실행하여 테스트
 */
function testDoPost() {
    const testData = {
        postData: {
            contents: JSON.stringify({
                name: "테스트 사용자",
                email: "test@example.com",
                phone: "010-0000-0000",
                courseType: "online",
                formType: "both",
                review: "이것은 테스트 후기입니다. 바이브코딩 강의가 정말 좋았습니다. 비전공자도 쉽게 따라할 수 있어서 추천합니다!",
                rating: 5,
                kakao: true
            })
        }
    };

    const result = doPost(testData);
    Logger.log("테스트 결과: " + result.getContent());
}
