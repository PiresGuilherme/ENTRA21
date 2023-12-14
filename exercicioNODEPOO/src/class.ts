import { Student } from "./student";

export interface Class {
    capacity: number;
    student: Array<Student>;
    number: number;
}