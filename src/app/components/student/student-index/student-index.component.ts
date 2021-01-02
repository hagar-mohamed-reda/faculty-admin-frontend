import { Component, OnInit } from '@angular/core';
import { Helper } from 'src/app/shared/helper';
import { Message } from 'src/app/shared/message';

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
   * fields of student table
   *
   */
  public fields: any = [
    'id', 'name', 'username', 'level_id', 'department_id', 'code', 'phone'
  ];

  constructor() { }

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

  ngOnInit() {
    this.initBreadcrumbData();
  }

}
