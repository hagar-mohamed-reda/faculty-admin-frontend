import { Component, OnInit } from '@angular/core';
import { Helper } from 'src/app/shared/helper';
import { Message } from 'src/app/shared/message';
import { GlobalService } from 'src/app/shared/services/global.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-student-index',
  templateUrl: './student-index.component.html',
  styleUrls: ['./student-index.component.scss']
})
export class StudentIndexComponent implements OnInit {

  /**
   * init jquery
   *
   */
  public $: any = $;

  /**
   * Array of items of breadcrumb
   *
   */
  public breadcrumbData = [];

  /**
   * filter inputs
   *
   */
  public filter: any = {};

  /**
   * select item to edit it
   *
   */
  public resource: any = {};

  /**
   * select item to edit it
   *
   */
  public levels: any = [];

  /**
   * types of student
   *
   */
  public types: any = [];

  /**
   * select item to edit it
   *
   */
  public departments: any = [];

  /**
   * fields of student table
   *
   */
  public fields: any = [
    'name',
    'username',
    'password',
    'level_id',
    'department_id',
    'division_id',
    'faculty_id',
    'code',
    'phone',
    'email',
    'national_id',
    'active',
    'type',
    'created_at',
    'updated_at'
  ];

  /**
   * url of excel template file
   *
   */
  public importTemplateUrl = environment.publicUrl + "/uploads/excel/add_student_template.xlsx";

  constructor(private globalService: GlobalService) { }

  /**
   * init items of breadcrumb
   *
   */
  initBreadcrumbData() {
    this.breadcrumbData = [
      {name: 'student page', url: '#'}
    ];
  }

  /**
   * show add student modal
   *
   */
  create() {
    this.$('#studentAddModal').modal('show');
  }

  /**
   * show add student modal
   *
   */
  edit(item) {
    this.resource = item;
    this.$('#studentEditModal').modal('show');
  }

  /**
   * show import students from excel file
   *
   */
  import() {
    this.$('#importExcelModal').modal('show');
  }

  /**
   * show export students from excel file
   *
   */
  export() {
    this.$('#exportExcelModal').modal('show');
  }

  /**
   * show export students from excel file
   *
   */
  archive() {
    let _this = this;
    Message.confirm(Helper.trans("are you sure to arhive this item"), ()=>{
      // archive code
    });
  }

  /**
   * load all filter data
   * load levels
   * load types
   * load departments
   * load faculties
   */
  loadSettings() {
    this.globalService.get("levels").subscribe((r) => {
      this.levels = r;
    });
    this.globalService.get("departments").subscribe((r) => {
      this.departments = r;
    });
    this.types = ['normal', 'graduation'];
  }

  ngOnInit() {
    this.initBreadcrumbData();
    this.loadSettings();
  }

}
