"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.School = void 0;
class School {
    constructor() {
        this.students = [];
        this.classes = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    addClass(classes) {
        this.classes.push(classes);
    }
    avgStudent() {
        this.students.forEach((student) => {
            var total = Number(student.grade.reduce((total, i) => (total + i)).toFixed(2));
            console.log(`A média do aluno ${student.name} é ` + total / student.grade.length);
        });
    }
    smGrade() {
        var minGradeClass;
        let controler = 0;
        this.classes.forEach(classes => {
            classes.student.forEach(student => {
                controler =
                    student.grade.reduce((min, i) => {
                        if (!min || min > i) {
                            return (i);
                        }
                        else {
                            return (min);
                        }
                    });
                if (!minGradeClass || minGradeClass > controler) {
                    minGradeClass = controler;
                }
            });
            console.log(minGradeClass);
        });
    }
    bgGrade() {
        var maxGradeClass;
        var controler;
        this.classes.forEach(classes => {
            classes.student.forEach(student => {
                controler =
                    student.grade.reduce((max, i) => {
                        if (!max || max < i) {
                            return i;
                        }
                        else {
                            return max;
                        }
                    });
            });
            if (!maxGradeClass || maxGradeClass < controler) {
                maxGradeClass = controler;
            }
            console.log(maxGradeClass);
        });
    }
}
exports.School = School;
