import { capabilities } from "../data/content";
import Reveal from "./Reveal";
import NodeConnector from "./NodeConnector";
import useInView from "../hooks/useInView";

export default function Capabilities() {
  const { ref: gridRef, inView: gridInView } = useInView<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section id="capabilities" className="bg-paper py-28">
      <div className="mx-auto max-w-content px-6">
        <Reveal className="max-w-xl">
          <p className="eyebrow mb-4">What we do</p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-navy md:text-4xl">
            Three disciplines. One connected system.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-muted">
            Each founder leads one discipline. Together they cover the full path from
            infrastructure, to the devices it talks to, to the interface a person
            actually uses.
          </p>
        </Reveal>

        <div ref={gridRef} className="relative mt-20">
          <NodeConnector active={gridInView} />

          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
            {capabilities.map((cap, i) => (
              <Reveal key={cap.id} delay={i * 120}>
                <div className="group relative flex h-full flex-col gap-5 bg-paper p-8 transition-all duration-300 hover:z-10 hover:-translate-y-1.5 hover:bg-white hover:shadow-[0_20px_45px_-20px_rgba(18,22,58,0.25)]">
                  <span className="eyebrow transition-colors duration-300 group-hover:text-teal">
                    {cap.label}
                  </span>
                  <h3 className="font-display text-xl font-semibold text-navy">{cap.title}</h3>
                  <p className="text-sm leading-relaxed text-ink-muted">{cap.description}</p>

                  <ul className="flex flex-wrap gap-2 pt-1">
                    {cap.stack.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-line bg-white px-3 py-1 font-mono text-[11px] text-ink-muted transition-colors duration-300 group-hover:border-teal/30"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  {cap.note && (
                    <p className="mt-auto rounded-lg border border-teal/25 bg-teal/5 px-4 py-3 text-xs leading-relaxed text-navy">
                      <span className="font-semibold">Scope: </span>
                      {cap.note}
                    </p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
