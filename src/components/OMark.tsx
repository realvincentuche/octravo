export function OMark({
  className,
  animated = false,
}: {
  className?: string
  animated?: boolean
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 120 120"
      role="img"
      aria-label="Octravo O mark"
    >
      <g
        style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
        aria-hidden="true"
      >
        <circle
          cx="60"
          cy="60"
          r="46"
          fill="none"
          stroke="#901010"
          strokeWidth="16"
          strokeLinecap="round"
          pathLength={animated ? 100 : undefined}
          className={animated ? 'o-draw' : undefined}
          strokeDasharray={animated ? undefined : '252 290'}
          transform="rotate(48 60 60)"
        />
      </g>
    </svg>
  )
}
