function StatsCards({ students }) {
  const total = students.length;

  let passCount = 0;
  let totalMarks = 0;

  for (let i = 0; i < students.length; i++) {
    if (students[i].marks >= 40) {
      passCount = passCount + 1;
    }
    totalMarks = totalMarks + students[i].marks;
  }

  const failCount = total - passCount;
  const average = total === 0 ? 0 : (totalMarks / total).toFixed(1);

  return (
    <p className="stats">
      Total: {total} | Passed: {passCount} | Failed: {failCount} | Average
      Marks: {average}
    </p>
  );
}

export default StatsCards;
