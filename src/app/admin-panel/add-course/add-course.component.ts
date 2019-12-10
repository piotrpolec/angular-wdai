import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Teacher } from 'src/app/models/teacher.model';
import { TeacherService } from 'src/app/teacher-list/teacher.service';
import { CourseService } from 'src/app/course-list/course.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
 
@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  teachers: Teacher[] ;
  // courseTeachers = [];
  modelForm: FormGroup;
  constructor(
    private teacherService: TeacherService,
    private courseService: CourseService,
    private router: Router,
    private route: ActivatedRoute, 
    private formBuilder : FormBuilder
  ) {}

  ngOnInit() {
    this.modelForm = this.formBuilder.group({
      name: ['', Validators.required],
      ects: ['', [Validators.required, Validators.max(30)]],
      semester: ['',[Validators.required, Validators.max(10)]],
      type: ['',Validators.required],
      imageUrl: ['',Validators.required],
      description: ['',Validators.required],
      no_of_students: ['',Validators.required]
    });

    this.modelForm.valueChanges.subscribe((value) => {
      this.onControlValueChanged();
    });
   
    this.onControlValueChanged();
  }

  onSubmit() {
    this.courseService.addCourse(
      this.modelForm.value["name"],
      this.modelForm.value["ects"],
      this.modelForm.value["semester"],
      this.modelForm.value["type"],
      this.modelForm.value["imageUrl"],
      this.modelForm.value["description"],
      this.modelForm.value["no_of_students"],
      this.teacherService.getTeachers()
    );
    this.router.navigate(["/courses"]);
  }

  onCancel() {
    console.log("cancel");
    this.router.navigate(["/admin-panel/add-course"]);
  }

  formErrors = {
    name: '',
    ects: '',
    semester: '',
    type: '',
    imageUrl: '',
    description: '',
    no_of_students: ''
  }
  private validationMessages = {
    name: {
      required: 'name is required'
    },
    ects: {
      required: 'ects is required',
      max: 'ects cannot exceed 30 points'
    },
    semester: {
      required:'semester is required',
      max: 'cannot exceed 10'
    },
    type: {
      required:'type is required'
    },
    imageUrl: {
      required:'imageUrl is required'
    },
    description: {
      required:'description is required'
    },
    no_of_students: {
      required: 'number of students is required'
    }
  }
  onControlValueChanged() {
    const form = this.modelForm;
  
    for (let field in this.formErrors) {
      this.formErrors[field] = '';
      let control = form.get(field); 
  
      if (control && !control.valid) {
        const validationMessages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += validationMessages[key] + ' ';
        }
      }
    }
  }


}
