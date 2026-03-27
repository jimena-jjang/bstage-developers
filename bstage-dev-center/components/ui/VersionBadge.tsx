"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const versions = [
  { label: "2024-06-01", value: "2024-06-01" },
  { label: "2023-08-01", value: "2023-08-01" },
  { label: "2022-11-16", value: "2022-11-16" },
];

export default function VersionBadge() {
  const [selected, setSelected] = useState(versions[0].value);
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 border border-[#e8eaed] rounded-[6px] px-3 py-1 text-sm text-[#6b7280] bg-white hover:bg-[#f7f8fa] transition-colors"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="text-[#9ca3af] text-xs">Version</span>
        <span className="font-medium text-[#1a1d27]">{selected}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-150 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute top-full left-0 mt-1 bg-white border border-[#e8eaed] rounded-[8px] shadow-[0_4px_16px_rgba(0,0,0,0.10)] z-20 min-w-[140px] py-1">
            {versions.map((v) => (
              <button
                key={v.value}
                onClick={() => {
                  setSelected(v.value);
                  setOpen(false);
                }}
                className={`w-full text-left px-3 py-2 text-sm transition-colors ${
                  selected === v.value
                    ? "text-[#0066ff] font-medium bg-[#eef2ff]"
                    : "text-[#1a1d27] hover:bg-[#f7f8fa]"
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
