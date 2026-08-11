const strokes = [
  "M2 9C40 3 120 2 200 5C260 7 300 12 338 8",
  "M2 7C60 12 160 1 200 6C250 12 300 3 338 9",
  "M2 10C50 4 140 8 200 4C260 1 300 10 338 6",
];

export default function Marked({
  children,
  variant = 0,
}: {
  children: React.ReactNode;
  variant?: 0 | 1 | 2;
}) {
  return (
    <span className="mark">
      {children}
      <svg viewBox="0 0 340 14" preserveAspectRatio="none" aria-hidden="true">
        <path d={strokes[variant]} />
      </svg>
    </span>
  );
}
