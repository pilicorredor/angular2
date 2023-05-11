import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Info } from './info';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService2Service {
  private url:string = "http://10.4.75.91:30002/api/v1/Backend_info";

  constructor( private http:HttpClient ) { }

  get():Observable<Info>{
    return this.http.get<Info>(`${this.url}`);
  }
}
