import Link from "next/link";
import {
  BookOpen,
  Code2,
  Zap,
  FlaskConical,
  ArrowRight,
  GitBranch,
  Bell,
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
  },
  {
    href: "/docs/sdk",
    icon: Code2,
    title: "SDK 레퍼런스",
    description:
      "JavaScript, iOS, Android 등 다양한 플랫폼 SDK를 활용해 b.stage 기능을 손쉽게 연동하세요.",
    badge: "SDK",
    badgeColor: "bg-[#f0fdf4] text-[#16a34a]",
  },
  {
    href: "/docs/guide/quickstart",
    icon: Zap,
    title: "빠른 시작 가이드",
    description:
      "처음 b.stage API를 연동한다면 여기서 시작하세요. 5분 안에 첫 번째 API 호출을 완료할 수 있습니다.",
    badge: "Guide",
    badgeColor: "bg-[#fff7ed] text-[#c2410c]",
  },
  {
    href: "/sandbox",
    icon: FlaskConical,
    title: "샌드박스",
    description:
      "실제 데이터에 영향 없이 API를 테스트해보세요. 테스트 키로 안전하게 개발 환경을 구성할 수 있습니다.",
    badge: "Test",
    badgeColor: "bg-[#faf5ff] text-[#7c3aed]",
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

export default function HomePage() {
  return (
    <div>
      {/* ── 히어로 섹션 ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0066ff] via-[#0052cc] to-[#003d99] py-20 px-6">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute bottom-0 -left-16 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="relative max-w-[1280px] mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <Bell className="w-3.5 h-3.5 text-white/80" />
            <span className="text-[13px] text-white/80 font-medium">
              최신 버전: API v2024-06-01 업데이트
            </span>
          </div>

          <h1 className="text-[48px] sm:text-[56px] font-bold text-white leading-tight tracking-tight">
            b.stage{" "}
            <span className="text-white/70">개발자센터</span>
          </h1>
          <p className="text-[18px] text-white/70 mt-4 max-w-[520px] mx-auto leading-relaxed">
            b.stage의 API와 SDK를 활용해 당신만의 서비스를 만들어보세요.
            <br />
            레퍼런스부터 가이드까지 모든 것이 여기 있습니다.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
            <Link
              href="/docs/reference"
              className="flex items-center gap-2 px-6 py-3 bg-white text-[#0066ff] font-semibold rounded-[10px] hover:bg-white/90 transition-colors text-[15px]"
            >
              API 레퍼런스 보기
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/docs/guide/quickstart"
              className="flex items-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-[10px] hover:bg-white/20 transition-colors text-[15px]"
            >
              <Zap className="w-4 h-4" />
              빠른 시작
            </Link>
          </div>
        </div>
      </section>

      {/* ── 기능 카드 그리드 ── */}
      <section className="max-w-[1280px] mx-auto px-6 py-16">
        <div className="text-center mb-10">
          <h2 className="text-[28px] font-bold text-[#1a1d27]">무엇이 필요하신가요?</h2>
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
                className="group flex flex-col gap-4 bg-white border border-[#e8eaed] rounded-[16px] p-6 hover:shadow-[0_4px_16px_rgba(0,0,0,0.10)] hover:-translate-y-[2px] transition-all duration-200"
              >
                <div className="flex items-start justify-between">
                  <div className="w-10 h-10 rounded-[10px] bg-[#eef2ff] flex items-center justify-center">
                    <Icon className="w-5 h-5 text-[#0066ff]" />
                  </div>
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${card.badgeColor}`}
                  >
                    {card.badge}
                  </span>
                </div>
                <div>
                  <h3 className="text-[16px] font-semibold text-[#1a1d27] group-hover:text-[#0066ff] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[13px] text-[#6b7280] mt-1.5 leading-relaxed">
                    {card.description}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[13px] text-[#0066ff] font-medium mt-auto">
                  바로가기
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ── 최신 업데이트 ── */}
      <section className="bg-[#f7f8fa] border-t border-[#e8eaed] py-16">
        <div className="max-w-[1280px] mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-[24px] font-bold text-[#1a1d27]">최신 업데이트</h2>
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

          <div className="space-y-4">
            {updates.map((update, i) => (
              <div
                key={i}
                className="flex gap-4 items-start bg-white border border-[#e8eaed] rounded-[12px] px-6 py-5"
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
                    <span className="text-[12px] text-[#9ca3af]">{update.date}</span>
                  </div>
                  <p className="text-[15px] font-semibold text-[#1a1d27]">{update.title}</p>
                  <p className="text-[13px] text-[#6b7280] mt-0.5">{update.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
