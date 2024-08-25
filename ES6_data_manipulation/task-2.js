const students = [
    { name: "Alice", grade: 85, passed: true },
    { name: "Bob", grade: 70, passed: false },
    { name: "Charlie", grade: 90, passed: true },
  ];
  
  const firstNotPassed = students.find((student) => !student.passed);
  console.log("First student who has not passed:", firstNotPassed);
  
  const gradeThreshold = 80;
  const hasGradeAboveThreshold = students.some(
    (student) => student.grade > gradeThreshold,
  );
  console.log(
    `Is there at least one student with a grade above ${gradeThreshold}?`,
    hasGradeAboveThreshold,
  );
  const allPassed = students.every((student) => student.passed);
  console.log("Have all students passed?", allPassed);