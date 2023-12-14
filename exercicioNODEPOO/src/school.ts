import { Student } from "./student";
import { Class } from "./class"

export class School {
    students: Array<Student>;
    classes: Array<Class>;

    constructor() {
        this.students = [];
        this.classes = [];
    }

    addStudent(student: Student) {
        this.students.push(student);
    }

    addClass(classes: Class) {
        this.classes.push(classes);
    }

    avgStudent() {
        this.students.forEach((student) => {
            var total:number = Number(student.grade.reduce((total, i) => (total + i)).toFixed(2))
            console.log(`A média do aluno ${student.name} é `+ total/student.grade.length
            );
        })
            ;
    }

    smGrade() {
        var minGradeClass: number;
        let controler: number = 0;
        this.classes.forEach(classes => {

            classes.student.forEach(student => {
                controler =
                    student.grade.reduce((min, i) => {
                        if (!min || min > i) {
                            return (i);
                        } else {
                            return (min)
                        }
                    })
                if (!minGradeClass || minGradeClass > controler) {
                    minGradeClass = controler
                }
            })
            console.log(minGradeClass);
        })


    }

    bgGrade() {
        var maxGradeClass: number;
        var controler: number;
        this.classes.forEach(classes => {
            classes.student.forEach(student => {
                controler =
                    student.grade.reduce((max, i) => {
                        if (!max || max < i) {
                            return i
                        } else {
                            return max
                        }
                    })
            }
            )
            if (!maxGradeClass || maxGradeClass < controler) {
                maxGradeClass = controler
            }
            console.log(maxGradeClass);
        })
    }
}

