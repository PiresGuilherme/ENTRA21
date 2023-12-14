import { Class } from "./class";
import { School } from "./school";
import { Student } from "./student";

const student1: Student = {
    name: "Alice",
    birthDate: new Date("2000-01-01"),
    email: "alice@example.com",
    password: "password123",
    grade: [90, 85, 92],
};

const student2: Student = {
    name: "Bob",
    birthDate: new Date("2000-02-01"),
    email: "bob@example.com",
    password: "password456",
    grade: [78, 88, 95],
};
const student3: Student = {
    name: "Isis",
    birthDate: new Date("2000-02-01"),
    email: "Isis@example.com",
    password: "password456",
    grade: [68, 85, 99],
};

// Exemplo de cadastro de classes
const class1: Class = {
    capacity: 30,
    student: [student1, student2, student3],
    number: 101,
};


const school = new School();
school.addStudent(student1);
school.addStudent(student2);
school.addStudent(student3);
school.addClass(class1);

school.avgStudent();
school.smGrade();
school.bgGrade();
