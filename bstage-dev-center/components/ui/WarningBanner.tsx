"use client";

import { AlertTriangle } from "lucide-react";

export default function WarningBanner() {
  return (
    <div className="flex gap-3 items-start bg-[#fffbeb] border border-[#fcd34d] rounded-[10px] px-5 py-4 mt-6">
      <AlertTriangle className="w-5 h-5 text-[#f59e0b] flex-shrink-0 mt-0.5" />
      <p className="text-[14px] text-[#92400e] leading-relaxed">
        API를 사용하기 전 반드시 읽어보세요. API 발급이나 사용 전 아래 링크의 전반적인 내용을
        파악한 뒤 사용하길 권장합니다. 아직 이 버전의 주요 변경 내용을 확인하지 않았다면{" "}
        <a
          href="/docs/reference/versioning"
          className="text-[#0066ff] underline underline-offset-2 font-medium hover:text-[#0047b3]"
        >
          주요 변경 내용
        </a>
        을 먼저 읽고 오세요.
      </p>
    </div>
  );
}
