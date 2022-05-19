import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
 url = environment.server_url;
  constructor(private _http:HttpClient) { }

  userLogin(data:any){
    return this._http.post(this.url+'UserLogin',data);
  }
}
