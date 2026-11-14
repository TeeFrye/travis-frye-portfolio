"use client";

import { useSyncExternalStore } from "react";

// Same pattern as ThemeToggle: the theme lives on <html class="dark">.
function subscribe(onChange: () => void) {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
  return () => observer.disconnect();
}

const getIsDark = () => document.documentElement.classList.contains("dark");
const getServerIsDark = () => null;

/** A live app in a phone frame. Desktop only; phones get the "Open the app" link instead. */
export function LiveDemo({ src, title }: { src: string; title: string }) {
  // null until hydrated, so the iframe loads once, already in the page's theme.
  const isDark = useSyncExternalStore(subscribe, getIsDark, getServerIsDark);
  const url = new URL(src);
  if (isDark !== null) url.searchParams.set("theme", isDark ? "dark" : "light");

  return (
    <div className="w-[340px] shrink-0 rounded-[52px] bg-[#141414] p-3 shadow-[inset_0_0_0_2px_#3a3a3a,0_30px_80px_-20px_rgba(0,0,0,.6)]">
      {isDark === null ? (
        <div className="aspect-[390/844] w-full rounded-[40px] bg-[#9d0d14]" aria-hidden="true" />
      ) : (
        <iframe
          src={url.toString()}
          title={title}
          loading="lazy"
          className="block aspect-[390/844] w-full rounded-[40px] border-0 bg-[#9d0d14]"
        />
      )}
    </div>
  );
}
