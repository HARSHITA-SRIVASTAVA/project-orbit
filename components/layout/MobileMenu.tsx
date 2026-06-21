"use client";

import { useState } from "react";

const navItems = [
  {
    label: "Engineering",
    href: "/engineering",
  },
  {
    label: "Experience",
    href: "/experience",
  },
  {
    label: "Milestones",
    href: "/milestones",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-bold text-slate-900"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? "✕" : "☰"}
      </button>

      {isOpen && (
        <div className="absolute left-6 right-6 top-20 z-50 rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-xl shadow-blue-600/10">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-blue-50 hover:text-blue-600"
              >
                {item.label}
              </a>
            ))}

            <a
              href="/resume.pdf"
              onClick={() => setIsOpen(false)}
              className="rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-4 py-2.5 text-sm font-bold text-white"
            >
              Resume ↗
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}