import Link from "next/link";
import {
  BookOpen,
  Code2,
  Zap,
  FlaskConical,
  ArrowRight,
  GitBranch,
  Play,
} from "lucide-react";

const featureCards = [
  {
    href: "/docs/reference",
    icon: BookOpen,
    title: "API 레퍼런스",
    description:
      "엔드포인트, 파라미터, 요청·응답 객체를 빠르게 확인하세요. 코어 API부터 브랜드페이까지 전체 레퍼런스를 제공합니다.",
    badge: "Core",
    badgeColor: "bg-[#eef2ff] text-[#0066ff]",
    iconBg: "bg-[#eef2ff]",
    iconColor: "text-[#0066ff]",
    topBar: "bg-[#0066ff]",
    titleHover: "group-hover:text-[#0066ff]",
    linkColor: "text-[#0066ff]",
  },
  {
    href: "/docs/sdk",
    icon: Code2,
    title: "SDK 레퍼런스",
    description:
      "JavaScript, iOS, Android 등 다양한 플랫폼 SDK를 활용해 b.stage 기능을 손쉽게 연동하세요.",
    badge: "SDK",
    badgeColor: "bg-[#f0fdf4] text-[#16a34a]",
    iconBg: "bg-[#f0fdf4]",
    iconColor: "text-[#16a34a]",
    topBar: "bg-[#16a34a]",
    titleHover: "group-hover:text-[#16a34a]",
    linkColor: "text-[#16a34a]",
  },
  {
    href: "/docs/guide/quickstart",
    icon: Zap,
    title: "빠른 시작 가이드",
    description:
      "처음 b.stage API를 연동한다면 여기서 시작하세요. 5분 안에 첫 번째 API 호출을 완료할 수 있습니다.",
    badge: "Guide",
    badgeColor: "bg-[#fff7ed] text-[#c2410c]",
    iconBg: "bg-[#fff7ed]",
    iconColor: "text-[#c2410c]",
    topBar: "bg-[#c2410c]",
    titleHover: "group-hover:text-[#c2410c]",
    linkColor: "text-[#c2410c]",
  },
  {
    href: "/sandbox",
    icon: FlaskConical,
    title: "샌드박스",
    description:
      "실제 데이터에 영향 없이 API를 테스트해보세요. 테스트 키로 안전하게 개발 환경을 구성할 수 있습니다.",
    badge: "Test",
    badgeColor: "bg-[#faf5ff] text-[#7c3aed]",
    iconBg: "bg-[#faf5ff]",
    iconColor: "text-[#7c3aed]",
    topBar: "bg-[#7c3aed]",
    titleHover: "group-hover:text-[#7c3aed]",
    linkColor: "text-[#7c3aed]",
  },
];

const stats = [
  { value: "3M+", label: "월간 활성 사용자" },
  { value: "250+", label: "글로벌 클라이언트" },
  { value: "230개국", label: "서비스 지역" },
  { value: "ISO 27001", label: "보안 & 개인정보 인증" },
];

const quickSteps = [
  {
    step: "01",
    title: "계정 생성 & API 키 발급",
    description:
      "개발자 계정을 만들고 API 키를 발급받으세요. 샌드박스 환경에서 무료로 테스트할 수 있습니다.",
  },
  {
    step: "02",
    title: "문서 읽기 & SDK 설치",
    description:
      "REST API 레퍼런스와 각 기능별 가이드를 확인하고, 원하는 언어의 SDK를 설치하세요.",
  },
  {
    step: "03",
    title: "빌드 & 배포",
    description:
      "b.stage의 인프라 위에서 나만의 팬덤 플랫폼을 배포하세요. 스케일업은 b.stage가 책임집니다.",
  },
];

const updates = [
  {
    version: "v2024-06-01",
    date: "2024년 6월 1일",
    title: "결제 API 파라미터 스키마 개선",
    description:
      "Payment 객체의 응답 필드가 확장되고, 취소 관련 파라미터가 정리되었습니다.",
  },
  {
    version: "v2023-08-01",
    date: "2023년 8월 1일",
    title: "지급대행 API 정식 출시",
    description: "수취인 지급 및 지급 조회 API가 정식 출시되었습니다.",
  },
  {
    version: "v2022-11-16",
    date: "2022년 11월 16일",
    title: "Settlement 처리 API 추가",
    description: "정산 내역 조회 및 Settlement 처리 API가 추가되었습니다.",
  },
];

