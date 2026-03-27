export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const gnbItems: NavItem[] = [
  { label: "가이드", href: "/docs/guide" },
  {
    label: "API & SDK",
    href: "#",
    children: [
      {
        label: "API 레퍼런스",
        href: "/docs/reference",
      },
      {
        label: "SDK 레퍼런스",
        href: "/docs/sdk",
      },
    ],
  },
  { label: "샌드박스", href: "/sandbox" },
  { label: "커뮤니티·지원", href: "/support" },
  { label: "블로그", href: "/blog" },
];

export const sidebarItems: NavItem[] = [
  { label: "API 키", href: "/docs/reference/api-keys" },
  { label: "인증 및 기타 헤더 설정", href: "/docs/reference/auth-headers" },
  { label: "요청·응답 분문", href: "/docs/reference/request-response" },
  { label: "보안", href: "/docs/reference/security" },
  {
    label: "코어 API",
    href: "/docs/reference/core",
    children: [
      {
        label: "결제",
        href: "/docs/reference/core/payment",
        children: [
          { label: "Payment 객체", href: "/docs/reference/core/payment/object" },
          { label: "결제 승인", href: "/docs/reference/core/payment/confirm" },
          { label: "paymentKey로 결제 조회", href: "/docs/reference/core/payment/get-by-key" },
          { label: "orderId로 결제 조회", href: "/docs/reference/core/payment/get-by-order" },
          { label: "결제 취소", href: "/docs/reference/core/payment/cancel" },
          { label: "카드 번호 결제", href: "/docs/reference/core/payment/card" },
          { label: "가상계좌 발급 콜백 전송", href: "/docs/reference/core/payment/virtual-account" },
        ],
      },
      { label: "지급대행", href: "/docs/reference/core/payout" },
      { label: "거래", href: "/docs/reference/core/transaction" },
      { label: "Settlement 처리", href: "/docs/reference/core/settlement" },
      { label: "정산 조회", href: "/docs/reference/core/settlement-query" },
      { label: "기타 안내", href: "/docs/reference/core/misc" },
    ],
  },
  {
    label: "브랜드페이 API",
    href: "/docs/reference/brandpay",
    children: [],
  },
  {
    label: "파트너 API",
    href: "/docs/reference/partner",
    children: [],
  },
  { label: "API 시크릿", href: "/docs/reference/api-secret" },
  { label: "API 버전 정책", href: "/docs/reference/versioning" },
  { label: "에러 코드", href: "/docs/reference/error-codes" },
];

export const tocItems = [
  { label: "결제", id: "payment" },
  { label: "지급대행", id: "payout" },
  { label: "거래", id: "transaction" },
  { label: "Settlement 처리", id: "settlement" },
  { label: "정산 조회", id: "settlement-query" },
  { label: "기타 안내", id: "misc" },
  { label: "한국어화", id: "i18n" },
];
