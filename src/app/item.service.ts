import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';


import { Item } from './Item';


@Injectable()
export class ItemService {

    private headers = new Headers({'Content-Type': 'application/json'});


    constructor(private _http: Http) {

    }

    getItems(): Observable<Item[]> {
        return this._http.get('http://ng4laravel55.localhost.com/api/items')
        .map((response:Response) => response.json())
        .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }



}