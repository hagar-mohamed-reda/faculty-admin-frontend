import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-register-student',
  templateUrl: './course-register-student.component.html',
  styleUrls: ['./course-register-student.component.scss']
})
export class CourseRegisterStudentComponent implements OnInit {

  /**
   * course objectt
   */
  @Input() course: any = {};


  constructor() { }

  ngOnInit() {
  }
}
