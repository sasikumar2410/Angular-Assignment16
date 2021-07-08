import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPipe } from './pipes/search.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { CoursesearchPipe } from './pipes/coursesearch.pipe';
import { CoursesortPipe } from './pipes/coursesort.pipe';
import { MycolorDirective } from './directives/mycolor.directive';



@NgModule({
  declarations: [
    SearchPipe,
    SortPipe,
    CoursesearchPipe,
    CoursesortPipe,
    MycolorDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SearchPipe,
    SortPipe,
    CoursesearchPipe,
    CoursesortPipe,
    MycolorDirective
  ]
})
export class SharedModule { }
