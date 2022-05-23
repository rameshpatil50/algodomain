import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/service/rest.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  products : any = [];
  catagory : any = [];
  
  constructor(private _rest:RestService) { }

  ngOnInit(): void {
    this.getProducts();
    this.getCatagory();

  }



  getProducts(){      
    this._rest.getAllProducts().subscribe(
      res => {
        this.products = res;
        console.log(this.products);
      },  
      err => {
        console.log(err);
      });
  }

  getCatagory(){
    this._rest.getCatagory().subscribe(
      res => {
        this.catagory = res;
        console.log(this.catagory);
      },  
      err => {
        console.log(err);
      });
  }
}