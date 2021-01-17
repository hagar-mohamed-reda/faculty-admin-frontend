import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SettingService } from 'src/app/settings/services/setting.service';
import { SettingTemplate } from 'src/app/settings/setting-template';
import { Auth } from 'src/app/shared/auth';
import { GlobalService } from 'src/app/shared/services/global.service';
import { environment } from 'src/environments/environment';

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
   * action
   *
   */
  action = null;

  /**
   * group object of view
   *
   */
  $: any = $;

  /**
   * import data will be sent
   *
   */
  importData: any = {};
  templateUrl: any = environment.apiUrl + "/student-registers/import-file?api_token="+Auth.getApiToken();



  constructor(
    public groupService: SettingService, private globalService: GlobalService, private router: ActivatedRoute) {

    this.resource.name = "course name";

    // init group
    this.group = new SettingTemplate(this.groupService);
    this.group.requiredFields = ['name'];
    this.group.baseUrl = "course-groups";


    //this.group.get();
    if (this.router.snapshot.paramMap.has("id")) {
      this.loadCourse(this.router.snapshot.paramMap.get("id"));
    }


    this.action = () => {
      this.loadCourse(this.resource.id);
    };
  }

  getItem(item) {
    item.course_id = this.resource.id;
    return item;
  }

  selectCategory(id, checked) {
    this.group.data.forEach(element => {
      if (element.id != id && checked)
        element.selected = false;
    });
    if (checked) {
      this.importData.group_id = id;

    }
  }


  loadCourse(id) {
    this.globalService.get('courses/'+id).subscribe((res: any) => {
      this.resource = res;
      this.group.get({course_id: this.resource.id});
      this.initBreadcrumbData();
    });
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
  registerStudentFromExcel(step) {
    if (step == 1)
      this.$('#choiceCategoryModal').modal('show');
    if (step == 2) {
      this.$('#choiceCategoryModal').modal('hide');
      this.$('#importExcelModal').modal('show');
    }
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
