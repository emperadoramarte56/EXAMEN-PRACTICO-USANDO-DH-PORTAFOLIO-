import { useEffect, useRef } from "react";

const CHARS = [".", ".", ".", ":", "+", "*", "x", "@"];

export default function GalaxyBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let W, H, dpr;
    let stars = [];
    let nebulae = [];
    let animationId;
    let t = 0;

    function buildField() {
      const cell = 16;
      const cols = Math.ceil(W / cell);
      const rows = Math.ceil(H / cell);
      const density = 0.16;

      stars = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          if (Math.random() < density) {
            const brightBias = Math.random();
            const charIndex = Math.floor(brightBias * brightBias * CHARS.length);
            stars.push({
              x: c * cell + (Math.random() * 6 - 3),
              y: r * cell + (Math.random() * 6 - 3),
              ch: CHARS[Math.min(charIndex, CHARS.length - 1)],
              baseAlpha: 0.15 + brightBias * 0.65,
              phase: Math.random() * Math.PI * 2,
              speed: 0.4 + Math.random() * 0.8,
              hue: 200 + Math.random() * 40,
            });
          }
        }
      }

      nebulae = [];
      const nCount = 4;
      for (let i = 0; i < nCount; i++) {
        nebulae.push({
          x: Math.random() * W,
          y: Math.random() * H,
          r: 220 + Math.random() * 260,
          hue: 210 + Math.random() * 45,
          drift: (Math.random() - 0.5) * 0.05,
          phase: Math.random() * Math.PI * 2,
        });
      }
    }

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = W * dpr;
      canvas.height = H * dpr;
      canvas.style.width = W + "px";
      canvas.style.height = H + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildField();
    }

    function draw() {
      ctx.fillStyle = "#060a18";
      ctx.fillRect(0, 0, W, H);

      nebulae.forEach((n) => {
        const pulse = 0.5 + 0.5 * Math.sin(t * 0.3 + n.phase);
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r);
        grad.addColorStop(0, `hsla(${n.hue}, 85%, ${45 + pulse * 8}%, 0.16)`);
        grad.addColorStop(0.5, `hsla(${n.hue + 15}, 80%, 30%, 0.08)`);
        grad.addColorStop(1, "hsla(220, 80%, 10%, 0)");
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, W, H);
        n.x += n.drift;
        if (n.x < -n.r) n.x = W + n.r;
        if (n.x > W + n.r) n.x = -n.r;
      });

      ctx.font = '13px "JetBrains Mono", monospace';
      ctx.textBaseline = "middle";
      stars.forEach((s) => {
        const twinkle = reduce ? 1 : 0.55 + 0.45 * Math.sin(t * s.speed + s.phase);
        const alpha = s.baseAlpha * twinkle;
        ctx.fillStyle = `hsla(${s.hue}, 90%, 78%, ${alpha})`;
        ctx.fillText(s.ch, s.x, s.y);
      });

      if (!reduce) {
        t += 0.02;
        animationId = requestAnimationFrame(draw);
      }
    }

    resize();
    window.addEventListener("resize", resize);
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      if (animationId) cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 h-full w-full bg-[#060a18]"
    />
  );
}
