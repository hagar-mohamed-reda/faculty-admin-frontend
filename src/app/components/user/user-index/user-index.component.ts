import { Component, OnInit } from '@angular/core';
import { Helper } from 'src/app/shared/helper';
import { Message } from 'src/app/shared/message';

@Component({
  selector: 'app-user-index',
  templateUrl: './user-index.component.html',
  styleUrls: ['./user-index.component.scss']
})
export class UserIndexComponent implements OnInit {

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
   * fields of user table
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
      {name: 'user page', url: '#'}
    ];
  }

  /**
   * show add user modal
   *
   */
  create() {
    this.$('#userAddModal').modal('show');
  }

  /**
   * show add user modal
   *
   */
  edit(item) {
    this.resource = item;
    this.$('#userEditModal').modal('show');
  }

  /**
   * show import users from excel file
   *
   */
  import() {
    this.$('#importExcelModal').modal('show');
  }

  /**
   * show export users from excel file
   *
   */
  export() {
    this.$('#exportExcelModal').modal('show');
  }

  /**
   * show export users from excel file
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
