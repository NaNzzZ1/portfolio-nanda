import { useEffect, useRef } from "react";

const INITIAL_DOT_COUNT = 12;
const DOT_MIN_SIZE = 3;
const DOT_MAX_SIZE = 7;
const MIN_OPACITY = 0.35;
const MAX_OPACITY = 0.5;
const MIN_SPEED = 0.5;
const MAX_SPEED = 1.5;

function spawnDot(container, vw, vh, forcedEdge = null) {
  const edge = forcedEdge !== null ? forcedEdge : Math.floor(Math.random() * 4);
  let x, y;

  switch (edge) {
    case 0: x = Math.random() * vw; y = -10; break;
    case 1: x = vw + 10; y = Math.random() * vh; break;
    case 2: x = Math.random() * vw; y = vh + 10; break;
    case 3: x = -10; y = Math.random() * vh; break;
    default: x = -10; y = Math.random() * vh;
  }

  const cx = vw / 2;
  const cy = vh / 2;
  const dx = cx - x;
  const dy = cy - y;
  const dist = Math.hypot(dx, dy);

  if (dist === 0) return null;

  const speed = MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED);
  const vx = (dx / dist) * speed;
  const vy = (dy / dist) * speed;

  const size = DOT_MIN_SIZE + Math.random() * (DOT_MAX_SIZE - DOT_MIN_SIZE);
  const opacity = MIN_OPACITY + Math.random() * (MAX_OPACITY - MIN_OPACITY);

  const el = document.createElement("span");
  el.className = "floating-dot";
  el.style.cssText = [
    `width:${size}px`,
    `height:${size}px`,
    `background:rgba(255,255,255,${opacity})`,
    `left:0`,
    `top:0`,
    `transform:translate(${x}px,${y}px)`,
    `opacity:0`,
  ].join(";");

  container.appendChild(el);

  return { el, x, y, vx, vy };
}

function resetDot(dot, vw, vh) {
  const edge = Math.floor(Math.random() * 4);
  let x, y;

  switch (edge) {
    case 0: x = Math.random() * vw; y = -10; break;
    case 1: x = vw + 10; y = Math.random() * vh; break;
    case 2: x = Math.random() * vw; y = vh + 10; break;
    case 3: x = -10; y = Math.random() * vh; break;
    default: x = -10; y = Math.random() * vh;
  }

  const cx = vw / 2;
  const cy = vh / 2;
  const dx = cx - x;
  const dy = cy - y;
  const dist = Math.hypot(dx, dy);

  if (dist === 0) return;

  const speed = MIN_SPEED + Math.random() * (MAX_SPEED - MIN_SPEED);
  dot.x = x;
  dot.y = y;
  dot.vx = (dx / dist) * speed;
  dot.vy = (dy / dist) * speed;
}

export default function FloatingDots() {
  const containerRef = useRef(null);
  const dotsRef = useRef([]);
  const rafRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    let vw = window.innerWidth;
    let vh = window.innerHeight;

    const container = containerRef.current;

    for (let i = 0; i < INITIAL_DOT_COUNT; i++) {
      const edge = i % 4;
      const dot = spawnDot(container, vw, vh, edge);
      if (dot) {
        dot.el.style.opacity = "0.35";
        dotsRef.current.push(dot);
      }
    }

    function tick() {
      dotsRef.current.forEach((dot) => {
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Reset when dot goes off-screen
        if (
          dot.x < -20 ||
          dot.x > vw + 20 ||
          dot.y < -20 ||
          dot.y > vh + 20
        ) {
          resetDot(dot, vw, vh);
          dot.el.style.opacity = "0";
          requestAnimationFrame(() => {
            dot.el.style.opacity = "0.35";
          });
        }

        dot.el.style.transform = `translate(${dot.x}px,${dot.y}px)`;
      });

      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);

    function handleResize() {
      vw = window.innerWidth;
      vh = window.innerHeight;
    }

    window.addEventListener("resize", handleResize);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", handleResize);
      dotsRef.current.forEach((dot) => dot.el.remove());
      dotsRef.current = [];
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 pointer-events-none overflow-hidden"
    />
  );
}
