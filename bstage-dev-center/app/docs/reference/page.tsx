import { Key, Shield, FileJson, Lock, ExternalLink } from "lucide-react";
import ApiCard from "@/components/ui/ApiCard";
import WarningBanner from "@/components/ui/WarningBanner";
import VersionBadge from "@/components/ui/VersionBadge";
import Sidebar from "@/components/layout/Sidebar";
import TableOfContents from "@/components/layout/TableOfContents";

const apiCards = [
  {
    href: "/docs/reference/api-keys",
    icon: Key,
    title: "API 키",
    description:
      "b.stage API를 사용하기 위한 인증 키 발급 및 관리 방법을 알아보세요.",
  },
  {
    href: "/docs/reference/auth-headers",
    icon: Shield,
    title: "인증 및 기타 헤더 설정",
    description:
      "API 요청 시 필요한 인증 헤더와 공통 헤더 설정 방법을 확인하세요.",
  },
  {
    href: "/docs/reference/request-response",
    icon: FileJson,
    title: "요청·응답 분문",
    description:
      "API 요청과 응답의 데이터 형식 및 공통 필드를 살펴보세요.",
  },
  {
    href: "/docs/reference/security",
    icon: Lock,
    title: "보안",
    description:
      "b.stage API 보안 정책과 IP 화이트리스트 설정 방법을 안내합니다.",
  },
];

interface SectionItem {
  id: string;
  label: string;
  description: string;
  items: string[];
}

const coreSections: SectionItem[] = [
  {
    id: "payment",
    label: "결제",
    description:
      "결제에 관한 모든 API와 결제 API로 응답으로 들어오는 Payment 객체, Cancel 객체를 살펴봅니다.",
    items: [
      "Payment 객체",
      "결제 승인",
      "paymentKey로 결제 조회",
      "orderId로 결제 조회",
      "결제 취소",
      "카드 번호 결제",
      "가상계좌 발급 콜백 전송",
    ],
  },
  {
    id: "payout",
    label: "지급대행",
    description: "지급대행 API로 수취인에게 자금을 지급하고 조회할 수 있습니다.",
    items: ["지급 요청", "지급 조회", "지급 취소"],
  },
  {
    id: "transaction",
    label: "거래",
    description: "Transaction 객체와 거래 조회 API를 확인하세요.",
    items: ["Transaction 객체", "거래 조회"],
  },
  {
    id: "settlement",
    label: "Settlement 처리",
    description: "Settlement 처리 API로 정산 내역을 조회하고 관리할 수 있습니다.",
    items: ["정산 내역 조회", "정산 상세 조회"],
  },
  {
    id: "settlement-query",
    label: "정산 조회",
    description: "정산 조회 API로 날짜별 정산 금액 및 내역을 확인하세요.",
    items: ["일별 정산 조회", "월별 정산 조회"],
  },
  {
    id: "misc",
    label: "기타 안내",
    description: "API 사용 시 알아두면 좋은 공통 규칙과 제약사항을 안내합니다.",
    items: ["공통 에러 처리", "Rate Limiting", "Webhook"],
  },
  {
    id: "i18n",
    label: "한국어화",
    description: "API 응답 메시지의 한국어화 옵션을 확인하세요.",
    items: ["응답 언어 설정", "에러 메시지 한국어화"],
  },
];

export default function ApiReferencePage() {
  return (
    <div className="flex min-h-[calc(100vh-60px)]">
      {/* ── 좌측 사이드바 ── */}
      <aside className="hidden lg:block w-[240px] flex-shrink-0 border-r border-[#e8eaed] bg-[#f7f8fa] sticky top-[60px] h-[calc(100vh-60px)] overflow-y-auto">
        <Sidebar />
      </aside>

      {/* ── 메인 콘텐츠 ── */}
      <main className="flex-1 min-w-0 px-8 lg:px-12 py-8">
        <div className="max-w-[780px]">
          {/* Breadcrumb */}
          <p className="text-[12px] text-[#9ca3af] font-medium uppercase tracking-wider mb-3">
            API &amp; SDK
          </p>

          {/* 버전 선택기 */}
          <VersionBadge />

          {/* 페이지 제목 */}
          <h1 className="text-[32px] font-bold text-[#1a1d27] mt-3 leading-tight tracking-tight">
            코어 API
          </h1>
          <p className="text-[15px] text-[#6b7280] mt-2 leading-relaxed">
            b.stage API 엔드포인트(Endpoint)와 객체 정보, 파라미터, 요청 및 응답 객체를 살펴보세요.
          </p>

          {/* API 카드 그리드 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {apiCards.map((card) => (
              <ApiCard key={card.href} {...card} />
            ))}
          </div>

          {/* 경고 배너 */}
          <WarningBanner />

          {/* 코어 섹션들 */}
          <div className="mt-12 space-y-12">
            {coreSections.map((section) => (
              <section key={section.id} id={section.id}>
                <div className="flex items-center justify-between">
                  <h2 className="text-[22px] font-bold text-[#1a1d27]">{section.label}</h2>
                  <a
                    href={`/docs/reference/core/${section.id}`}
                    className="text-[13px] text-[#6b7280] hover:text-[#0066ff] flex items-center gap-1 transition-colors"
                  >
                    전체 보기
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
                <p className="text-[14px] text-[#6b7280] mt-1.5 leading-relaxed">
                  {section.description}
                </p>
                <div className="border-b border-[#e8eaed] mt-4" />

                <ul className="mt-4 space-y-1">
                  {section.items.map((item) => (
                    <li key={item}>
                      <a
                        href={`/docs/reference/core/${section.id}/${item.toLowerCase().replace(/\s+/g, "-")}`}
                        className="flex items-center gap-2 py-2 px-3 rounded-[6px] text-[14px] text-[#1a1d27] hover:bg-[#f7f8fa] hover:text-[#0066ff] transition-colors group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#e8eaed] group-hover:bg-[#0066ff] transition-colors flex-shrink-0" />
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div className="h-24" />
        </div>
      </main>

      {/* ── 우측 목차 ── */}
      <aside className="hidden xl:block w-[200px] flex-shrink-0 sticky top-[60px] h-[calc(100vh-60px)] overflow-y-auto border-l border-[#e8eaed]">
        <TableOfContents />
      </aside>
    </div>
  );
}
