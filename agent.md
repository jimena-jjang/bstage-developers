# b.stage 개발자 센터 구축 플랜

> **목표:** 토스페이먼츠 개발자 센터(https://developers.tosspayments.com)의 레이아웃·구조를 레퍼런스로 삼아 'b.stage 개발자 센터'를 구축한다.
> UI 스타일(컬러, 타이포그래피, 여백, 그림자 등) 최종 스펙은 **https://bstage.in** 및 **https://support.bstage.in/hc/ko** 를 따른다.

---

## 기술 스택

| 역할 | 선택 |
|---|---|
| 프레임워크 | Next.js 14 (App Router) |
| 언어 | TypeScript |
| 스타일링 | Tailwind CSS v3 |
| 컴포넌트 기반 | shadcn/ui |
| 애니메이션 | Framer Motion |
| 아이콘 | Lucide React |
| 폰트 | Pretendard (b.stage 브랜드 폰트) |
| 패키지 매니저 | pnpm |

---

## 디자인 토큰 (b.stage 브랜드 기반)

```
Primary Blue  : #0066FF  (b.stage 메인 브랜드 컬러)
Primary Dark  : #0047B3
Surface       : #FFFFFF
Surface Alt   : #F7F8FA
Border        : #E8EAED
Text Primary  : #1A1D27
Text Secondary: #6B7280
Text Muted    : #9CA3AF
Warning BG    : #FFFBEB
Warning Border: #FCD34D
Warning Text  : #92400E
Sidebar BG    : #F7F8FA
Sidebar Active: #EEF2FF
Sidebar Hover : #F3F4F6
Radius SM     : 6px
Radius MD     : 10px
Radius LG     : 16px
Shadow SM     : 0 1px 3px rgba(0,0,0,0.08)
Shadow MD     : 0 4px 16px rgba(0,0,0,0.10)
Shadow LG     : 0 8px 32px rgba(0,0,0,0.14)
```

---

## Phase 0 — 프로젝트 초기 세팅

> ✅ **완료** — Next.js 16.2.1 + React 19 + Tailwind CSS v4로 생성 (npx create-next-app)

- [x] `npx create-next-app@latest bstage-dev-center --typescript --tailwind --app --eslint` 로 프로젝트 생성
- [x] `npm install framer-motion lucide-react clsx tailwind-merge` 설치
- [x] `app/globals.css`에 Pretendard CDN import 및 `@theme` 블록으로 b.stage 디자인 토큰 정의
- [x] `lib/utils.ts` cn() 유틸리티 함수 생성
- [ ] 프로젝트 폴더 구조 설계:
  ```
  app/
    (root)/
      page.tsx              ← 홈(랜딩)
    docs/
      reference/
        page.tsx            ← API 레퍼런스 랜딩
        [slug]/
          page.tsx          ← 개별 API 문서
    layout.tsx              ← 전역 레이아웃 (GNB 포함)
  components/
    layout/
      Header.tsx
      Sidebar.tsx
      TableOfContents.tsx
    ui/
      DropdownMenu.tsx
      SpaceSelector.tsx
      VersionBadge.tsx
      WarningBanner.tsx
      ApiCard.tsx
  lib/
    navigation.ts           ← GNB·사이드바 메뉴 데이터
    api-reference.ts        ← API 레퍼런스 콘텐츠 데이터
  ```
- [ ] `asset/` 폴더의 레퍼런스 스크린샷을 `public/references/`로 복사

---

## Phase 1 — 메인 레이아웃 및 GNB(헤더) 구현

> ✅ **완료** — `components/layout/Header.tsx` 구현

### 1-1. 전역 레이아웃 (`app/layout.tsx`)
- [x] 전체를 `flex flex-col min-h-screen`으로 감싸는 루트 레이아웃 구성
- [x] `<Header />` → `<main>` 구조 확립
- [x] 헤더 높이 `h-[60px]` 고정, `position: sticky top-0 z-50` 처리
- [x] 헤더 하단 `border-b border-[#E8EAED]` + `backdrop-blur-sm bg-white/95` 효과

### 1-2. GNB 컴포넌트 (`components/layout/Header.tsx`)
- [x] 좌측: b.stage 로고 + "개발자센터" 텍스트 배지
- [x] 중앙 네비게이션 메뉴 항목 구성 (가이드, API & SDK, 샌드박스, 커뮤니티·지원, 블로그)
- [x] 우측: 검색 아이콘(돋보기) + `로그인` 버튼
- [x] 반응형: `md:` 미만에서 햄버거 메뉴 + Framer Motion 슬라이드 드로어

### 1-3. API & SDK 드롭다운 (Header 내 인라인 구현)
- [x] `onMouseEnter` / `onMouseLeave` + 150ms 딜레이 처리
- [x] `bg-white rounded-[12px] shadow-[0_8px_32px_rgba(0,0,0,0.14)]` 패널
- [x] API 레퍼런스 / SDK 레퍼런스 항목 (아이콘 + 설명)
- [x] Framer Motion `AnimatePresence` fade+slide 애니메이션

---

## Phase 2 — API 레퍼런스 랜딩 페이지 구현

> 레퍼런스: `asset/api screen reference.png` (토스페이먼츠 코어 API 화면)
> 구현 대상 URL: `/docs/reference`

### 2-1. 3-컬럼 레이아웃 구성 (`app/docs/reference/page.tsx`)
- [x] 전체를 `flex` 컨테이너로 구성 (좌 사이드바 / 메인 콘텐츠 / 우 목차)
- [x] 사이드바와 ToC는 `sticky top-[60px] h-[calc(100vh-60px)] overflow-y-auto`로 고정

### 2-2. 좌측 사이드바 (`components/layout/Sidebar.tsx`)
- [x] 전체 메뉴 트리 구조 (API 키, 인증, 코어 API > 결제 ~ 기타 안내, 브랜드페이, 파트너, 에러 코드)
- [x] 활성 항목: `bg-[#eef2ff] text-[#0066ff]` + 좌측 파란 인디케이터 바
- [x] Framer Motion accordion 펼침/접기 애니메이션

### 2-3. 버전 선택기 (`components/ui/VersionBadge.tsx`)
- [x] 커스텀 드롭다운 (`2024-06-01`, `2023-08-01`, `2022-11-16`)
- [x] `border border-[#e8eaed] rounded-[6px]` 디자인

### 2-4. 메인 콘텐츠 헤더 영역
- [x] Breadcrumb `API & SDK` + 버전 선택기
- [x] `코어 API` 제목 `text-[32px] font-bold`
- [x] 부제목 `text-[15px] text-[#6b7280]`

### 2-5. 카드형 메뉴 그리드 (`components/ui/ApiCard.tsx`)
- [x] 4개 카드 (API 키 / 인증 및 기타 헤더 설정 / 요청·응답 분문 / 보안)
- [x] `grid-cols-2` 그리드, hover 시 shadow + translate 효과
- [x] Lucide Key / Shield / FileJson / Lock 아이콘

### 2-6. 경고 배너 (`components/ui/WarningBanner.tsx`)
- [x] `bg-[#fffbeb] border border-[#fcd34d] rounded-[10px]`
- [x] `AlertTriangle` 아이콘 + 링크 텍스트

### 2-7. 하위 섹션 — 결제/지급대행/거래 등 7개 파트
- [x] 각 섹션 헤더 + 설명 + 구분선 + 항목 리스트

### 2-8. 우측 목차 (`components/layout/TableOfContents.tsx`)
- [x] `IntersectionObserver`로 스크롤 추적
- [x] 활성 항목 `text-[#0066ff] font-medium`

---

## Phase 3 — Space 선택 드롭다운 컴포넌트 구현

> ✅ **완료** — `components/ui/SpaceSelector.tsx` 구현

### 3-1. SpaceSelector 컴포넌트
- [x] 트리거 버튼: `border border-[#e8eaed] rounded-[8px]` + ChevronDown rotate 애니메이션
- [x] 패널: `rounded-[16px] shadow-[0_8px_32px_rgba(0,0,0,0.14)]`
- [x] 선택됨: `bg-[#eef2ff]` + `Check` 아이콘
- [x] Account / Home / Space / Content 항목 (User / Home / LayoutGrid / FileText 아이콘)
- [x] 외부 클릭 감지로 패널 닫기
- [x] Framer Motion scale + opacity 애니메이션

### 3-2. SpaceSelector 배치
- [x] `components/ui/SpaceSelector.tsx`로 독립 컴포넌트화 (필요 시 Header/Sidebar에 삽입)

---

## Phase 4 — 반응형 및 접근성 처리

> ✅ **완료** — 모든 컴포넌트에 반응형 + ARIA 속성 적용

- [x] `lg:` 이상: 3-컬럼 풀 레이아웃 (`hidden lg:block` 사이드바)
- [x] `md:` 미만: 사이드바 숨김 + 햄버거 드로어 (Header 내 구현)
- [x] `xl:` 미만: ToC 숨김 (`hidden xl:block`)
- [x] 모바일 GNB: Framer Motion `x: 100% → 0` 슬라이드 드로어 + `bg-black/40` 오버레이
- [x] `aria-expanded`, `aria-haspopup`, `role="menu"`, `role="listbox"`, `aria-selected` 적용
- [x] `focus-visible` 포커스 링 전역 설정 (`globals.css`)

---

## Phase 5 — 홈(랜딩) 페이지 구현

> ✅ **완료** — `app/page.tsx` 구현

- [x] 히어로 섹션: `from-[#0066ff] via-[#0052cc] to-[#003d99]` 그라디언트 + 공지 배지
- [x] 4개 진입점 카드 그리드 (API 레퍼런스 / SDK / 빠른 시작 / 샌드박스)
- [x] 하단 최신 업데이트 섹션 (v2024-06-01 / v2023-08-01 / v2022-11-16 타임라인)

---

## Phase 6 — 마무리 및 QA

- [x] 빌드 성공 확인 (`npm run build` — 0 errors, 3 static routes)
- [x] 메타태그 및 OG 태그 설정 (`b.stage 개발자센터`)
- [ ] Lighthouse 점수 확인: Performance ≥ 90, Accessibility ≥ 95
- [ ] 모든 드롭다운·애니메이션 크로스 브라우저 테스트 (Chrome / Safari / Firefox)
- [ ] 스크린샷 레퍼런스(`asset/api screen reference.png`)와 구현 결과 픽셀 비교
- [ ] b.stage 브랜드 컬러 일관성 최종 검수

---

## 작업 순서 요약

```
Phase 0 → Phase 1 (GNB) → Phase 2 (API 레퍼런스 페이지) → Phase 3 (Space 선택기)
→ Phase 4 (반응형) → Phase 5 (홈 페이지) → Phase 6 (QA)
```

---

## 핵심 레퍼런스

| 항목 | URL / 파일 |
|---|---|
| 레이아웃 레퍼런스 | https://developers.tosspayments.com/ |
| API 레퍼런스 페이지 | https://docs.tosspayments.com/reference |
| 스크린샷 레퍼런스 | `asset/api screen reference.png` |
| b.stage 브랜드 | https://bstage.in/everlasting-ownership/?hl=ko |
| b.stage 서포트 UI | https://support.bstage.in/hc/ko |
