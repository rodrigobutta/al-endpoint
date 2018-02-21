import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) { }

    login(username: string, password: string) {
        return this.http.post<any>('http://al-server.localhost.com/api/authenticate', { username: username, password: password })
            .map(data => {

                console.log(data);
                // console.log(data.token);
                // console.log(data.user);

                // login successful if there's a jwt token in the response
                if (data.user && data.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(data.user));
                    localStorage.setItem('currentToken', JSON.stringify(data.token));
                }

                return data.user;
            });
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('currentToken');
    }
}