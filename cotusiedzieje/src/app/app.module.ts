import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseListComponent } from './course-list/course-list.component';
import { CourseComponent } from './course-list/course/course.component';
import { CourseDetailsComponent } from './course-list/course-details/course-details.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';
import { TeacherComponent } from './teacher-list/teacher/teacher.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
    CourseComponent,
    CourseDetailsComponent,
    TeacherListComponent,
    TeacherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
