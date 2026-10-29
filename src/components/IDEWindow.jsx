import { useState } from "react";
import {
  AboutPane,
  SkillsPane,
  ProjectsPane,
  ContactPane,
} from "./PaneSections.jsx";

const FILES = [
  { id: "about", name: "about", ext: ".js", Pane: AboutPane },
  { id: "skills", name: "skills", ext: ".json", Pane: SkillsPane },
  { id: "projects", name: "projects", ext: ".md", Pane: ProjectsPane },
  { id: "contact", name: "contact", ext: ".txt", Pane: ContactPane },
];

export default function IDEWindow() {
  const [active, setActive] = useState("about");
  const ActivePane = FILES.find((f) => f.id === active).Pane;

  return (
    <div className="mx-auto mb-24 max-w-[980px] px-6">
      <div className="overflow-hidden rounded-[10px] border border-white/10 bg-[#1b1a29] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.6)]">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-white/10 bg-[#171623] px-3.5 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-pink-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-teal-300" />
          <span className="ml-2.5 font-mono text-[0.8rem] text-slate-400">
            derek-huizar — portafolio
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-[200px_1fr]">
          {/* File tree */}
          <nav className="flex gap-1 overflow-x-auto border-b border-white/10 bg-[#171623] p-2.5 sm:block sm:border-b-0 sm:border-r sm:py-4.5 sm:px-0">
            <div className="hidden px-4.5 pb-2.5 font-mono text-[0.7rem] uppercase tracking-wider text-slate-400 sm:block">
              Explorador
            </div>
            {FILES.map((f) => (
              <button
                key={f.id}
                onClick={() => setActive(f.id)}
                className={`flex w-full items-center gap-2 whitespace-nowrap px-4.5 py-2 text-left font-mono text-[0.85rem] transition-colors
                  border-b-2 sm:border-b-0 sm:border-l-2
                  ${
                    active === f.id
                      ? "border-amber-300 bg-amber-300/[0.06] text-amber-300"
                      : "border-transparent text-slate-400 hover:bg-white/[0.02] hover:text-slate-100"
                  }`}
              >
                {f.name}
                <span className="opacity-60">{f.ext}</span>
              </button>
            ))}
          </nav>

          {/* Content pane */}
          <div className="p-8 motion-safe:animate-[fadeIn_0.25s_ease]">
            <ActivePane />
          </div>
        </div>
      </div>
    </div>
  );
}
