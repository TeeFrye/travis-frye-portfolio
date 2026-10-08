"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { GolfPutt } from "@/components/golf-putt";

// The game's code only downloads once someone opens it.
const PuttingGame = dynamic(() => import("@/components/putting-game").then((m) => m.PuttingGame), {
  ssr: false,
});

// Easter egg: the hero putt animation doubles as the button that opens a three-hole putting game.
export function PuttingGreen() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Play a three-hole putting game"
        title="Fancy a round?"
        className="mt-14 ml-auto block w-full max-w-[600px] cursor-pointer rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
      >
        <GolfPutt />
      </button>
      <p className="putting-hint mt-2 text-right font-mono text-xs text-muted">
        Fancy a round? Tap the green ⛳
      </p>
      {open && <PuttingGame onClose={() => setOpen(false)} />}
    </>
  );
}
