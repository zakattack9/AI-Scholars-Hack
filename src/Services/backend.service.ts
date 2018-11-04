import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  url: string = '/api/';
  constructor(private http: HttpClient) {}

  getClasses() {
    const getUrl = this.url + 'classes';
    return this.http.get(getUrl).toPromise();
  }

  getStats() {
    const getUrl = this.url + 'stats';
    return this.http.get(getUrl).toPromise();
  }
}
