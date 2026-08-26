interface LogoProps {
  className?: string;
  variant?: "color" | "mono-light" | "mono-dark";
  animated?: boolean;
}

/**
 * The Apptrevo mark: three nodes (three founders / three disciplines)
 * joined into one connected triangular system. Rigid, geometric lines —
 * no organic curves — per the brand guide.
 */
export default function Logo({ className = "h-8 w-8", variant = "color", animated = false }: LogoProps) {
  const nodeA = variant === "mono-light" ? "#12163A" : variant === "mono-dark" ? "#F5F6FA" : "#12163A";
  const nodeC = variant === "color" ? "#2DD4BF" : nodeA;
  const stroke = variant === "mono-dark" ? "#F5F6FA" : "#12163A";

  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <line x1="22" y1="14" x2="14" y2="50" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
      <line
        x1="22"
        y1="14"
        x2="50"
        y2="50"
        stroke={variant === "color" ? "#2DD4BF" : stroke}
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray={animated ? "1 7" : undefined}
        className={animated ? "animate-pulse-line" : undefined}
      />
      <line x1="14" y1="50" x2="50" y2="50" stroke={stroke} strokeWidth="4" strokeLinecap="round" />
      <circle cx="22" cy="14" r="8" fill="#fff" stroke={nodeA} strokeWidth="4" />
      <circle cx="14" cy="50" r="8" fill="#fff" stroke={nodeA} strokeWidth="4" />
      <circle cx="50" cy="50" r="8" fill="#fff" stroke={nodeC} strokeWidth="4" />
    </svg>
  );
}
