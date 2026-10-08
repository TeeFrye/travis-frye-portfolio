"use client";

import { useEffect, useRef, useState } from "react";

// A tiny three-hole putting game. Physics runs in logical course units (600 × 400);
// the canvas is half that resolution and scaled up with pixelated rendering for a retro look.

const W = 600;
const H = 400;
const PIXEL = 2; // logical units per canvas pixel
const EDGE = 16; // thickness of the outer wall
const BALL_R = 6;
const CUP_R = 11;
const MAX_SPEED = 720; // units/s at full power
const ROLL_DECEL = 240; // constant rolling friction, units/s²
const DRAG = 0.6; // speed-proportional drag, 1/s
const BOUNCE = 0.75;
const SINK_SPEED = 420; // any faster and the ball skips over the cup
const FULL_PULL = 140; // drag distance for full power
const MAX_STROKES = 8;
const STEP = 1 / 240;
const RESULT_PAUSE = 1.6; // seconds to show the hole result before moving on
const BEST_KEY = "putting-green-best";

type Point = { x: number; y: number };
type Rect = { x: number; y: number; w: number; h: number };
type Hole = {
  name: string;
  par: number;
  tee: Point;
  cup: Point;
  walls: Rect[];
  mover?: { rect: Rect; range: number; period: number }; // slides vertically
};

const HOLES: Hole[] = [
  {
    name: "The Opener",
    par: 2,
    tee: { x: 90, y: 200 },
    cup: { x: 510, y: 200 },
    walls: [{ x: 290, y: 130, w: 20, h: 140 }],
  },
  {
    name: "Dogleg",
    par: 3,
    tee: { x: 90, y: 310 },
    cup: { x: 100, y: 95 },
    walls: [{ x: EDGE, y: 190, w: 400, h: 20 }],
  },
  {
    name: "The Gauntlet",
    par: 3,
    tee: { x: 80, y: 200 },
    cup: { x: 530, y: 200 },
    walls: [
      { x: 200, y: EDGE, w: 20, h: 134 },
      { x: 200, y: 250, w: 20, h: H - EDGE - 250 },
    ],
    mover: { rect: { x: 390, y: 150, w: 20, h: 100 }, range: 110, period: 3 },
  },
];

const TOTAL_PAR = HOLES.reduce((sum, hole) => sum + hole.par, 0);

type Game = {
  hole: number;
  ball: Point & { vx: number; vy: number };
  strokes: number;
  scores: number[];
  angle: number;
  power: number;
  phase: "play" | "result" | "done";
  holed: boolean;
  resultAt: number;
  time: number;
  pull: (Point & { moved: boolean }) | null;
};

function createGame(): Game {
  const game: Game = {
    hole: 0,
    ball: { x: 0, y: 0, vx: 0, vy: 0 },
    strokes: 0,
    scores: [],
    angle: 0,
    power: 0.5,
    phase: "play",
    holed: false,
    resultAt: 0,
    time: 0,
    pull: null,
  };
  startHole(game, 0);
  return game;
}

function startHole(game: Game, index: number) {
  const { tee, cup } = HOLES[index];
  game.hole = index;
  game.ball = { x: tee.x, y: tee.y, vx: 0, vy: 0 };
  game.strokes = 0;
  game.angle = Math.atan2(cup.y - tee.y, cup.x - tee.x);
  game.power = 0.5;
  game.phase = "play";
  game.holed = false;
}

function moverAt(hole: Hole, time: number) {
  const mover = hole.mover!;
  const omega = (2 * Math.PI) / mover.period;
  return {
    rect: { ...mover.rect, y: mover.rect.y + Math.sin(omega * time) * mover.range },
    vy: Math.cos(omega * time) * mover.range * omega,
  };
}

