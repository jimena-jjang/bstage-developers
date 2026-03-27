"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { type NavItem, sidebarItems } from "@/lib/navigation";

interface SidebarItemProps {
  item: NavItem;
  depth?: number;
}

function SidebarItem({ item, depth = 0 }: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === item.href;
  const hasChildren = item.children && item.children.length > 0;
  const isParentActive =
    hasChildren && item.children!.some((child) => pathname.startsWith(child.href));

  const [expanded, setExpanded] = useState(isParentActive || isActive);

  if (hasChildren) {
    return (
      <div>
        <button
          onClick={() => setExpanded(!expanded)}
          className={`w-full flex items-center justify-between gap-2 px-3 py-2 rounded-[6px] text-[13px] transition-colors ${
            depth === 0 ? "font-semibold" : "font-medium"
          } ${
            isParentActive || isActive
              ? "bg-[#eef2ff] text-[#0066ff]"
              : "text-[#1a1d27] hover:bg-[#f3f4f6]"
          }`}
          style={{ paddingLeft: `${12 + depth * 12}px` }}
          aria-expanded={expanded}
        >
          <span>{item.label}</span>
          <ChevronDown
            className={`w-3.5 h-3.5 flex-shrink-0 transition-transform duration-200 ${
              expanded ? "rotate-180" : ""
            } ${isParentActive || isActive ? "text-[#0066ff]" : "text-[#9ca3af]"}`}
          />
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="pt-0.5 pb-1">
                {item.children!.map((child) => (
                  <SidebarItem key={child.href} item={child} depth={depth + 1} />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  return (
    <Link
      href={item.href}
      className={`relative flex items-center gap-2 py-2 pr-3 rounded-[6px] text-[13px] transition-colors ${
        depth === 0 ? "font-medium" : "font-normal"
      } ${
        isActive
          ? "bg-[#eef2ff] text-[#0066ff] font-semibold"
          : "text-[#6b7280] hover:bg-[#f3f4f6] hover:text-[#1a1d27]"
      }`}
      style={{ paddingLeft: `${12 + depth * 12}px` }}
    >
      {isActive && (
        <span className="absolute left-0 top-1/2 -translate-y-1/2 w-[3px] h-5 bg-[#0066ff] rounded-full" />
      )}
      {item.label}
    </Link>
  );
}

export default function Sidebar() {
  return (
    <nav
      className="py-6 px-2 overflow-y-auto h-full"
      aria-label="사이드바 네비게이션"
    >
      <div className="space-y-0.5">
        {sidebarItems.map((item) => (
          <SidebarItem key={item.href} item={item} depth={0} />
        ))}
      </div>
    </nav>
  );
}
