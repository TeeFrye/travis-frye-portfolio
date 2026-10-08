"use client";

import { useEffect, useState } from "react";
import { openPuttingGame } from "./putting-green";

type Link = { href: string; label: string };

export function MobileMenu({ links }: { links: Link[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    // Close if the viewport grows past the breakpoint where the inline nav shows.
    const desktop = window.matchMedia("(min-width: 768px)");
    function onChange(e: MediaQueryListEvent) {
      if (e.matches) setOpen(false);
    }

    document.addEventListener("keydown", onKeyDown);
    desktop.addEventListener("change", onChange);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      desktop.removeEventListener("change", onChange);
    };
  }, [open]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {open ? (
            <path d="M18 6 6 18M6 6l12 12" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>

      {open && (
        <div className="absolute inset-x-0 top-full h-dvh">
          {/* Tap-outside backdrop below the header */}
          <div
            className="absolute inset-0 bg-background/40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <nav
            id="mobile-menu"
            className="relative border-b border-border bg-background shadow-lg"
          >
            <ul className="mx-auto flex max-w-5xl flex-col px-6 py-2">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-base text-foreground transition-colors hover:text-accent"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    openPuttingGame();
                  }}
                  className="block w-full py-3 text-left text-base text-foreground transition-colors hover:text-accent"
                >
                  ⛳ Play a round
                </button>
              </li>
            </ul>
            <div className="mx-auto max-w-5xl px-6 pb-5 sm:hidden">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block rounded-full bg-accent px-4 py-2.5 text-center text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
              >
                Get in touch
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
