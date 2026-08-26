interface NodeConnectorProps {
  active: boolean;
}

/**
 * The capability grid is three nodes — this draws the literal connecting
 * line between them (same idea as the logo mark) and animates it in on
 * scroll, with a small signal traveling the line afterward. Percentage
 * positions assume 3 equal columns (16.67% / 50% / 83.33%).
 */
export default function NodeConnector({ active }: NodeConnectorProps) {
  return (
    <div className="pointer-events-none absolute inset-x-0 -top-5 hidden h-5 md:block" aria-hidden="true">
      <div
        className="absolute top-1/2 h-px -translate-y-1/2 bg-line origin-left transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          left: "16.667%",
          right: "16.667%",
          transform: active ? "scaleX(1)" : "scaleX(0)",
        }}
      />
      {["16.667%", "50%", "83.333%"].map((left, i) => (
        <span
          key={left}
          className="absolute top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-line bg-paper transition-opacity duration-500"
          style={{ left, opacity: active ? 1 : 0, transitionDelay: active ? `${i * 200}ms` : "0ms" }}
        />
      ))}
      {active && (
        <span
          className="absolute top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-teal shadow-[0_0_8px_2px_rgba(45,212,191,0.6)]"
          style={{ animation: "node-travel 3.2s ease-in-out 1s infinite alternate" }}
        />
      )}
    </div>
  );
}
