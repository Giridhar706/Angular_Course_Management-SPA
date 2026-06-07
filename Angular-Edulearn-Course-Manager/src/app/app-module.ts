import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { App } from './app';
import { CourseList } from './course-list/course-list';
import { CourseDetail } from './course-detail/course-detail';

@NgModule({
  declarations: [App, CourseList, CourseDetail],
  imports: [BrowserModule, FormsModule],
  bootstrap: [App],
})
export class AppModule {}
