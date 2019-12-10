import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseComponent } from './course-list/course/course.component';
import { CourseDetailsComponent } from './course-list/course-details/course-details.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherComponent } from './teacher-list/teacher/teacher.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AddCourseComponent } from './admin-panel/add-course/add-course.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { RemoveCourseComponent } from './admin-panel/remove-course/remove-course.component';
import { EditCourseComponent } from './admin-panel/edit-course/edit-course.component';
import { AddTeacherComponent } from './admin-panel/add-teacher/add-teacher.component';
import { RemoveTeacherComponent } from './admin-panel/remove-teacher/remove-teacher.component';
import { EditTeacherComponent } from './admin-panel/edit-teacher/edit-teacher.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseComponent,
    CourseDetailsComponent,
    TeacherListComponent,
    TeacherComponent,
    AddCourseComponent,
    NavbarComponent,
    AdminPanelComponent,
    RemoveCourseComponent,
    EditCourseComponent,
    AddTeacherComponent,
    RemoveTeacherComponent,
    EditTeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
