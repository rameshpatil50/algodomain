import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RestService {
 url = environment.server_url;
 wishlist: any = [];
 products : any = [];
 catagory : any = [];
 user : any = [];
  constructor(private _http:HttpClient) { }

  getUser(){
   this.user = localStorage.getItem('user');
    this.user = JSON.parse(this.user);
    console.log(this.user.User_Id);
  }

  userLogin(data:any){
    return this._http.post(this.url+'UserLogin',data);
  }

  userSignUp(data:any){
    return this._http.post(this.url+'UserSignUp',data);
  }

  getAllProducts(){
    return this._http.get(this.url+'Product').subscribe(
      res => {
        this.products = res;
        console.log(this.products);
      },  
      err => {
        console.log(err);
      });;
  }
  getCatagory(){
    return this._http.get(this.url+'Categoery').subscribe(
      res => {
        this.catagory = res;
        console.log(this.catagory);
      },
      err => {
        console.log(err);
      });;
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
