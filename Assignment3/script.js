class Student {
  constructor(name, rollNo, marks) {
    this.name = name;
    this.rollNo = rollNo;
    this.marks = marks;
  }

  isPassed() {
    return this.marks > 40;
  }
}

const students = [];

document.getElementById('studentForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const rollNo = document.getElementById('rollNo').value.trim();
  const marks = parseInt(document.getElementById('marks').value.trim());

  if (name && rollNo && !isNaN(marks)) {
    const student = new Student(name, rollNo, marks);
    students.push(student);
    this.reset();
    alert('Student added successfully!');
  } else {
    alert('Please fill all fields correctly.');
  }
});

function renderStudents(studentList) {
  const output = document.getElementById('outputArea');
  output.innerHTML = "";

  if (studentList.length === 0) {
    output.innerHTML = "<p>No students to display.</p>";
    return;
  }

  studentList.map(student => {
    const div = document.createElement('div');
    div.classList.add('student-card');
    div.classList.add(student.isPassed() ? 'pass' : 'fail');
    div.innerHTML = `
      <strong>Name:</strong> ${student.name}<br>
      <strong>Roll No:</strong> ${student.rollNo}<br>
      <strong>Marks:</strong> ${student.marks}<br>
      <strong>Status:</strong> ${student.isPassed() ? 'Passed ✅' : 'Failed ❌'}
    `;
    output.appendChild(div);
  });
}

function showAllStudents() {
  renderStudents(students);
}

function showPassedStudents() {
  const passed = students.filter(s => s.isPassed());
  renderStudents(passed);
}
