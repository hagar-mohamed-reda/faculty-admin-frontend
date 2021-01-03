import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  @Input() title: any;
  @Input() editable: boolean = false;
  @Input() resource: any = {};

  facultys: any = [];
  departments: any = [];
  types: any = [];

  constructor() {
    this.types = ['super-admin', 'admin', 'student', 'doctor'];
  }

  loadFile() {

  }

  ngOnInit() {
  }


}
