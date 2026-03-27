import Link from "next/link";
import { type LucideIcon } from "lucide-react";

interface ApiCardProps {
  href: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ApiCard({ href, icon: Icon, title, description }: ApiCardProps) {
  return (
    <Link
      href={href}
      className="group flex flex-col gap-3 bg-white border border-[#e8eaed] rounded-[12px] p-6 hover:shadow-[0_4px_16px_rgba(0,0,0,0.10)] hover:-translate-y-[2px] transition-all duration-200"
    >
      <div className="w-10 h-10 rounded-[10px] bg-[#eef2ff] flex items-center justify-center flex-shrink-0">
        <Icon className="w-5 h-5 text-[#0066ff]" />
      </div>
      <div>
        <h3 className="text-[15px] font-semibold text-[#1a1d27] group-hover:text-[#0066ff] transition-colors">
          {title}
        </h3>
        <p className="text-[13px] text-[#6b7280] mt-1 leading-relaxed">{description}</p>
      </div>
    </Link>
  );
}
