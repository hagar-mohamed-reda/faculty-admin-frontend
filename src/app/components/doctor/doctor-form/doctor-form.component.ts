import { Component, Input, OnInit } from '@angular/core';
import { Helper } from 'src/app/shared/helper';
import { Message } from 'src/app/shared/message';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-doctor-form',
  templateUrl: './doctor-form.component.html',
  styleUrls: ['./doctor-form.component.scss']
})
export class DoctorFormComponent implements OnInit {

  @Input() title: any;
  @Input() editable: boolean = false;
  @Input() resource: any = {};
  @Input() action: any;

  levels: any = [];
  divisions: any = [];
  specials: any = [];
  degrees: any = [];
  types: any = [];
  isSubmitted = false;
  $: any = $;

  /**
   * required fields of doctor
   */
  required = [
    "name",	"username",	"password",	"special_id",	"division_id",	"phone",	"email", "degree_id",
  ];

  constructor(private globalService: GlobalService) {
    //
    if (!this.editable)
      this.reset();
  }

  /**
   * reset doctor add form
   *
   */
  reset() {
    this.resource = {
      "active": 1,
      url: "/assets/img/upload.jpg"
    };
  }

  /**
   * send data to the server
   * check if edit mode call update
   * else call store
   *
   */
  send() {
    if (this.editable) {
      this.update();
    } else {
      this.store();
    }
  }

  /**
   * store new doctor
   *
   */
  store() {
    if (!Helper.validator(this.resource, this.required))
      return Message.error("fill all required data");

    this.isSubmitted = true;
    this.globalService.store("doctors/store", Helper.toFormData(this.resource)).subscribe((res: any)=>{
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
   * update input doctor
   *
   */
  update() {
    if (!Helper.validator(this.resource, this.required))
      return Message.error("fill all required data");

    this.isSubmitted = true;
    this.globalService.update("doctors/update/"+this.resource.id, Helper.toFormData(this.resource)).subscribe((res: any)=>{
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
  loadFile(event) {
      Helper.loadImage(event, 'photo', this.resource);
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
    this.globalService.get("divisions").subscribe((r) => {
      this.divisions = r;
    });
    this.globalService.get("degrees").subscribe((r) => {
      this.degrees = r;
    });
    this.globalService.get("specializations").subscribe((r) => {
      this.specials = r;
    });
    this.types = ['normal', 'graduation'];
  }
  ngOnInit() {
    this.loadSettings();
  }

}
