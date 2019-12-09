import { Teacher } from './teacher.model';

export class Course {
    id: number
    name: string
    description: string
    ects: number
    semester: number
    type: string
    no_of_students: number
    rating: number
    imageUrl: string
    teachers: Teacher[]
  }