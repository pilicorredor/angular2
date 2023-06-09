import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Info } from './info';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InfoServiceService {
  private url:string = "http://10.4.74.73:30001/api/v1/Backend_info";

  constructor( private http:HttpClient ) { }

  getAll():Observable<Info>{
    return this.http.get<Info>(this.url);
  }
}
