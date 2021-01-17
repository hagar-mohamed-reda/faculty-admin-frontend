import { Component, OnInit } from '@angular/core';
import { Auth } from 'src/app/shared/auth';
import { Helper } from 'src/app/shared/helper';
import { Message } from 'src/app/shared/message';
import { GlobalService } from 'src/app/shared/services/global.service';
import { environment } from 'src/environments/environment';

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
   * init document
   *
   */
  public document: any = document;

  /**
   * Array of items of breadcrumb
   *
   */
  public breadcrumbData = [];

  /**
   * filter inputs
   *
   */
  public response: any = {};

  /**
   * filter inputs
   *
   */
  public users: any = [];

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
   * types of user
   *
   */
  public types: any = [];

  /**
   * select item to edit it
   *
   */
  public roles: any = [];


  /**
   * url of import from excel api
   *
   */
  public importApi = "users/import";

  /**
   * url of excel template file
   *
   */
  public importTemplateUrl = environment.apiUrl + "/users/import-file?api_token="+Auth.getApiToken();

  /**
   * url of export api
   *
   */
  public exportApi = "users/export";

  /**
   * url of export api
   *
   */
  public action: any;

  /**
   * url of export api
   *
   */
  public reload = false;

  /**
   * url of export api
   *
   */
  public archiveLoad = false;


  constructor(private globalService: GlobalService) {
    this.action = () => { this.get(); };
  }

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
   * load all user data
   *
   */
  get(data=null) {
    let params = (data)? data: this.filter;
    this.reload = true;
    this.archiveLoad = false;
    this.globalService.get("users", params).subscribe((res) => {
      this.response = res;
      this.users = this.response.data;
      this.reload = false;
      //
      this.prePagniation();
    });
  }

  /**
   * get all deleted users
   *
   */
  getArchive() {
    this.reload = true;
    this.archiveLoad = true;
    this.globalService.get("users/archive").subscribe((res) => {
      this.users = res;
      this.reload = false;
    });
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
  archive(item) {
    let _this = this;
    Message.confirm(Helper.trans("are you sure to arhive this item"), ()=>{
      _this.globalService.destroy("users/delete", item.id).subscribe((r: any)=>{
        if (r.status == 1) {
          Message.success(r.message);
          this.get();
        }
        else
          Message.error(r.message);
      });
    });
  }

  /**
   * restore item from archive
   *
   */
  restore(item) {
    let _this = this;
    Message.confirm(Helper.trans("are to restore item from archive"), ()=>{
      _this.globalService.destroy("users/restore", item.id).subscribe((r: any)=>{
        if (r.status == 1) {
          Message.success(r.message);
          _this.getArchive();
        }
        else
          Message.error(r.message);
      });
    });
  }

  /**
   * load all filter data
   */
  loadSettings() {
    this.get();
    //
    this.globalService.get("roles").subscribe((r) => {
      this.roles = r;
    });
  }

  /**
   * pre panination
   */
  prePagniation() {
    Helper.prepagination(this.response);
    console.log(this.response);
  }

  setDataContainerStyle() {
    let height = (window.innerHeight - 250) + "px";
    this.document.nicescroll('.data-container', {height: height});
  }

  ngOnInit() {
    this.initBreadcrumbData();
    this.loadSettings();
    let _this = this;
    //
    setTimeout(()=>{
      _this.setDataContainerStyle();
    }, 500);
  }
}
