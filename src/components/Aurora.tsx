import { useEffect, useRef } from "react";

const Aurora = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };

    resize();
    window.addEventListener("resize", resize);

    const waves = [
      { color: [0, 201, 167], speed: 0.0004, amplitude: 120, yOffset: 0.45, width: 0.6, opacity: 0.35, phaseOffset: 0 },
      { color: [123, 47, 190], speed: 0.0003, amplitude: 100, yOffset: 0.5, width: 0.55, opacity: 0.25, phaseOffset: 2 },
      { color: [0, 255, 135], speed: 0.00035, amplitude: 90, yOffset: 0.55, width: 0.5, opacity: 0.2, phaseOffset: 4 },
      { color: [0, 201, 167], speed: 0.00025, amplitude: 140, yOffset: 0.4, width: 0.65, opacity: 0.15, phaseOffset: 1 },
      { color: [123, 47, 190], speed: 0.00045, amplitude: 80, yOffset: 0.6, width: 0.45, opacity: 0.18, phaseOffset: 3 },
    ];

    const draw = (timestamp: number) => {
      time = timestamp;
      const w = canvas.offsetWidth;
      const h = canvas.offsetHeight;

      // Navy base
      ctx.fillStyle = "#0A1628";
      ctx.fillRect(0, 0, w, h);

      for (const wave of waves) {
        const t = time * wave.speed + wave.phaseOffset;
        const centerY = h * wave.yOffset + Math.sin(t * 0.7) * wave.amplitude * 0.3;
        const centerX = w * 0.5 + Math.sin(t * 0.5) * w * 0.15;

        const gradient = ctx.createRadialGradient(
          centerX, centerY, 0,
          centerX, centerY, w * wave.width
        );

        const [r, g, b] = wave.color;
        gradient.addColorStop(0, `rgba(${r},${g},${b},${wave.opacity})`);
        gradient.addColorStop(0.4, `rgba(${r},${g},${b},${wave.opacity * 0.5})`);
        gradient.addColorStop(1, `rgba(${r},${g},${b},0)`);

        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(Math.sin(t * 0.3) * 0.15);
        ctx.scale(1, 0.6 + Math.sin(t * 0.4) * 0.15);
        ctx.translate(-centerX, -centerY);

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, w, h);
        ctx.restore();
      }

      animationId = requestAnimationFrame(draw);
    };

    animationId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: "block" }}
    />
  );
};

export default Aurora;
