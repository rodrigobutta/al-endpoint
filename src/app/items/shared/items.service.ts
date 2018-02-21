import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// import { HttpClient } from '../../shared/http-client.service';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ItemsService {

  private url: string = "http://al-server.localhost.com/api/items";

  constructor(private http: HttpClient) { }

  getItems(){
    return this.http.get(this.url)
      .map(res => res); //.map(res => res.json());
  }

  getItem(id){
    return this.http.get(this.getItemUrl(id))
      .map(res => res); //.map(res => res.json());
  }

  addItem(item){
    return this.http.post(this.url, JSON.stringify(item))
      .map(res => res);
  }

  updateItem(item){
    return this.http.put(this.getItemUrl(item.id), JSON.stringify(item))
      .map(res => res);
  }

  deleteItem(id){
    return this.http.delete(this.getItemUrl(id))
      .map(res => res);
  }


  private getItemUrl(id){
    return this.url + "/" + id;
  }



}
