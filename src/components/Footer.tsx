import Logo from "./Logo";
import { nav } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy py-10 text-white">
      <div className="mx-auto flex max-w-content flex-col items-center gap-6 px-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-2.5">
          <Logo className="h-6 w-6" />
          <span className="font-display text-sm font-semibold">Apptrevo</span>
          <span className="hidden text-sm text-white/40 md:inline">— Engineering that connects.</span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/60 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <p className="text-xs text-white/40">© {new Date().getFullYear()} Apptrevo. All rights reserved.</p>
      </div>
    </footer>
  );
}
