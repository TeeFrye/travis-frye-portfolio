"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * The name in the nav. On the home page it always scrolls to the top, even when
 * the URL already has a hash (a "/#top" link does nothing once the hash matches).
 * Elsewhere it navigates home, which starts at the top.
 */
export function HomeLink({ className, children }: { className?: string; children: React.ReactNode }) {
  const pathname = usePathname();

  function handleClick(e: React.MouseEvent<HTMLAnchorElement>) {
    if (pathname !== "/" || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    history.replaceState(history.state, "", "/");
  }

  return (
    <Link href="/" onClick={handleClick} className={className}>
      {children}
    </Link>
  );
}
