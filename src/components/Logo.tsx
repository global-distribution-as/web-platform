interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
  compact?: boolean;
}

const Logo = ({ className = "h-10", variant = "dark", compact = false }: LogoProps) => {
  const textColor = variant === "dark" ? "#F8F8FF" : "#0A1628";
  const globeBlue = "#60A5FA";
  const globeGray = "#94A3B8";

  if (compact) {
    return (
      <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        {/* Globe icon only */}
        <circle cx="20" cy="20" r="14" stroke={globeBlue} strokeWidth="1.5" fill="none" />
        <ellipse cx="20" cy="20" rx="8" ry="14" stroke={globeGray} strokeWidth="1" fill="none" />
        <ellipse cx="20" cy="20" rx="3" ry="14" stroke={globeGray} strokeWidth="0.7" fill="none" />
        <line x1="6" y1="14" x2="34" y2="14" stroke={globeGray} strokeWidth="0.7" />
        <line x1="6" y1="20" x2="34" y2="20" stroke={globeBlue} strokeWidth="1" />
        <line x1="6" y1="26" x2="34" y2="26" stroke={globeGray} strokeWidth="0.7" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 320 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Center the full logo — GL + globe + BAL spans ~148px, starts at x=86 */}
      {/* GL */}
      <text x="86" y="30" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="30" fill={textColor} letterSpacing="2" textAnchor="end">
        GL
      </text>

      {/* Globe icon replacing O — optically centered */}
      <g transform="translate(88, 2)">
        <circle cx="13" cy="13" r="12" stroke={globeBlue} strokeWidth="1.5" fill="none" />
        <ellipse cx="13" cy="13" rx="6.5" ry="12" stroke={globeGray} strokeWidth="0.8" fill="none" />
        <ellipse cx="13" cy="13" rx="2.5" ry="12" stroke={globeGray} strokeWidth="0.5" fill="none" />
        <line x1="1" y1="8.5" x2="25" y2="8.5" stroke={globeGray} strokeWidth="0.6" />
        <line x1="1" y1="13" x2="25" y2="13" stroke={globeBlue} strokeWidth="0.8" />
        <line x1="1" y1="17.5" x2="25" y2="17.5" stroke={globeGray} strokeWidth="0.6" />
      </g>

      {/* BAL */}
      <text x="116" y="30" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="30" fill={textColor} letterSpacing="2">
        BAL
      </text>

      {/* DISTRIBUTION AS — centered below */}
      <text x="160" y="52" fontFamily="Inter, sans-serif" fontWeight="400" fontSize="11" fill={textColor} letterSpacing="6" opacity="0.45" textAnchor="middle">
        DISTRIBUTION AS
      </text>
    </svg>
  );
};

export default Logo;
