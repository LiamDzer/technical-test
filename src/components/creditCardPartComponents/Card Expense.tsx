const CardExpenseStatistics = () => {
  const expenses = [
    { name: "DBL Bank", color: "#4C78FF" },
    { name: "BRC Bank", color: "#FF82AC" },
    { name: "ABM Bank", color: "#16DBCC" },
    { name: "MCP", color: "#FFBB38" },
  ];

  return (
    <div className="content-box card-expense-statistics">
      <div className="expense-chart">{/* Chart goes here */}</div>

      <div className="expense-legend-grid">
        {expenses.map((expense) => (
          <div
            className="legend-item d-flex align-items-center gap-2"
            key={expense.name}
          >
            {/* Circle before the name */}
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
