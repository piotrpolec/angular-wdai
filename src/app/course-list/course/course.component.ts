import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Course } from '../../models/course.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  @Input() course: Course;
  @Output() selectedCourse: EventEmitter<Course> = new EventEmitter();
  @Output() removedCourse: EventEmitter<Course> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onSelect(): void {
    this.selectedCourse.emit(this.course)
  }
  onRemoveCourse(): void {
    this.removedCourse.emit(this.course)
  }
}
