import React from 'react';

const curve = (a, b, amount = 13) => {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const length = Math.hypot(dx, dy) || 1;
  const cx = (a.x + b.x) / 2 - (dy / length) * amount;
  const cy = (a.y + b.y) / 2 + (dx / length) * amount;
  return {
    d: `M ${a.x} ${a.y} Q ${cx} ${cy} ${b.x} ${b.y}`,
    mid: { x: (a.x + 2 * cx + b.x) / 4, y: (a.y + 2 * cy + b.y) / 4 },
  };
};

export default function WorldMapPath({ nodes, unlocked, active = null }) {
  const segments = nodes.slice(0, -1).map((from, index) => {
    const { d, mid } = curve(from, nodes[index + 1]);
    return {
      index,
      d,
      mid,
      lit: unlocked[index + 1],
      hot: active === index || active === index + 1,
    };
  });

  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="light-open" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#67e8f9" />
          <stop offset="45%" stopColor="#c4b5fd" />
          <stop offset="100%" stopColor="#f0abfc" />
        </linearGradient>
        <linearGradient id="light-sleep" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#7dd3fc" />
          <stop offset="100%" stopColor="#a78bfa" />
        </linearGradient>
      </defs>

      {segments.map(({ index, d, mid, lit, hot }) => {
        const haloWidth = lit ? (hot ? 20 : 15) : 11;
        const haloOpacity = lit ? (hot ? 0.55 : 0.36) : 0.24;
        const coreWidth = lit ? (hot ? 3.4 : 2.4) : 2;
        const coreOpacity = lit ? (hot ? 1 : 0.85) : 0.6;

        return (
          <g key={index}>
            {/* aura del camino */}
            <path
              d={d}
              fill="none"
              stroke={lit ? '#67e8f9' : '#8ea6ff'}
              strokeOpacity={haloOpacity}
              strokeWidth={haloWidth}
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={{ filter: 'blur(6px)' }}
            />

            {/* cinta de luz */}
            <path
              d={d}
              fill="none"
              stroke={lit ? 'url(#light-open)' : 'url(#light-sleep)'}
              strokeOpacity={coreOpacity}
              strokeWidth={coreWidth}
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={{ filter: lit ? 'drop-shadow(0 0 6px rgba(103,232,249,0.85))' : 'none' }}
            />

            {/* corriente animada */}
            <path
              className={lit ? 'light-path' : 'light-path-slow'}
              d={d}
              fill="none"
              stroke="#ffffff"
              strokeOpacity={lit ? 0.9 : 0.55}
              strokeWidth={lit ? 3.2 : 2.2}
              strokeDasharray="2 8"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              style={{ filter: lit ? 'drop-shadow(0 0 5px #a5f3fc)' : 'none' }}
            />

            {/* chispas que viajan de un mundo a otro */}
            <circle r="1.3" fill="#ffffff" opacity={lit ? 1 : 0.6} style={{ filter: 'drop-shadow(0 0 7px #67e8f9)' }}>
              <animateMotion dur={`${4.6 + index * 0.7}s`} begin={`${index * 0.5}s`} repeatCount="indefinite" path={d} />
            </circle>
            <circle r="0.9" fill="#f5d0fe" opacity={lit ? 0.85 : 0.45} style={{ filter: 'drop-shadow(0 0 6px #f0abfc)' }}>
              <animateMotion dur={`${5.4 + index * 0.5}s`} begin={`${index * 0.5 + 2.2}s`} repeatCount="indefinite" path={d} />
            </circle>

            {/* puerta de energía entre los dos mundos */}
            <g>
              <circle cx={mid.x} cy={mid.y} r="2.2" fill={lit ? '#a5f3fc' : '#bfdbfe'} opacity="0.18">
                <animate attributeName="r" values="1.6 3.4 1.6" dur="3.4s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.35 0.06 0.35" dur="3.4s" repeatCount="indefinite" />
              </circle>
              <circle
                cx={mid.x}
                cy={mid.y}
                r="1.9"
                fill="none"
                stroke={lit ? '#f0abfc' : '#c7d2fe'}
                strokeOpacity={lit ? 0.7 : 0.35}
                strokeWidth="1.4"
                strokeDasharray="1.4 2.4"
                vectorEffect="non-scaling-stroke"
              >
                <animateTransform
                  attributeName="transform"
                  type="rotate"
                  from={`0 ${mid.x} ${mid.y}`}
                  to={`360 ${mid.x} ${mid.y}`}
                  dur="11s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx={mid.x} cy={mid.y} r="0.8" fill="#ffffff" opacity={lit ? 0.95 : 0.5}>
                <animate attributeName="opacity" values="1 0.5 1" dur="2.6s" repeatCount="indefinite" />
              </circle>
            </g>
          </g>
        );
      })}
    </svg>
  );
}