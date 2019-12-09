import { Injectable } from '@angular/core';
import { Teacher } from '../models/teacher.model';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {
  static getTeachers() {
    throw new Error("Method not implemented.");
  }

  constructor() { }
  teachers: Teacher[] = [
    {
      id: 1,
      firstname: "Jan",
      lastname: "Kowalski",
      imageUrl:
        "https://image.shutterstock.com/image-photo/portrait-happy-mature-man-wearing-260nw-732336316.jpg",
      // mail: "a@gmail.com",
      // personalPage: "www.google.com",
      // telephone: "123123123"
    },
    {
      id: 2,
      firstname: "abba",
      lastname: "Kowalski",
      imageUrl:
        "https://image.shutterstock.com/image-photo/portrait-happy-mature-man-wearing-260nw-732336316.jpg",
      // mail: "ww@gmail.com",
      // personalPage: "www.google.com",
      // telephone: "123123123"
    },
    {
      id: 3,
      firstname: "Walter",
      lastname: "Kowalski",
      imageUrl:
        "https://image.shutterstock.com/image-photo/portrait-happy-mature-man-wearing-260nw-732336316.jpg",
      // mail: "ww@gmail.com",
      // personalPage: "www.google.com",
      // telephone: "123123123"
    }
  ]
  getTeachers() {
    return this.teachers;
  }
}
