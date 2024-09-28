class JavaScriptCourse {
  students = [];

  addStudent(name, grades) {
    const student = {
      name,
      grades,
    };

    this.students.push(student);
  }

  getAverageGrades() {
    return this.students.map(student => ({
      name: student.name,
      grades: Math.round(
        student.grades.reduce((a, b) => a + b, 0) / student.grades.length
      ),
    }));
  }

  getStudentsAboveAverage(avg) {
    return this.getAverageGrades().filter(student => student.grades >= avg);
  }

  allStudentsPassed(passingGrade) {
    return this.students.every(student =>
      student.grades.every(grade => grade >= passingGrade)
    );
  }
}

const jsCourse = new JavaScriptCourse();

jsCourse.addStudent('Alice', [85, 90, 78]);
jsCourse.addStudent('Bob', [60, 75, 70]);
jsCourse.addStudent('Charlie', [95, 92, 88]);

console.log('Средние оценки студентов:', jsCourse.getAverageGrades());

console.log(
  'Студенты с оценками выше 80:',
  jsCourse.getStudentsAboveAverage(80)
);

console.log('Все студенты прошли курс:', jsCourse.allStudentsPassed(75));
