import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map'

import { tokenNotExpired } from 'angular2-jwt';

import * as siteConfig from '../config';

import { User } from '../_models/index';

@Injectable()
export class AuthenticationService {

    constructor(
        private http: HttpClient,
        private router: Router
        ) {

    }


    login(username: string, password: string) {
        return this.http.post<any>(siteConfig.apiUrl+'authenticate', { username: username, password: password })
            .map(data => {

                console.log(data);

                // login successful if there's a jwt token in the response
                if (data.user && data.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(data.user));
                    // localStorage.setItem('currentToken', JSON.stringify(data.token));
                    localStorage.setItem('currentToken', data.token);
                }

                return data.user;
            });
    }

    logout() {
        console.log('logout');

        localStorage.removeItem('currentUser');
        localStorage.removeItem('currentToken');

        // this.router.navigate(['<routeLogin>']);
        this.router.navigate(['login']);
    }


    public getToken(): string {
      // return JSON.parse(localStorage.getItem('currentToken'));
      return localStorage.getItem('currentToken');
    }


    public getCurrentUser(): User {
      return JSON.parse(localStorage.getItem('currentUser')) as User;
    }


    public isAuthenticated(): boolean {

        if (localStorage.getItem("currentUser") !== null) {
            return true;
        }
        else{
            return false;
        }

     }


}