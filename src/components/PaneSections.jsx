import { skills, projects, contact, languages, primarySkills } from "../data/portfolio.js";

export function AboutPane() {
  return (
    <div>
      <div className="font-mono text-[0.85rem] text-slate-400">// about.js</div>
      <h2 className="mb-4.5 mt-1 font-mono text-[1.3rem] text-slate-100">
        <span className="text-pink-300">const</span>{" "}
        <span className="text-teal-300">yo</span> = {"{"}
      </h2>
      <p className="max-w-[60ch] text-[0.98rem] text-slate-100">
        Soy <strong>Derek Huizar</strong>, un futuro desarrollador full stack.
        Ahora mismo lo que más manejo es <strong>JavaScript</strong> y{" "}
        <strong>React</strong>, y uso <strong>GitHub</strong> como muestreo de
        mis proyectos.
      </p>
      <p className="mt-3 max-w-[60ch] text-[0.98rem] text-slate-100">
        En el resto de los lenguajes y herramientas que manejo tengo bases
        básicas, y las voy reforzando proyecto a proyecto. Trabajo
        principalmente en <strong>Ubuntu</strong> para el despliegue de mis
        proyectos en una terminal de un VPS KVM 4 de <strong>Hostinger</strong>,
        y mis proyectos ya están terminados y en funcionamiento, pero los
        pienso siempre con espacio para mejorar y escalar.
      </p>
      <p className="mt-3 max-w-[60ch] text-[0.98rem] text-slate-100">
        Mi español es <strong>nativo</strong> y mi inglés es{" "}
        <strong>intermedio-avanzado (B2)</strong>.
      </p>
    </div>
  );
}

function SkillGroup({ label, items, dotClass, badgeBorder }) {
  return (
    <div className="mt-5.5">
      <div className="mb-2.5 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-slate-400">
        <span className={`h-2 w-2 rounded-sm ${dotClass}`} />
        {label}
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => {
          const isPrimary = primarySkills.includes(item);
          return (
            <span
              key={item}
              className={`rounded-md border bg-white/5 px-3 py-1.5 font-mono text-[0.82rem] text-slate-100 ${badgeBorder} ${
                isPrimary ? "ring-1 ring-amber-300/50" : "opacity-70"
              }`}
              title={isPrimary ? "Lo que más uso ahora mismo" : "Bases básicas"}
            >
              {isPrimary && <span className="mr-1 text-amber-300">★</span>}
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export function SkillsPane() {
  return (
    <div>
      <div className="font-mono text-[0.85rem] text-slate-400">// skills.json</div>
      <h2 className="mb-4.5 mt-1 font-mono text-[1.3rem] text-slate-100">
        {"{ lenguajes_y_herramientas }"}
      </h2>
      <p className="mb-1 max-w-[60ch] text-[0.85rem] text-slate-400">
        <span className="text-amber-300">★</span> = lo que más uso y donde
        tengo más habilidad ahora mismo. El resto lo manejo a nivel básico.
      </p>

      <SkillGroup
        label="Frontend"
        items={skills.frontend}
        dotClass="bg-teal-300"
        badgeBorder="border-teal-300/35"
      />
      <SkillGroup
        label="Backend"
        items={skills.backend}
        dotClass="bg-amber-300"
        badgeBorder="border-amber-300/35"
      />
      <SkillGroup
        label="Herramientas"
        items={skills.tools}
        dotClass="bg-pink-300"
        badgeBorder="border-pink-300/35"
      />

      <div className="mt-5.5">
        <div className="mb-2.5 flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-slate-400">
          <span className="h-2 w-2 rounded-sm bg-slate-300" />
          Idiomas
        </div>
        <div className="flex flex-wrap gap-2">
          {languages.map((lang) => (
            <span
              key={lang.name}
              className="rounded-md border border-slate-300/25 bg-white/5 px-3 py-1.5 font-mono text-[0.82rem] text-slate-100"
            >
              {lang.name} — {lang.level}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function ProjectsPane() {
  return (
    <div>
      <div className="font-mono text-[0.85rem] text-slate-400"># projects.md</div>
      <h2 className="mb-2 mt-1 font-mono text-[1.3rem] text-slate-100">
        Mis proyectos
      </h2>
      <p className="max-w-[60ch] text-[0.95rem] text-slate-100">
        Estos son proyectos que ya terminé y tengo funcionando, pero los
        construí pensando en que puedan crecer: más funciones, más usuarios,
        más escala.
      </p>

      <div className="mt-4 space-y-4">
        {projects.map((p) => (
          <div
            key={p.name}
            className="rounded-lg border border-white/10 bg-white/[0.04] p-5"
          >
            <h3 className="mb-1.5 font-mono text-[1.02rem] text-slate-100">
              {p.name}
            </h3>
            <p className="mb-3 text-[0.92rem] text-slate-400">
              {p.description}
            </p>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="break-all font-mono text-[0.85rem] text-teal-300 hover:underline"
            >
              {p.url}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ContactPane() {
  return (
    <div>
      <div className="font-mono text-[0.85rem] text-slate-400">// contact.txt</div>
      <h2 className="mb-4.5 mt-1 font-mono text-[1.3rem] text-slate-100">
        Contáctame
      </h2>

      <p className="mb-5 max-w-[60ch] text-[0.95rem] text-slate-100">
        Estoy buscando mis primeras oportunidades como desarrollador full
        stack. Si tienes un proyecto, una vacante o simplemente quieres
        platicar sobre código, escríbeme.
      </p>

      <div className="mb-2.5 font-mono text-[0.95rem]">
        <span className="text-slate-400">correo</span> →{" "}
        <a
          href={`mailto:${contact.email}`}
          className="text-amber-300 hover:underline"
        >
          {contact.email}
        </a>
      </div>

      <div className="mb-2.5 font-mono text-[0.95rem]">
        <span className="text-slate-400">github</span> →{" "}
        <a
          href={contact.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-300 hover:underline"
        >
          {contact.githubLabel}
        </a>
      </div>

      <div className="mb-2.5 font-mono text-[0.95rem]">
        <span className="text-slate-400">ubicación</span> → Sonora, México
        (GMT-7) · Abierto a remoto
      </div>

      <div className="mb-2.5 font-mono text-[0.95rem]">
        <span className="text-slate-400">idiomas</span> → Español (nativo) ·
        Inglés (B2)
      </div>

      <div className="font-mono text-[0.95rem]">
        <span className="text-slate-400">respuesta</span> → Normalmente
        respondo en menos de 24 horas
      </div>
    </div>
  );
}
