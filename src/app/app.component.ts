// app.component.ts

import { Component, Injectable } from '@angular/core';

import { NgForm }   from '@angular/forms';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Item } from './Item';
import { ItemService } from './item.service';

@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

    title = 'Laravel Angular 4 App';

    items: Item[];

    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private _http: Http, private itemservice: ItemService){

    }

    ngOnInit(): void {
        this.getItems();
    }

    getItems(): void {
           this.itemservice.getItems()
               .subscribe(
                   items => {
                       this.items = items;
                   }, //Bind to view
                               err => {
                           console.log(err);
                       })
       }



    onSubmit(form: NgForm): Promise <Item>{

        return this._http.post('http://ng4laravel55.localhost.com/api/items', JSON.stringify(form.value), {headers: this.headers})
        .toPromise()
        .then(res => res.json().data)
        .catch(this.handleError);

    }


    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

}