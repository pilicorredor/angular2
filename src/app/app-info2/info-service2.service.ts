import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Info } from './info';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoService2Service {
  private url:string = "http://192.168.1.15:30005/api/v1/Backend_info";

  constructor( private http:HttpClient ) { }

  get():Observable<Info>{
    return this.http.get<Info>(`${this.url}`);
  }
}
