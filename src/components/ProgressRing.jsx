// Syllabus: JSX + props — receives data from parent via props
export default function ProgressRing({ percent }) {
  const circumference = 2 * Math.PI * 19;
  const dash = `${(percent / 100) * circumference} ${circumference}`;

  return (
    <div className="overall-ring">
      <svg viewBox="0 0 48 48" className="ring-svg">
        <defs>
          <linearGradient id="emberRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff4a6e" />
            <stop offset="100%" stopColor="#f97316" />
          </linearGradient>
        </defs>
        <circle cx="24" cy="24" r="19" className="ring-bg" />
        <circle cx="24" cy="24" r="19" className="ring-fill" stroke="url(#emberRingGrad)" style={{ strokeDasharray: dash }} />
      </svg>
      <div className="ring-label">
        <span id="ring-pct">{percent}%</span>
        <span className="ring-sub">done</span>
      </div>
    </div>
  );
}
