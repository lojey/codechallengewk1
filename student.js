
function getStudentsGrade() {
  // asks user to enter student marks
  let marks = prompt("Please enter student marks (0 to 100):");

  // Convert the input to a number
  marks = Number(marks);

  // system validates input ie number between 0 and 100
  if (isNaN(marks) || marks < 0 || marks > 100) {
    alert("Invalid input. Please enter a number between 0 and 100.");
    return;
  }

  // Determine the grade 
  let grade;
  if (marks > 79) {
    grade = 'A';
  } else if (marks >= 60) {
    grade = 'B';
  } else if (marks >= 50) {
    grade = 'C';
  } else if (marks >= 40) {
    grade = 'D';
  } else {
    grade = 'E';
  }

  // Grade output shown
  alert("The grade is: " + grade);
}

//  prompt the user
getStudentsGrade();

