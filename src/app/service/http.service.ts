import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class HttpService {
  _url:string="https://jsonplaceholder.typicode.com/"
  constructor(private http:HttpClient) { }
  getData<T>(url:any){
   return this.http.get<T>(this._url + url)
  }
  post<T>(url:any,object:any){
    return this.http.post<T>(this._url + url,object)
  }
}
