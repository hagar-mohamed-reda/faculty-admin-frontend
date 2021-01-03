import { Component, OnInit } from '@angular/core';
import { SettingService } from 'src/app/settings/services/setting.service';
import { SettingTemplate } from 'src/app/settings/setting-template';

@Component({
  selector: 'app-course-show',
  templateUrl: './course-show.component.html',
  styleUrls: ['./course-show.component.scss']
})
export class CourseShowComponent implements OnInit {


  resource: any = {};

  /**
   * breadcrumbs items
   *
   */
  breadcrumbData: any = [];

  /**
   * group object of view
   *
   */
  group = null;

  /**
   * group object of view
   *
   */
  $: any = $;


  constructor(
    public groupService: SettingService) {
    this.resource.name = "course name";

    // init group
    this.group = new SettingTemplate(this.groupService);
    this.group.requiredFields = ['name'];
    this.group.baseUrl = "groups";
    //this.group.get();
  }

  /**
   * init items of breadcrumb
   *
   */
  initBreadcrumbData() {
    this.breadcrumbData = [
      {name: "courses", url: "/courses"},
      {name: this.resource.name, url: '#', active: 1}
    ];
  }

  /**
   * show modal of register student from excel file
   *
   */
  registerStudentFromExcel() {
    this.$('#importExcelModal').modal('show');
  }

  /**
   * show modal of register doctor
   *
   */
  registerDoctorModal() {
    this.$('#registerCourseToDoctor').modal('show');
  }

  /**
   * show modal of register students
   *
   */
  registerStudentModal() {
    this.$('#registerCourseToStudent').modal('show');
  }

  ngOnInit() {
    this.initBreadcrumbData();
  }

}
