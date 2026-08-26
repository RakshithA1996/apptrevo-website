import Logo from "./Logo";
import Reveal from "./Reveal";
import MagneticButton from "./MagneticButton";

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy py-28 text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(245,246,250,0.09) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative mx-auto flex max-w-content flex-col items-start gap-10 px-6 md:flex-row md:items-center md:justify-between">
        <Reveal className="max-w-lg">
          <Logo className="mb-6 h-9 w-9" />
          <h2 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
            Have a project that needs all three?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70">
            Tell us what you're building — the device, the infrastructure, or the
            interface — and which founder should be on the call.
          </p>
        </Reveal>

        <Reveal delay={150} className="w-full max-w-sm">
          <div className="group rounded-2xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:border-teal/30 hover:bg-white/[0.07]">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-teal">Get in touch</p>
            <a
              href="mailto:hello@apptrevo.com"
              className="mt-3 block break-all font-display text-xl font-semibold text-white transition-colors hover:text-teal"
            >
              hello@apptrevo.com
            </a>
            <p className="mt-4 text-sm text-white/60">Bengaluru, India — working with clients globally.</p>
            <MagneticButton
              href="mailto:hello@apptrevo.com"
              strength={0.15}
              className="mt-6 w-full rounded-full bg-teal px-6 py-3 text-center font-body text-sm font-semibold text-navy hover:bg-teal-dark"
            >
              Email us
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
