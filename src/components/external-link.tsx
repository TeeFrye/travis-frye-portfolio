"use client";

import { useSyncExternalStore, type ComponentProps } from "react";

const touchQuery = "(pointer: coarse)";

function subscribe(onChange: () => void) {
  const mql = window.matchMedia(touchQuery);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
}

// Opens in a new tab on desktop, but in the same tab on touch devices so iOS/Android
// can hand the link off to the native app (e.g. LinkedIn) via universal/app links.
export function ExternalLink(props: Omit<ComponentProps<"a">, "target" | "rel">) {
  const isTouch = useSyncExternalStore(
    subscribe,
    () => window.matchMedia(touchQuery).matches,
    () => false,
  );

  return isTouch ? (
    <a {...props} />
  ) : (
    <a {...props} target="_blank" rel="noreferrer" />
  );
}
