import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
 url = environment.server_url;
 wishlist: any = [];
  constructor(private _http:HttpClient) { }

  userLogin(data:any){
    return this._http.post(this.url+'UserLogin',data);
  }

  userSignUp(data:any){
    return this._http.post(this.url+'UserSignUp',data);
  }

  getAllProducts(){
    return this._http.get(this.url+'Product');
  }
  getCatagory(){
    return this._http.get(this.url+'Categoery');
  }

  getWishList(){
    this._http.get(this.url+'Wishlist').subscribe(
      res => {
        this.wishlist = res;
      },
      err => {
        console.log(err);
      }
    );
  }

}
