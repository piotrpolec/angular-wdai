import { Component, OnInit } from '@angular/core';
import { CourseService } from "./course.service";
import { Course } from '../models/course.model';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses: Course[];
  selectedCourse: Course;

  constructor(private courseService: CourseService) { }
  
  getCourses(): void {
    this.courses = this.courseService.getCourses()
  }
  
  ngOnInit() {
    this.getCourses()
  }

  onSelect(course: Course): void {
    this.selectedCourse = course;
  }

}
