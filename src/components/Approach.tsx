import { industries } from "../data/content";
import Reveal from "./Reveal";

export default function Approach() {
  return (
    <section id="approach" className="border-y border-line bg-white py-28">
      <div className="mx-auto max-w-content px-6">
        <div className="grid gap-16 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <p className="eyebrow mb-4">Approach</p>
            <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight text-navy md:text-4xl">
              Infrastructure, integration, and interface.
              <br />
              Engineered together, not handed off.
            </h2>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-muted">
              We work with automotive, industrial, and B2B software teams who need
              software that talks to real hardware, runs on infrastructure built to
              stay up, and ships through interfaces engineers actually trust. No
              hand-offs between disconnected vendors — one team owns the whole path.
            </p>
          </Reveal>

          <Reveal delay={150} className="space-y-6">
            <div className="rounded-xl border border-line bg-paper p-6 transition-all duration-300 hover:border-teal/30 hover:shadow-[0_20px_45px_-25px_rgba(18,22,58,0.25)]">
              <p className="font-display text-sm font-semibold uppercase tracking-wide text-navy">
                Who we build for
              </p>
              <ul className="mt-4 space-y-3">
                {industries.map((item) => (
                  <li
                    key={item}
                    className="group flex items-center gap-3 text-sm text-ink-muted transition-all duration-200 hover:translate-x-1 hover:text-navy"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-teal transition-transform duration-200 group-hover:scale-125" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border border-line bg-navy p-6 text-white transition-all duration-300 hover:shadow-[0_20px_45px_-25px_rgba(18,22,58,0.45)]">
              <p className="font-display text-sm font-semibold uppercase tracking-wide text-teal">
                How we talk
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                Confident, precise, no fluff. We lead with capability and proof —
                protocols, platforms, scale numbers — over adjectives.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
