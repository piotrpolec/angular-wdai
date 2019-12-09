import { Injectable } from '@angular/core';
import { Courses } from './course.service';

@Injectable({
  providedIn: 'root'
})
export class CourseDetailsService {

  constructor() {
  
   }

   getDetails(id: number) {
    return Courses.courses.find(course => course.id = id)
  }
}
