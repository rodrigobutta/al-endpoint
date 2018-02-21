import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// import { HttpClient } from '../../shared/http-client.service';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class UsersService {

  private url: string = "http://al-server.localhost.com/api/users"; //"http://jsonplaceholder.typicode.com/users";

  constructor(private http: HttpClient) { }

  getUsers(){

    // return this.http.get(this.url).subscribe(data => {
    //       console.log(data);
    //     });

    return this.http.get(this.url)
      .map(res => res);

    // return this.http.get(this.url)
    //   .map(res => res.json());

  }

  getUser(id){
    return this.http.get(this.getUserUrl(id))
      .map(res => res);
  }

  addUser(user){
    return this.http.post(this.url, JSON.stringify(user))
      .map(res => res);
  }

  updateUser(user){
    return this.http.put(this.getUserUrl(user.id), JSON.stringify(user))
      .map(res => res);
  }

  deleteUser(id){
    return this.http.delete(this.getUserUrl(id))
      .map(res => res);
  }


  private getUserUrl(id){
    return this.url + "/" + id;
  }



}
