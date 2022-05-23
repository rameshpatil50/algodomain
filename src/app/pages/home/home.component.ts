import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _rest: RestService) { }

  ngOnInit(): void {
    this._rest.getAllProducts();
    this._rest.getCatagory();
    this._rest.getWishList();
    this._rest.getUser();
  }

}
