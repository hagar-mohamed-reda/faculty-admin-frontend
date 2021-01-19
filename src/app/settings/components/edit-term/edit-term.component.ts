import { Component, OnInit } from '@angular/core';
import { Helper } from 'src/app/shared/helper';
import { Message } from 'src/app/shared/message';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-edit-term',
  templateUrl: './edit-term.component.html',
  styleUrls: ['./edit-term.component.scss']
})
export class EditTermComponent implements OnInit {


  step = 1;
  helper: any = Helper;
  setting: any = Helper.SETTING;
  term: any = {};
  $: any = $;

  constructor(private globalService: GlobalService) {
  }

  ngOnInit() {
    setTimeout(() =>{
      this.$('.term-modal-content').slideDown(600);
    }, 1000);
  }

  goto(step) {
    this.step = step;
  }

  updateTerm() {
    Helper.loader(true);
    let data = {
      id: 1,
      value: this.term
    }
    this.globalService.store("global-setting/update", data).subscribe((res: any) =>{
      if (res.status == 1) {
        Message.success(res.message);
      }else {
        Message.error(res.message);
      }
      Helper.loader(false);
      this.$('.term-modal').slideUp(500);

    });
  }

}
