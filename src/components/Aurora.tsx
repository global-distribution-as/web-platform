const Aurora = () => {
  return (
    <div className="absolute inset-0 overflow-hidden bg-navy">
      <div
        className="absolute w-[200%] h-[200%] opacity-30"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(0,201,167,0.4) 0%, transparent 60%)',
          animation: 'aurora-shift 12s ease-in-out infinite',
        }}
      />
      <div
        className="absolute w-[200%] h-[200%] opacity-20"
        style={{
          background: 'radial-gradient(ellipse at 30% 40%, rgba(123,47,190,0.5) 0%, transparent 55%)',
          animation: 'aurora-shift-2 15s ease-in-out infinite',
        }}
      />
      <div
        className="absolute w-[200%] h-[200%] opacity-25"
        style={{
          background: 'radial-gradient(ellipse at 70% 60%, rgba(0,255,135,0.3) 0%, transparent 50%)',
          animation: 'aurora-shift-3 18s ease-in-out infinite',
        }}
      />
    </div>
  );
};

export default Aurora;
