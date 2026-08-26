import { founders } from "../data/content";
import Reveal from "./Reveal";

export default function Team() {
  return (
    <section id="team" className="bg-paper py-28">
      <div className="mx-auto max-w-content px-6">
        <Reveal className="max-w-xl">
          <p className="eyebrow mb-4">The team</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl">
            Three founders. Three disciplines.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            No layers between you and the person doing the work — every engagement is
            led directly by the founder who owns that discipline.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {founders.map((person, i) => (
            <Reveal key={person.name} delay={i * 120}>
              <div className="group flex h-full flex-col gap-4 rounded-2xl border border-line bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-teal/30 hover:shadow-[0_20px_45px_-20px_rgba(18,22,58,0.25)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-navy font-display text-sm font-semibold text-teal transition-transform duration-300 group-hover:scale-110">
                  {person.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-navy">{person.name}</h3>
                  <p className="mt-1 text-sm font-medium text-teal-dark">{person.role}</p>
                </div>
                <p className="text-sm leading-relaxed text-ink-muted">{person.bio}</p>
                <p className="mt-auto font-mono text-[11px] text-ink-soft">{person.focus}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
