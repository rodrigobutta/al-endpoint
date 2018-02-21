import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable()
export class HttpClient {

  constructor(private http: Http) {}

  createAuthorizationHeader(headers: Headers) {
    headers.append('Authorization', 'bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9hbC1zZXJ2ZXIubG9jYWxob3N0LmNvbVwvYXBpXC9hdXRoZW50aWNhdGUiLCJpYXQiOjE1MTkxNTEyMjksImV4cCI6MTUxOTE1NDgyOSwibmJmIjoxNTE5MTUxMjI5LCJqdGkiOiJZbkFPbFJCSHZIQUtyNVFZIiwic3ViIjoxLCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.XCthcIwJl1bK21fYCD9QYlvbmgmmDWHLhNPBvqK5VDk');
  }

  get(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.get(url, {
      headers: headers
    });
  }

  post(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.post(url, data, {
      headers: headers
    });
  }

  put(url, data) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    return this.http.put(url, data, {
      headers: headers
    });
  }

  delete(url) {
    let headers = new Headers();
    this.createAuthorizationHeader(headers);
    // return this.http.delete(url, data, {
    //   headers: headers
    // });

    return this.http.delete(url, {
      headers: headers
    });

  }

}