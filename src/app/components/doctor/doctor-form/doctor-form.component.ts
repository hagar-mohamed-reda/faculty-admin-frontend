import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.scss']
})
export class DoctorFormComponent implements OnInit {

  @Input() title: any;
  @Input() editable: boolean = false;
  @Input() resource: any = {};

  divisions: any = [];
  degrees: any = [];
  specials: any = [];

  constructor() {
  }

  loadFile() {

  }

  ngOnInit() {
  }

}
