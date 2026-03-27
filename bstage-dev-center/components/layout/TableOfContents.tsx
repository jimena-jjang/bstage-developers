"use client";

import { useState, useEffect } from "react";
import { tocItems } from "@/lib/navigation";

export default function TableOfContents() {
  const [active, setActive] = useState<string>("payment");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -60% 0%", threshold: 0 }
    );

    tocItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="pt-8 pr-4" aria-label="목차">
      <p className="text-[11px] font-semibold text-[#9ca3af] uppercase tracking-wider mb-3">
        목차
      </p>
      <ul className="space-y-1">
        {tocItems.map(({ label, id }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={`block text-[13px] py-1 transition-colors leading-relaxed ${
                active === id
                  ? "text-[#0066ff] font-medium"
                  : "text-[#6b7280] hover:text-[#1a1d27]"
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