// Pushes the ball out of a rectangle and bounces it, relative to the rectangle's own velocity.
function collide(ball: Game["ball"], rect: Rect, rectVy = 0) {
  const cx = Math.min(Math.max(ball.x, rect.x), rect.x + rect.w);
  const cy = Math.min(Math.max(ball.y, rect.y), rect.y + rect.h);
  let nx = ball.x - cx;
  let ny = ball.y - cy;
  const dist = Math.hypot(nx, ny);
  if (dist >= BALL_R) return;

  if (dist === 0) {
    // Center is inside the rectangle: exit along the shallowest side.
    const exits = [
      { d: ball.x - rect.x, nx: -1, ny: 0 },
      { d: rect.x + rect.w - ball.x, nx: 1, ny: 0 },
      { d: ball.y - rect.y, nx: 0, ny: -1 },
      { d: rect.y + rect.h - ball.y, nx: 0, ny: 1 },
    ];
    const exit = exits.reduce((a, b) => (b.d < a.d ? b : a));
    nx = exit.nx;
    ny = exit.ny;
    ball.x += nx * (exit.d + BALL_R);
    ball.y += ny * (exit.d + BALL_R);
  } else {
    nx /= dist;
    ny /= dist;
    ball.x = cx + nx * BALL_R;
    ball.y = cy + ny * BALL_R;
  }

  const approach = ball.vx * nx + (ball.vy - rectVy) * ny;
  if (approach < 0) {
    ball.vx -= (1 + BOUNCE) * approach * nx;
    ball.vy -= (1 + BOUNCE) * approach * ny;
  }
}

function keepInBounds(ball: Game["ball"]) {
  const min = EDGE + BALL_R;
  if (ball.x < min) { ball.x = min; ball.vx = Math.abs(ball.vx) * BOUNCE; }
  if (ball.x > W - min) { ball.x = W - min; ball.vx = -Math.abs(ball.vx) * BOUNCE; }
  if (ball.y < min) { ball.y = min; ball.vy = Math.abs(ball.vy) * BOUNCE; }
  if (ball.y > H - min) { ball.y = H - min; ball.vy = -Math.abs(ball.vy) * BOUNCE; }
}

function finishHole(game: Game, holed: boolean) {
  game.phase = "result";
  game.holed = holed;
  game.resultAt = game.time;
  game.scores = [...game.scores, game.strokes];
}

type GameEvent = "holed" | "picked-up" | "next-hole" | "done";

// Advances the simulation one fixed step and reports anything the UI should react to.
function advance(game: Game, dt: number): GameEvent | null {
  game.time += dt;

  if (game.phase === "result" && game.time - game.resultAt > RESULT_PAUSE) {
    if (game.hole < HOLES.length - 1) {
      startHole(game, game.hole + 1);
      return "next-hole";
    }
    game.phase = "done";
    return "done";
  }
  if (game.phase !== "play") return null;

  const hole = HOLES[game.hole];
  const { ball } = game;
  const speed = Math.hypot(ball.vx, ball.vy);
  if (speed > 0) {
    const next = Math.max(0, speed - (ROLL_DECEL + DRAG * speed) * dt);
    ball.vx *= next / speed;
    ball.vy *= next / speed;
    ball.x += ball.vx * dt;
    ball.y += ball.vy * dt;
  }
  for (const wall of hole.walls) collide(ball, wall);
  if (hole.mover) {
    const { rect, vy } = moverAt(hole, game.time);
    collide(ball, rect, vy);
  }
  keepInBounds(ball);

  const dx = hole.cup.x - ball.x;
  const dy = hole.cup.y - ball.y;
  const toCup = Math.hypot(dx, dy);
  const now = Math.hypot(ball.vx, ball.vy);
  if (toCup < CUP_R && now < SINK_SPEED) {
    finishHole(game, true);
    return "holed";
  }
  // A slow ball on the lip gets drawn toward the cup
  if (now > 0 && now < 160 && toCup < CUP_R + BALL_R) {
    ball.vx += (dx / toCup) * 500 * dt;
    ball.vy += (dy / toCup) * 500 * dt;
  }
  if (now > 0 && now < 3) {
    ball.vx = 0;
    ball.vy = 0;
    if (game.strokes >= MAX_STROKES) {
      finishHole(game, false);
      return "picked-up";
    }
  }
  return null;
}

function scoreLabel(strokes: number, par: number) {
  if (strokes === 1) return "Hole in one!";
  const diff = strokes - par;
  if (diff <= -2) return "Eagle!";
  if (diff === -1) return "Birdie!";
  if (diff === 0) return "Par. Steady.";
  if (diff === 1) return "Bogey.";
  if (diff === 2) return "Double bogey.";
  return `+${diff}. Shake it off.`;
}

function toPar(total: number) {
  const diff = total - TOTAL_PAR;
  return diff === 0 ? "E" : diff > 0 ? `+${diff}` : `−${-diff}`;
}

function readBest(): number | null {
  try {
    const value = Number(localStorage.getItem(BEST_KEY));
    return value > 0 ? value : null;
  } catch {
    return null;
  }
}

function saveBest(total: number) {
  try {
    localStorage.setItem(BEST_KEY, String(total));
  } catch {
    // Storage unavailable (private mode, blocked site data): the best score just won't persist.
  }
}

