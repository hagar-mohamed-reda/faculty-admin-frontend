import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Auth } from '../auth';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor(private http: HttpClient) {

  }


  /**
   * get services from api
   *
   */
  public get(url) {
    return this.http.get(url + '?api_token=' + Auth.getApiToken());
  }

  /**
   * store new service
   */
  public store(url, data: any) {
    return this.http.post(url + '/store' + '?api_token=' + Auth.getApiToken(), data);
  }

  /**
   * update service
   */
  public update(url, data: any) {
    return this.http.post(url + '/update/' + data.id + '?api_token=' + Auth.getApiToken(), data);
  }

  /**
   * remove service
   */
  public destroy(url, id) {
    return this.http.post(url + '/delete/' + id + '?api_token=' + Auth.getApiToken(), null);
  }
}
