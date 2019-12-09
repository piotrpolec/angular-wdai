import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCourseComponent } from './admin-panel/add-course/add-course.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { EditCourseComponent } from './admin-panel/edit-course/edit-course.component';
import { RemoveTeacherComponent } from './admin-panel/remove-teacher/remove-teacher.component';
import { AddTeacherComponent } from './admin-panel/add-teacher/add-teacher.component';
import { EditTeacherComponent } from './admin-panel/edit-teacher/edit-teacher.component';
import { RemoveCourseComponent } from './admin-panel/remove-course/remove-course.component';
import { CourseListComponent } from './course-list/course-list.component';
import { TeacherListComponent } from './teacher-list/teacher-list.component';


const routes: Routes = [
  { path: "courses",component: CourseListComponent },
  { path: "teachers", component: TeacherListComponent},
  {
  path: "admin-panel",
  component: AdminPanelComponent,
  children: [
    { path: "add-course", component: AddCourseComponent },
    { path: "edit-course/:id", component: EditCourseComponent},
    { path: "remove-course/:id", component: RemoveCourseComponent },
    { path: "add-teacher", component: AddTeacherComponent },
    { path: "remove-teacher/:id", component: RemoveTeacherComponent },
    { path: "edit-teacher/:id", component: EditTeacherComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