function readColors() {
  const style = getComputedStyle(document.documentElement);
  const read = (name: string) => style.getPropertyValue(name).trim();
  return {
    green: read("--accent-soft"),
    accent: read("--accent"),
    muted: read("--muted"),
    foreground: read("--foreground"),
  };
}

const snap = (n: number) => Math.round(n / PIXEL) * PIXEL;

function draw(ctx: CanvasRenderingContext2D, game: Game) {
  const c = readColors();
  const hole = HOLES[game.hole];
  ctx.setTransform(1 / PIXEL, 0, 0, 1 / PIXEL, 0, 0);

  // Turf, with mowing stripes
  ctx.fillStyle = c.green;
  ctx.fillRect(0, 0, W, H);
  ctx.globalAlpha = 0.07;
  ctx.fillStyle = c.accent;
  for (let x = EDGE; x < W; x += 80) ctx.fillRect(x, 0, 40, H);
  ctx.globalAlpha = 1;

  // Outer edge and walls
  ctx.fillStyle = c.accent;
  ctx.fillRect(0, 0, W, EDGE);
  ctx.fillRect(0, H - EDGE, W, EDGE);
  ctx.fillRect(0, 0, EDGE, H);
  ctx.fillRect(W - EDGE, 0, EDGE, H);
  for (const wall of hole.walls) ctx.fillRect(wall.x, wall.y, wall.w, wall.h);
  if (hole.mover) {
    const { rect } = moverAt(hole, game.time);
    ctx.fillStyle = c.muted;
    ctx.fillRect(rect.x, snap(rect.y), rect.w, rect.h);
  }

  // Tee box
  ctx.fillStyle = c.muted;
  ctx.fillRect(hole.tee.x - 14, hole.tee.y - 2, 4, 4);
  ctx.fillRect(hole.tee.x + 10, hole.tee.y - 2, 4, 4);

  // Cup and flag
  ctx.fillStyle = "#05080a";
  ctx.strokeStyle = c.muted;
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.arc(hole.cup.x, hole.cup.y, CUP_R, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  ctx.fillStyle = c.muted;
  ctx.fillRect(hole.cup.x - 1, hole.cup.y - 46, 2, 46);
  ctx.fillStyle = c.accent;
  ctx.beginPath();
  ctx.moveTo(hole.cup.x + 1, hole.cup.y - 46);
  ctx.lineTo(hole.cup.x + 24, hole.cup.y - 39);
  ctx.lineTo(hole.cup.x + 1, hole.cup.y - 32);
  ctx.fill();

  const { ball } = game;
  const resting = game.phase === "play" && ball.vx === 0 && ball.vy === 0;

  // Aim: a dotted line whose length shows power
  if (resting) {
    ctx.fillStyle = c.foreground;
    ctx.globalAlpha = 0.6;
    const dots = Math.round(2 + game.power * 10);
    for (let i = 1; i <= dots; i++) {
      const d = BALL_R + 6 + i * 10;
      ctx.fillRect(
        snap(ball.x + Math.cos(game.angle) * d) - 2,
        snap(ball.y + Math.sin(game.angle) * d) - 2,
        4,
        4,
      );
    }
    ctx.globalAlpha = 1;
  }

  // Ball (shrinks into the cup once holed)
  let radius = BALL_R;
  let { x, y } = ball;
  if (game.holed) {
    radius = BALL_R * Math.max(0, 1 - (game.time - game.resultAt) / 0.25);
    ({ x, y } = hole.cup);
  }
  if (radius > 0) {
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#14181a";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(snap(x), snap(y), radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
  }
}

function toParWords(total: number) {
  const diff = total - TOTAL_PAR;
  if (diff === 0) return "Even par";
  return `${Math.abs(diff)} ${diff > 0 ? "over" : "under"} par`;
}

const MARK_NAMES: Record<number, string> = { [-2]: "eagle", [-1]: "birdie", 1: "bogey", 2: "double bogey" };

// Scorecard convention: circles under par, squares over par, doubled when two or more strokes off.
function ScoreMark({ strokes, par }: { strokes: number; par: number }) {
  const diff = strokes - par;
  if (diff === 0) return <span className="inline-flex size-6 items-center justify-center">{strokes}</span>;
  const shape = diff < 0 ? "rounded-full text-accent" : "rounded-[2px]";
  const double = Math.abs(diff) >= 2 ? "outline outline-1 outline-offset-2 outline-current" : "";
  const name = MARK_NAMES[Math.max(-2, Math.min(2, diff))] + (diff > 2 ? " or worse" : "");
  return (
    <span title={name} className={`inline-flex size-6 items-center justify-center border border-current ${shape} ${double}`}>
      {strokes}
      <span className="sr-only"> ({name})</span>
    </span>
  );
}

function Scorecard({ scores }: { scores: number[] }) {
  const total = scores.reduce((sum, s) => sum + s, 0);
  return (
    <table className="w-full font-mono text-xs">
      <thead className="text-muted">
        <tr>
          <th className="py-1 text-left font-medium">Hole</th>
          {HOLES.map((_, i) => (
            <th key={i} className="py-1 text-center font-medium">{i + 1}</th>
          ))}
          <th className="py-1 text-center font-medium">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr className="border-t border-border text-muted">
          <td className="py-1 text-left">Par</td>
          {HOLES.map((h, i) => (
            <td key={i} className="py-1 text-center">{h.par}</td>
          ))}
          <td className="py-1 text-center">{TOTAL_PAR}</td>
        </tr>
        <tr className="border-t border-border">
          <td className="py-2 text-left">You</td>
          {HOLES.map((h, i) => (
            <td key={i} className="py-2 text-center">
              {scores[i] === undefined ? "–" : <ScoreMark strokes={scores[i]} par={h.par} />}
            </td>
          ))}
          <td className="py-2 text-center font-semibold">{scores.length ? total : "–"}</td>
        </tr>
      </tbody>
    </table>
  );
}

export function PuttingGame({ onClose }: { onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameRef = useRef<Game>(createGame());
  const [hole, setHole] = useState(0);
  const [strokes, setStrokes] = useState(0);
  const [scores, setScores] = useState<number[]>([]);
  const [message, setMessage] = useState("");
  const [finished, setFinished] = useState(false);
  const [best, setBest] = useState(readBest);
  const [newBest, setNewBest] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) dialog.showModal();
  }, []);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;

    const update = (game: Game, dt: number) => {
      const event = advance(game, dt);
      if (event === "holed" || event === "picked-up") {
        setScores(game.scores);
        setMessage(
          event === "holed" ? scoreLabel(game.strokes, HOLES[game.hole].par) : `Picked up after ${MAX_STROKES}.`,
        );
      } else if (event === "next-hole") {
        setHole(game.hole);
        setStrokes(0);
        setMessage("");
      } else if (event === "done") {
        const total = game.scores.reduce((sum, score) => sum + score, 0);
        const previous = readBest();
        if (previous === null || total < previous) {
          saveBest(total);
          setBest(total);
          setNewBest(previous !== null);
        }
        setFinished(true);
      }
    };

    let raf = 0;
    let last = performance.now();
    let pending = 0;
    const frame = (now: number) => {
      pending += Math.min((now - last) / 1000, 0.05);
      last = now;
      while (pending >= STEP) {
        update(gameRef.current, STEP);
        pending -= STEP;
      }
      draw(ctx, gameRef.current);
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);
    return () => cancelAnimationFrame(raf);
  }, []);

  const canPutt = (game: Game) => game.phase === "play" && game.ball.vx === 0 && game.ball.vy === 0;

  const putt = () => {
    const game = gameRef.current;
    if (!canPutt(game) || game.power < 0.05) return;
    game.ball.vx = Math.cos(game.angle) * game.power * MAX_SPEED;
    game.ball.vy = Math.sin(game.angle) * game.power * MAX_SPEED;
    game.strokes += 1;
    setStrokes(game.strokes);
    setMessage("");
  };

  const toCourse = (e: React.PointerEvent<HTMLCanvasElement>): Point => {
    const box = e.currentTarget.getBoundingClientRect();
    return { x: ((e.clientX - box.left) / box.width) * W, y: ((e.clientY - box.top) / box.height) * H };
  };

  const onPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const game = gameRef.current;
    if (!canPutt(game)) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    game.pull = { ...toCourse(e), moved: false };
  };

  // Slingshot aiming: pull back from wherever you pressed, release to putt.
  const onPointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const game = gameRef.current;
    if (!game.pull) return;
    const point = toCourse(e);
    const dx = game.pull.x - point.x;
    const dy = game.pull.y - point.y;
    const length = Math.hypot(dx, dy);
    if (length < 4) return;
    game.pull.moved = true;
    game.angle = Math.atan2(dy, dx);
    game.power = Math.min(length / FULL_PULL, 1);
  };

  const onPointerUp = () => {
    const game = gameRef.current;
    const pulled = game.pull?.moved;
    game.pull = null;
    if (pulled) putt();
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLCanvasElement>) => {
    const game = gameRef.current;
    const fine = e.shiftKey ? 1 : 4;
    switch (e.key) {
      case "ArrowLeft":
        game.angle -= (fine * Math.PI) / 180;
        break;
      case "ArrowRight":
        game.angle += (fine * Math.PI) / 180;
        break;
      case "ArrowUp":
        game.power = Math.min(1, game.power + 0.05);
        break;
      case "ArrowDown":
        game.power = Math.max(0.05, game.power - 0.05);
        break;
      case " ":
      case "Enter":
        putt();
        break;
      default:
        return;
    }
    e.preventDefault();
  };

  const playAgain = () => {
    const game = gameRef.current;
    game.scores = [];
    startHole(game, 0);
    setHole(0);
    setStrokes(0);
    setScores([]);
    setMessage("");
    setFinished(false);
    setNewBest(false);
    canvasRef.current?.focus();
  };

  const total = scores.reduce((sum, s) => sum + s, 0);
  const current = HOLES[hole];

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(e) => {
        if (e.target === e.currentTarget) e.currentTarget.close();
      }}
      aria-labelledby="putting-game-title"
      className="m-auto w-[min(640px,calc(100vw-32px))] max-w-none rounded-2xl border border-border bg-surface p-4 text-foreground shadow-2xl backdrop:bg-black/60 sm:p-6"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h2 id="putting-game-title" className="font-mono text-sm font-semibold uppercase tracking-widest text-accent">
            ⛳ Fancy a round?
          </h2>
          <p className="mt-1 font-mono text-xs uppercase tracking-wider text-muted">
            {finished
              ? "Final scorecard"
              : `Hole ${hole + 1}/${HOLES.length} · ${current.name} · Par ${current.par} · Strokes ${strokes}`}
          </p>
        </div>
        <button
          type="button"
          onClick={() => dialogRef.current?.close()}
          className="rounded-full border border-border px-3 py-1 text-xs font-medium transition-colors hover:border-accent hover:text-accent"
        >
          Close
        </button>
      </div>

      <canvas
        ref={canvasRef}
        width={W / PIXEL}
        height={H / PIXEL}
        tabIndex={0}
        autoFocus
        aria-label="Putting green. Drag back from anywhere and release to putt, or use the arrow keys to aim and set power, then Space to putt."
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={() => (gameRef.current.pull = null)}
        onKeyDown={onKeyDown}
        className={`mt-4 h-auto w-full cursor-crosshair touch-none select-none rounded-lg [image-rendering:pixelated] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${finished ? "hidden" : "block"}`}
      />

      {finished ? (
        <div className="mt-4 rounded-lg border border-border bg-accent-soft px-4 py-8 text-center sm:px-10">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">Round complete</p>
          <p aria-live="polite" className="mt-2 text-2xl font-semibold tracking-tight">
            Thanks for playing!
          </p>
          <p className="mt-2 font-mono text-sm font-semibold text-accent">
            {total} strokes · {toParWords(total)}
            {newBest && " · New personal best!"}
          </p>
          <div className="mx-auto mt-6 max-w-sm">
            <Scorecard scores={scores} />
          </div>
          <p className="mt-6 text-sm text-muted">
            Thanks for stopping by. If you&apos;d like to talk product, program delivery, or golf, I&apos;d love to
            hear from you.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <button
              type="button"
              autoFocus
              onClick={playAgain}
              className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-foreground transition-opacity hover:opacity-90"
            >
              Play again
            </button>
            <a
              href="#contact"
              onClick={() => dialogRef.current?.close()}
              className="rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
          </div>
          {best !== null && !newBest && (
            <p className="mt-4 font-mono text-xs text-muted">
              Your best: {best} ({toPar(best)})
            </p>
          )}
        </div>
      ) : (
        <>
          <p aria-live="polite" className="mt-3 min-h-5 font-mono text-sm font-semibold text-accent">
            {message}
          </p>
          <div className="mt-2">
            <Scorecard scores={scores} />
          </div>
          <p className="mt-4 text-xs text-muted">
            Drag back and release to putt. Keys: ← → aim, ↑ ↓ power, Space to putt.
            {best !== null && ` Best: ${best} (${toPar(best)}).`}
          </p>
        </>
      )}
    </dialog>
  );
}
