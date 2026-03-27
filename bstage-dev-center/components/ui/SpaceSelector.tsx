"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, User, Home, LayoutGrid, FileText, Check } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const spaces = [
  { id: "account", label: "Account", icon: User },
  { id: "home", label: "Home", icon: Home },
  { id: "space", label: "Space", icon: LayoutGrid },
  { id: "content", label: "Content", icon: FileText },
];

export default function SpaceSelector() {
  const [selected, setSelected] = useState(spaces[2]);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-3 py-2 rounded-[8px] border border-[#e8eaed] bg-white hover:bg-[#f7f8fa] cursor-pointer text-[14px] font-medium text-[#1a1d27] transition-colors"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <div className="w-6 h-6 rounded-[6px] bg-[#0066ff] flex items-center justify-center flex-shrink-0">
          <selected.icon className="w-3.5 h-3.5 text-white" />
        </div>
        <span>{selected.label}</span>
        <ChevronDown
          className={`w-4 h-4 text-[#9ca3af] transition-transform duration-150 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -4 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -4 }}
            transition={{ duration: 0.12, ease: "easeOut" }}
            style={{ transformOrigin: "top center" }}
            className="absolute top-full left-0 mt-2 bg-white rounded-[16px] shadow-[0_8px_32px_rgba(0,0,0,0.14)] border border-[#e8eaed] min-w-[220px] p-2 z-50"
            role="listbox"
          >
            {spaces.map((space) => {
              const Icon = space.icon;
              const isSelected = selected.id === space.id;
              return (
                <button
                  key={space.id}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    setSelected(space);
                    setOpen(false);
                  }}
                  className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-[10px] cursor-pointer transition-colors ${
                    isSelected ? "bg-[#eef2ff]" : "hover:bg-[#f7f8fa]"
                  }`}
                >
                  <div className="w-8 h-8 rounded-[8px] bg-[#0066ff] flex items-center justify-center flex-shrink-0">
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <span
                      className={`text-[14px] font-medium ${
                        isSelected ? "text-[#0066ff]" : "text-[#1a1d27]"
                      }`}
                    >
                      {space.label}
                    </span>
                  </div>
                  {isSelected && <Check className="w-4 h-4 text-[#0066ff] flex-shrink-0" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
