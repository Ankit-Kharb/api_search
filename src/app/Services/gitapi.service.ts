import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable, throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GitapiService {

  sort_on_repo="forks";
  sort_on_committees="contributions";
  constructor(private http :HttpClient) {}

  public serachRepo(name : String ,per_page_item : Number) : Observable<any>
  {
      const url= `https://api.github.com/search/repositories?q=${name}&per_page=${per_page_item}&sort=${this.sort_on_repo}`;
      return this.http.get(url);
  }

  public top_committees(id : String ,per_page_item2 : Number) : Observable<any>
  {
    console.log(per_page_item2);
    const url = `https://api.github.com/repositories/${id}&sort=contributions/contributors`;
    return this.http.get(url);
  }
}
