# GPT 콘텐츠 메이커 5기 — 랜딩페이지

공개특강 후기 선물 & 수강 신청을 위한 원페이지 랜딩사이트

## 배포 URL

- **Vercel (메인)**: https://gptcm5.vercel.app
- **GitHub Pages**: https://mintorain.github.io/gptcm5/

## 기술 스택

| 구분 | 기술 |
|------|------|
| 마크업 | HTML5 (단일 파일) |
| 스타일 | TailwindCSS CDN + 커스텀 CSS 변수 |
| 폰트 | Noto Sans KR, Orbitron, Material Symbols |
| 배포 | Vercel (정적 사이트) |
| 폼 처리 | Google Apps Script → Google Sheets |
| SEO | Open Graph, Twitter Card, JSON-LD, 사이트맵 |

## 프로젝트 구조

```
gptcm5/
├── index.html              # 메인 랜딩페이지 (모든 CSS/JS 인라인)
├── sitemap.xml             # 검색엔진 사이트맵
├── robots.txt              # 크롤링 허용 조건
├── vercel.json             # Vercel 정적 배포 설정
├── naverd841...html        # 네이버 서치어드바이저 인증 파일
├── mirae_logo1.png         # 미래이음연구소 로고
├── mirae_logo2.png         # 로고 (대체)
├── lyw1~4.jpg/png          # 수료생 후기 이미지
├── 바이브코딩은 내사랑.mp3  # BGM 트랙 1
├── 바이브 코딩 찬양가.mp3   # BGM 트랙 2
├── 개인정보처리지침.md      # 법률 문서 원본
├── 이용약관.md              # 법률 문서 원본
├── 이용안내.md              # 법률 문서 원본
└── 푸터.md                  # 푸터 정보 원본
```

## 주요 기능

### 페이지 섹션
- 히어로 배너 (D-Day 카운트다운 타이머)
- 커리큘럼 안내
- 바이브코딩 웹서비스 포트폴리오
- 공개특강 다시보기 (폼 제출 후 잠금 해제)
- 수료생 후기 갤러리
- 후기 작성 가이드 & 선물 안내
- 수강 신청 섹션
- FAQ 아코디언
- 푸터 (SNS SVG 아이콘, 법률 모달 3종)

### 폼 & 데이터
- **공개특강 신청 폼**: 이름, 연락처, 이메일 → Google Sheets 기록 → 영상 잠금 해제
- **후기 선물 신청 폼**: 이름, 연락처, 이메일, 후기 URL → Google Sheets 기록
- Hidden iframe 방식으로 CORS 우회 (acceptCharset UTF-8)
- localStorage로 중복 제출 방지 및 자동 입력

### UI/UX
- **다크/라이트 모드**: CSS 변수 기반 테마 전환 (기본 다크모드)
- **라이트 모드 그라데이션 배경**: cyan → purple → pink
- **사이버펑크 네온 테마**: 글래스모피즘, 홀로그램 텍스트, 네온 글로우
- **BGM 플레이어**: 자동재생, 2곡 순환, 볼륨 조절
- **YouTube 영상 클릭 시 BGM 자동 정지** (window blur 감지)
- **반응형 디자인**: 모바일/데스크탑 적응
- **Floating CTA**: 데스크탑(우하단), 모바일(하단 고정바)

### SEO
- Open Graph / Twitter Card 메타태그
- JSON-LD 구조화 데이터 (Course 스키마)
- 네이버 서치어드바이저 인증 (메타태그 + 인증파일)
- sitemap.xml / robots.txt
- canonical URL 설정

## 개발 이력

| 커밋 | 내용 |
|------|------|
| `5fac66c` | 랜딩페이지 초기 구현 |
| `5659082` | 푸터 확장 + 법률 모달 3종 + 폼 중복입력 방지 |
| `14e32bb` | Google Sheets 연동 CORS 오류 수정 |
| `08de0ed` | 폰트 사이즈 확대 + YouTube 임베드 수정 |
| `a03b102` | YouTube 직접 재생 + Google Sheets hidden iframe 전송 |
| `306b6fe` | YouTube nocookie 도메인 + UTF-8 인코딩 + BGM 왼쪽 이동 |
| `32c052e` | Google Sheets hidden iframe 방식 복원 |
| `63c99b5` | 공개특강 비디오 게이트 복원 (신청 후 시청) |
| `65badd7` | 다크모드 로고 가독성 개선 |
| `24f0741` | 로고 배경 그라데이션 변경 |
| `946dc76` | 라이트모드 그라데이션 배경 적용 |
| `f909bfb` | 입금 계좌 정보 변경 (이신우) |
| `03cfd5b` | SNS 이니셜 아이콘 적용 |
| `f2f86b9` | BGM 자동재생 + 영상 재생 시 음악 정지 |
| `844dc47` | 푸터 2컬럼 레이아웃 + SNS SVG 아이콘 |
| `7ba7635` | SEO 메타태그, 사이트맵, robots.txt 추가 |
| `f8da052` | Vercel 정적 사이트 배포 설정 |
| `6bdfc92` | SEO URL을 Vercel 주소로 변경 |
| `3b011ba` | 네이버 서치어드바이저 인증 코드 추가 |
| `0f082ba` | 네이버 서치어드바이저 인증 파일 추가 |
| `90b6923` | 이신우 프로필 URL 오타 수정 |
| `d0dc83b` | YouTube 영상 클릭 시 BGM 자동 정지 |

## 외부 연동

| 서비스 | 용도 | URL |
|--------|------|-----|
| Google Apps Script | 폼 데이터 수집 | Google Sheets 기록 |
| YouTube | 공개특강 녹화 다시보기 | youtube-nocookie.com 임베드 |
| 네이버 서치어드바이저 | 네이버 검색 등록 | searchadvisor.naver.com |
| Google Search Console | 구글 검색 등록 | search.google.com/search-console |
| 카카오톡 | 고객 상담 채널 | pf.kakao.com/_UzjZG/chat |

## 로컬 개발

```bash
# 로컬 서버 실행
python -m http.server 8080

# 브라우저에서 열기
http://localhost:8080
```

## 배포

```bash
# Vercel 배포
npx vercel --prod --yes
```
