const CardExpenseStatistics = () => {
  const expenses = [
    { name: "DBL Bank", color: "#4C78FF", value: 100 },
    { name: "BRC Bank", color: "#FF82AC", value: 55 },
    { name: "ABM Bank", color: "#16DBCC", value: 70 },
    { name: "MCP Bank", color: "#FFBB38", value: 85 },
  ];

  const size = 220;
  const center = size / 2;
  const maxRadius = size * 0.4;
  const maxValue = 100;

  const getPoint = (angle: number, radius: number) => {
    const radians = ((angle - 90) * Math.PI) / 180;

    return {
      x: center + radius * Math.cos(radians),
      y: center + radius * Math.sin(radians),
    };
  };

  const createSection = (
    startAngle: number,
    endAngle: number,
    value: number,
  ) => {
    const radius = (value / maxValue) * maxRadius;

    const start = getPoint(startAngle, radius);
    const end = getPoint(endAngle, radius);

    return `
      M ${center} ${center}
      L ${start.x} ${start.y}
      A ${radius} ${radius} 0 0 1 ${end.x} ${end.y}
      Z
    `;
  };

  const sections = [
    {
      start: 0,
      end: 90,
      value: expenses[0].value,
      color: expenses[0].color,
    },
    {
      start: 90,
      end: 180,
      value: expenses[1].value,
      color: expenses[1].color,
    },
    {
      start: 180,
      end: 270,
      value: expenses[2].value,
      color: expenses[2].color,
    },
    {
      start: 270,
      end: 360,
      value: expenses[3].value,
      color: expenses[3].color,
    },
  ];

  return (
    <div className="content-box card-expense-statistics">
      <div className="expense-chart">
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          {/* Background circles */}
          {[0.25, 0.5, 0.75, 1].map((scale) => (
            <circle
              key={scale}
              cx={center}
              cy={center}
              r={maxRadius * scale}
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="1"
            />
          ))}

          {/* Four 90° sections */}
          {sections.map((section, index) => (
            <path
              key={index}
              d={createSection(section.start, section.end, section.value)}
              fill={section.color}
              stroke="#FFFFFF"
              strokeWidth="2"
            />
          ))}

          {/* Center point */}
          <circle cx={center} cy={center} r="4" fill="#FFFFFF" />
        </svg>
      </div>

      <div className="expense-legend-grid">
        {expenses.map((expense) => (
          <div
            className="legend-item d-flex align-items-center justify-content-center gap-1"
            key={expense.name}
          >
            <span
              style={{
                display: "inline-block",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor: expense.color,
              }}
            ></span>

            <span>{expense.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardExpenseStatistics;
