import { useEffect, useState } from "react";

const FULL_TEXT = "derek_huizar";

export default function Hero() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce) {
      setTyped(FULL_TEXT);
      return;
    }
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setTyped(FULL_TEXT.slice(0, i));
      if (i >= FULL_TEXT.length) clearInterval(interval);
    }, 90);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex min-h-[88vh] flex-col items-center justify-center px-6 py-10 text-center">
      <div className="mb-1.5 font-mono text-[clamp(0.95rem,2vw,1.15rem)] text-slate-400">
        <span className="text-teal-300">derek@ubuntu</span>:~$ whoami
      </div>

      <div className="min-h-[1.2em] font-mono text-[clamp(2.2rem,7vw,4.4rem)] font-extrabold tracking-tight text-amber-300">
        {typed}
        <span
          className="ml-1 inline-block w-[0.5ch] bg-amber-300 align-middle motion-safe:animate-pulse"
          style={{ height: "0.9em" }}
        >
          &nbsp;
        </span>
      </div>

      <div className="mt-4.5 font-mono text-[clamp(1rem,2.4vw,1.3rem)] text-slate-100">
        <span className="text-slate-400">// soy —</span>{" "}
        <span className="text-teal-300">"un futuro desarrollador full stack"</span>
      </div>

      <div className="mt-7 flex flex-wrap justify-center gap-3.5 font-mono text-sm text-slate-400">
        <span className="rounded border border-white/10 bg-white/5 px-3 py-1.5">
          OS: Ubuntu
        </span>
        <span className="rounded border border-white/10 bg-white/5 px-3 py-1.5">
          Stack: React · en expansión hacia backend
        </span>
        <span className="rounded border border-white/10 bg-white/5 px-3 py-1.5">
          Proyectos: terminados y listos para escalar
        </span>
      </div>
    </section>
  );
}
