import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from 'src/app/shared/auth';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  public baseUrl = "";
  $: any = $;

  constructor(private http: HttpClient) {
    this.get();
  }


  /**
   * get services from api
   *
   */
  public get(data={}) {
    return this.http.get(this.baseUrl + '?api_token=' + Auth.getApiToken()+"&"+this.$.param(data));
  }

  /**
   * store new service
   */
  public store(data: any) {
    return this.http.post(this.baseUrl + '/store' + '?api_token=' + Auth.getApiToken(), data);
  }

  /**
   * update service
   */
  public update(data: any) {
    return this.http.post(this.baseUrl + '/update/' + data.id + '?api_token=' + Auth.getApiToken(), data);
  }

  /**
   * remove service
   */
  public destroy(id) {
    return this.http.post(this.baseUrl + '/delete/' + id + '?api_token=' + Auth.getApiToken(), null);
  }
}
