// https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies

import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class GeneralServices {
  constructor(private http: HttpClient) {
  }

  getMovieList() {
    return this.http.get('https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies')
      .pipe(map((res) => res))
  }

  getDocumentList() {
    return this.http.get('https://dummyjson.com/posts?skip=5&limit=5')
      .pipe(map((res) => res))
  }

  getPeopleList() {
    return this.http.get('https://dummyjson.com/users?skip=5&limit=5')
      .pipe(map((res) => res))
  }

  getActivityList() {
    return this.http.get('https://dummyjson.com/todos?skip=5&limit=9')
      .pipe(map((res) => res))
  }

  getProductsList() {
    return this.http.get('https://dummyjson.com/products?skip=5&limit=9')
      .pipe(map((res) => res))
  }



}