const CODE_PREVIEW = `import { BStageClient } from '@bstage/sdk';

const client = new BStageClient({
  apiKey: process.env.BSTAGE_API_KEY,
  spaceId: 'your-space-id',
});

// 팬 커뮤니티 피드 조회
const feed = await client.community.getFeed({
  limit: 20,
  type: 'all',
});

console.log(\`\${feed.total} posts loaded\`);`;

export default function HomePage() {
  return (
    <div>
      {/* ── 히어로 섹션 (다크) ── */}
      <section className="relative overflow-hidden bg-[#060B18] py-20 lg:py-28 px-6">
        {/* 그리드 패턴 */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,102,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,102,255,0.05) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />
        {/* 글로우 오브 */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full bg-[#0066ff]/10 blur-[160px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-[#0066ff]/6 blur-[120px] pointer-events-none" />

        <div className="relative max-w-[1280px] mx-auto">
          {/* 배지 */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 bg-[#0066ff]/10 border border-[#0066ff]/25 rounded-full px-4 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0066ff] inline-block" />
              <span className="text-[13px] text-white/60 font-medium">
                최신 버전: API v2024-06-01 업데이트
              </span>
            </div>
          </div>

          {/* 2열 레이아웃: 텍스트 + 코드 프리뷰 */}
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
            {/* 텍스트 영역 */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-[42px] sm:text-[54px] font-bold text-white leading-[1.1] tracking-tight">
                팬덤 비즈니스를 위한
                <br />
                <span className="text-[#0066ff]">플랫폼</span>, 직접 빌드하세요
              </h1>
              <p className="text-[17px] text-white/50 mt-5 leading-relaxed max-w-[460px] mx-auto lg:mx-0">
                b.stage의 강력한 API와 SDK를 활용해 아티스트와 팬을 잇는
                나만의 플랫폼을 만들어보세요. 커뮤니티, 커머스, 라이브,
                멤버십 — 팬덤 비즈니스의 모든 것을 코드로 구현합니다.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mt-8">
                <Link
                  href="/docs/reference"
                  className="flex items-center gap-2 px-6 py-3 bg-[#0066ff] text-white font-semibold rounded-[10px] hover:bg-[#0052cc] transition-colors text-[15px]"
                >
                  API 레퍼런스 보기
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/docs/guide/quickstart"
                  className="flex items-center gap-2 px-6 py-3 bg-white/8 border border-white/12 text-white/80 font-semibold rounded-[10px] hover:bg-white/12 transition-colors text-[15px]"
                >
                  <Zap className="w-4 h-4" />
                  빠른 시작
                </Link>
              </div>
            </div>

            {/* 코드 윈도우 */}
            <div className="flex-1 w-full lg:max-w-[500px]">
              <div className="bg-[#0D1526] border border-white/8 rounded-[16px] overflow-hidden shadow-[0_24px_64px_rgba(0,0,0,0.5)]">
                {/* 윈도우 크롬 */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8 bg-white/3">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f57] block" />
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e] block" />
                  <span className="w-3 h-3 rounded-full bg-[#28c840] block" />
                  <span className="ml-2 text-[12px] text-white/25 font-mono">
                    quickstart.js
                  </span>
                </div>
                <pre className="p-5 text-[13px] text-white/55 font-mono leading-[1.8] overflow-x-auto">
                  {CODE_PREVIEW}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 신뢰 지표 바 ── */}
      <div className="bg-white border-b border-[#e8eaed]">
        <div className="max-w-[1280px] mx-auto px-6 py-5">
          <div className="flex flex-wrap items-center justify-center gap-x-0 gap-y-3">
            {stats.map((stat, i) => (
              <div key={i} className="flex items-center">
                {i > 0 && (
                  <span className="hidden sm:block w-px h-5 bg-[#e8eaed] mx-8" />
                )}
                <div className="text-center px-4 sm:px-0">
                  <span className="text-[22px] font-bold text-[#1a1d27]">
                    {stat.value}
                  </span>
                  <span className="text-[13px] text-[#6b7280] ml-2">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 기능 카드 그리드 ── */}
      <section className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-[28px] font-bold text-[#1a1d27]">
            무엇이 필요하신가요?
          </h2>
          <p className="text-[15px] text-[#6b7280] mt-2">
            개발에 필요한 모든 리소스를 한 곳에서 찾아보세요.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featureCards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.href}
                href={card.href}
                className="group flex flex-col bg-white border border-[#e8eaed] rounded-[16px] overflow-hidden hover:shadow-[0_4px_20px_rgba(0,0,0,0.10)] hover:-translate-y-[2px] transition-all duration-200"
              >
                {/* 상단 컬러 바 */}
                <div className={`h-[3px] ${card.topBar}`} />
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div className="flex items-start justify-between">
                    <div
                      className={`w-10 h-10 rounded-[10px] ${card.iconBg} flex items-center justify-center`}
                    >
                      <Icon className={`w-5 h-5 ${card.iconColor}`} />
                    </div>
                    <span
                      className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${card.badgeColor}`}
                    >
                      {card.badge}
                    </span>
                  </div>
                  <div>
                    <h3
                      className={`text-[16px] font-semibold text-[#1a1d27] ${card.titleHover} transition-colors`}
                    >
                      {card.title}
                    </h3>
                    <p className="text-[13px] text-[#6b7280] mt-1.5 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                  <div
                    className={`flex items-center gap-1 text-[13px] ${card.linkColor} font-medium mt-auto`}
                  >
                    바로가기
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── 빠른 시작 3단계 ── */}
      <section className="bg-[#f7f8fa] border-y border-[#e8eaed] py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="text-center mb-10">
            <h2 className="text-[28px] font-bold text-[#1a1d27]">
              3단계로 시작하는 b.stage 개발
            </h2>
            <p className="text-[15px] text-[#6b7280] mt-2">
              빠르게 시작하고, 바로 빌드하세요.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {quickSteps.map((step, i) => (
              <div
                key={i}
                className="relative bg-white border border-[#e8eaed] rounded-[16px] p-6"
              >
                <div className="text-[48px] font-bold text-[#f0f0f2] leading-none select-none mb-4">
                  {step.step}
                </div>
                <h3 className="text-[16px] font-semibold text-[#1a1d27]">
                  {step.title}
                </h3>
                <p className="text-[13px] text-[#6b7280] mt-2 leading-relaxed">
                  {step.description}
                </p>
                {i < quickSteps.length - 1 && (
                  <div className="hidden sm:block absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                    <ArrowRight className="w-5 h-5 text-[#d1d5db]" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Link
              href="/docs/guide/quickstart"
              className="flex items-center gap-2 px-6 py-3 bg-[#0066ff] text-white font-semibold rounded-[10px] hover:bg-[#0047b3] transition-colors text-[15px]"
            >
              <Play className="w-4 h-4" />
              지금 시작하기
            </Link>
          </div>
        </div>
      </section>

      {/* ── 최신 업데이트 ── */}
      <section className="py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-[24px] font-bold text-[#1a1d27]">
                최신 업데이트
              </h2>
              <p className="text-[14px] text-[#6b7280] mt-1">
                API 버전별 변경 내역을 확인하세요.
              </p>
            </div>
            <Link
              href="/docs/reference/versioning"
              className="flex items-center gap-1.5 text-[13px] text-[#0066ff] font-medium hover:text-[#0047b3] transition-colors"
            >
              전체 보기
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="space-y-3">
            {updates.map((update, i) => (
              <div
                key={i}
                className="flex gap-4 items-start bg-white border border-[#e8eaed] rounded-[12px] px-6 py-5 hover:border-[#c7d6ff] hover:shadow-[0_2px_12px_rgba(0,102,255,0.07)] transition-all duration-200"
              >
                <div className="flex-shrink-0 mt-0.5">
                  <div className="w-8 h-8 rounded-[8px] bg-[#eef2ff] flex items-center justify-center">
                    <GitBranch className="w-4 h-4 text-[#0066ff]" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-[12px] font-mono font-semibold text-[#0066ff] bg-[#eef2ff] px-2 py-0.5 rounded-[4px]">
                      {update.version}
                    </span>
                    <span className="text-[12px] text-[#9ca3af]">
                      {update.date}
                    </span>
                  </div>
                  <p className="text-[15px] font-semibold text-[#1a1d27]">
                    {update.title}
                  </p>
                  <p className="text-[13px] text-[#6b7280] mt-0.5">
                    {update.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
