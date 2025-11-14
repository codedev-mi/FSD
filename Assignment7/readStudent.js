const fs = require('fs')

fs.readFile('./student.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  try {
    const studentData = JSON.parse(data);
    studentData.forEach(student => {
        console.log("Roll No : ",student.roll_no)
        console.log("Name : ",student.name)
        console.log("Branch : ",student.branch)
        console.log("Marks : ",student.marks)
        console.log("")
    });
  } catch (err) {
    console.error('Error parsing JSON:', err);
  }
});
