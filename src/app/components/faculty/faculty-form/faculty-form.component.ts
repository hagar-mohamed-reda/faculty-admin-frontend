import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { HashTable } from 'angular-hashtable';
import { Helper } from 'src/app/shared/helper';
import { Message } from 'src/app/shared/message';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-faculty-form',
  templateUrl: './faculty-form.component.html',
  styleUrls: ['./faculty-form.component.scss']
})
export class FacultyFormComponent implements OnInit {

  @Input() title: any;
  @Input() editable: boolean = false;
  @Input() resource: any = {};
  @Input() action: any;

  roles: any = [];
  types: any = [];
  isSubmitted = false;
  helper: any = Helper;
  $: any = $;

  /**
   * required fields of faculty
   */
  required = [
    'name'
  ];

  constructor(private globalService: GlobalService) {
    //
    if (!this.editable)
      this.reset();
      //
  }

  /**
   * reset faculty add form
   *
   */
  reset() {
    this.resource = {
      "active": 1,
      url: "/assets/img/logo.png"
    };
  }


  /**
   * send data to the server
   * check if edit mode call update
   * else call store
   *
   */
  send() {
    //
    if (this.editable) {
      this.update();
    } else {
      this.store();
    }
  }

  /**
   * store new faculty
   *
   */
  store() {
    if (!Helper.validator(this.resource, this.required))
      return Message.error("fill all required data");

    this.isSubmitted = true;
    this.globalService.store("facultys/store", Helper.toFormData(this.resource)).subscribe((res: any)=>{
      if (res.status == 1) {
        Message.success(res.message);
        this.reset();
        if (this.action)
          this.action();
      }
      else
        Message.error(res.message);

      this.isSubmitted = false;
    });
  }

  /**
   * update input faculty
   *
   */
  update() {
    if (!Helper.validator(this.resource, this.required))
      return Message.error("fill all required data");

    this.isSubmitted = true;
    this.globalService.update("facultys/update/"+this.resource.id, Helper.toFormData(this.resource)).subscribe((res: any)=>{
      if (res.status == 1) {
        Message.success(res.message);
        if (this.action)
          this.action();
      }
      else
        Message.error(res.message);

      this.isSubmitted = false;
    });
  }

  /**
   * load file object in resource
   */
  loadFile(event, key) {
    Helper.loadImage(event, key, this.resource);
  }

  /**
   * load all filter data
   * load levels
   * load types
   * load departments
   * load faculties
   */
  loadSettings() {
    this.globalService.get("roles").subscribe((r: any) => {
      this.roles = r.data;
    });
    this.types = ['admin', 'super-admin'];
  }

  ngOnInit() {
    this.loadSettings();
  }

}
