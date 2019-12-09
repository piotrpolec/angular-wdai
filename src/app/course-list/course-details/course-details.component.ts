import { Component, OnInit, Input, TemplateRef, OnChanges, SimpleChanges, ViewChild } from '@angular/core';
import { Course } from 'src/app/models/course.model';
// import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ModalDirective } from 'ngx-bootstrap';


@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css'],
})
export class CourseDetailsComponent implements OnInit, OnChanges {
  @Input() course: Course;
  @ViewChild('modal', {static: false}) public modal: ModalDirective;
  constructor() {}

  ngOnInit() {

  }

  hide() {
    this.modal.hide();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.course) {
      this.modal.show();
    }
  }

}
