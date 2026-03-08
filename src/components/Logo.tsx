interface LogoProps {
  className?: string;
  variant?: "light" | "dark";
}

const Logo = ({ className = "h-10", variant = "light" }: LogoProps) => {
  const textColor = variant === "light" ? "#FFFFFF" : "#0A1628";
  const accentColor = "#C9A84C";

  return (
    <svg
      viewBox="0 0 420 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <text
        x="0"
        y="36"
        fontFamily="Inter, sans-serif"
        fontWeight="700"
        fontSize="30"
        fill={textColor}
        letterSpacing="1"
      >
        GLOBAL DISTRIBUTION
      </text>
      <text
        x="348"
        y="36"
        fontFamily="Inter, sans-serif"
        fontWeight="400"
        fontSize="30"
        fill={accentColor}
        letterSpacing="1"
      >
        AS
      </text>
    </svg>
  );
};

export default Logo;
