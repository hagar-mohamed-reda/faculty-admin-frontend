import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  @Input() title: any;
  @Input() editable: boolean = false;
  @Input() resource: any = {};

  levels: any = [];
  departments: any = [];
  types: any = [];

  constructor() {
    this.types = ['normal', 'graduation'];
  }

  loadFile() {

  }

  ngOnInit() {
  }
}
