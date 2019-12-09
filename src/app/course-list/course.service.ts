import { Injectable } from '@angular/core';
import {Course} from '../models/course.model'
import { TeacherService } from '../teacher-list/teacher.service';
import { Teacher } from '../models/teacher.model';
 

@Injectable({
  providedIn: 'root'
})

export class CourseService {
  courses: Course[] = Courses.courses
  constructor(private teacherService: TeacherService) {
   }

  getCourses(){
    return this.courses
  }

  getCourse(id: number) {
    return this.courses.find(course => course.id = id)
  }

  addCourse(
    name: string,
    ects: number,
    semester: number,
    type: string,
    imageUrl: string,
    description: string,
    no_of_students: number,
    teachers: Teacher[]){
      let teacherList = this.teacherService.getTeachers()
      let course: Course = {
        id: (this.courses.length + 1),
        description: description,
        ects: ects,
        type: type,
        rating: 0,
        imageUrl: imageUrl,
        no_of_students: no_of_students,
        name: name,
        semester: semester,
        teachers: teacherList
      }

    this.courses.push(course)
  }

  editCourse(   
    id: number,
    name: string,
    ects: number,
    semester: number,
    type: string,
    imageUrl: string,
    description: string,
    no_of_students: number,
    teachers: Teacher[]){
      this.courses.map(course => {
        if (course.id == id) {
          course.name = name;
          course.ects = ects;
          course.semester = semester;
          course.type = type;
          course.imageUrl = imageUrl;
          course.description = description;
          course.type = type;
          course.teachers = teachers;
        }
      });

  }

  removeCourse(id: number){
    let index = this.courses.indexOf(this.courses.find(course => course.id = id))
    this.courses.splice(index, 1)
  }
  
}

export class Courses {
  static courses = [
    {
      id: 0,
      name: "Matma",
      description: "fajny kurs",
      ects: 1,
      semester: 1,
      type: "Lecture",
      rating: 3,
      no_of_students: 1,
      imageUrl:
        "https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687",
      teachers: [
        {
          id: 1,
          firstname: "Walter",
          lastname: "White",
          imageUrl:
            "https://hips.hearstapps.com/digitalspyuk.cdnds.net/13/35/1600x1600/square_ustv-breaking-bad-season-2-pictures-4.jpg?crop=0.874xw:0.874xh;0,0.126xh&resize=480:*"
        },
        {
          id: 2,
          firstname: "Walter",
          lastname: "White",
          imageUrl:
            "https://hips.hearstapps.com/digitalspyuk.cdnds.net/13/35/1600x1600/square_ustv-breaking-bad-season-2-pictures-4.jpg?crop=0.874xw:0.874xh;0,0.126xh&resize=480:*"
        }
      ]
    },
    {
      id: 1,
      name: "costam",
      description: "fajny asdasdkurs",
      ects: 2,
      semester: 3,
      type: "Lab",
      rating: 5,
      no_of_students: 10,
      imageUrl:
        "https://s.ftcdn.net/v2013/pics/all/curated/RKyaEDwp8J7JKeZWQPuOVWvkUjGQfpCx_cover_580.jpg?r=1a0fc22192d0c808b8bb2b9bcfbf4a45b1793687",
      teachers: [
        {
          id: 3,
          firstname: "Walr",
          lastname: "W",
          imageUrl:
            "https://hips.hearstapps.com/digitalspyuk.cdnds.net/13/35/1600x1600/square_ustv-breaking-bad-season-2-pictures-4.jpg?crop=0.874xw:0.874xh;0,0.126xh&resize=480:*"
        },
        {
          id: 5,
          firstname: "Mickey",
          lastname: "Mouse",
          imageUrl:
            "https://hips.hearstapps.com/digitalspyuk.cdnds.net/13/35/1600x1600/square_ustv-breaking-bad-season-2-pictures-4.jpg?crop=0.874xw:0.874xh;0,0.126xh&resize=480:*"
        }
      ]
    }

  ];
}
