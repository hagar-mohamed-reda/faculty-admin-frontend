import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.scss']
})
export class StudentFormComponent implements OnInit {

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
