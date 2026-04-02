interface WaveDividerProps {
  from?: string;
  to?: string;
  flip?: boolean;
}

export default function WaveDivider({ from = "#ffffff", to = "#F8FAFC", flip = false }: WaveDividerProps) {
  return (
    <div className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`} style={{ marginTop: -1, marginBottom: -1 }}>
      <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] sm:h-[80px] lg:h-[120px]">
        <path
          d="M0,60 C240,120 480,0 720,60 C960,120 1200,0 1440,60 L1440,120 L0,120 Z"
          fill={to}
        />
        <rect width="1440" height="60" fill={from} opacity="0" />
      </svg>
    </div>
  );
}
