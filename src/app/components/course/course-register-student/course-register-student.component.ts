import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Helper } from 'src/app/shared/helper';
import { Message } from 'src/app/shared/message';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-course-register-student',
  templateUrl: './course-register-student.component.html',
  styleUrls: ['./course-register-student.component.scss']
})
export class CourseRegisterStudentComponent implements OnInit, OnChanges {

  /**
   * course objectt
   */
  @Input() course: any = {};
  filter: any = {};
  response: any = {};
  students: any = [];
  levels: any = [];
  departments: any = [];


  constructor(private globalService: GlobalService) { }

  get(data: any={}) {
    data.course_id = this.course.id;
    this.globalService.get("students", data).subscribe((res: any) => {
      this.response = res;
      this.students = res.data;
    });
  }


  /**
   * pre panination
   */
  prePagniation() {
    Helper.prepagination(this.response);
    console.log(this.response);
  }

  loadFilters() {
    this.globalService.get("levels").subscribe((r) => {
      this.levels = r;
    });
    this.globalService.get("departments").subscribe((r) => {
      this.departments = r;
    });
  }

  assign(item, checked) {
    if (!item.group_id && !checked) {
      item.is_register = false;
      return Message.error(Helper.trans('choice group first'));
    }
    let data = {
      course_id: this.course.id,
      group_id: item.group_id,
      student_id: item.id
    };
    this.globalService.store("student-registers/register", data).subscribe((res: any) => {
      if (res.status == 1) {
        Message.success(res.message);
      } else {
        Message.error(res.message);
      }
      if (res.data)
        item.is_register = true;
      else {
        item.group_id = null;
        item.is_register = false;
      }
    });
  }


  ngOnInit() {
    this.loadFilters();
    this.get();
  }

  ngOnChanges() {
    this.get();
  }
}
