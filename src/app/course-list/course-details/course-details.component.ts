import { Component, OnInit, Input, TemplateRef } from '@angular/core';
import {Course} from 'src/app/models/course.model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent implements OnInit {
  @Input() course: Course;
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService) { 
  }

  ngOnInit() {

  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}