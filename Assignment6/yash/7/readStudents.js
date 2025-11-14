// Use path to make the file path relative to the script's directory
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'student.json');

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  
  try {
    const students = JSON.parse(data);
    console.log('names and details of students:');
    students.forEach(student => {
      console.log(`ID: ${student.id}`);
      console.log(`Name: ${student.name}`);
      console.log(`Age: ${student.age}`);
      console.log(`Major :${student.major}`);
      console.log("");
 
    });
  } catch (parseErr) {
    console.error('Error parsing JSON:', parseErr);
  }
});

