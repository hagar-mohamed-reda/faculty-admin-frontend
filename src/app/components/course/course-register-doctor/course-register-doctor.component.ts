import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-register-doctor',
  templateUrl: './course-register-doctor.component.html',
  styleUrls: ['./course-register-doctor.component.scss']
})
export class CourseRegisterDoctorComponent implements OnInit {

  /**
   * course objectt
   */
  @Input() course: any = {};


  constructor() { }

  ngOnInit() {
  }

}
