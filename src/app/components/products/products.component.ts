import { map } from 'rxjs/';
import { CartService } from './../../services/cart.service';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public productList:any ;

  constructor(private api : ApiService , private cartService:CartService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe((res)=>{
      this.productList = res ;
      this.productList.forEach((a:any) => {
        Object.assign(a,{quantity:1,total:a.price})
      });
    });

  }

  addToCart(prod:any){
    this.cartService.addToCart(prod)
  }

  showAllProducts(){
    this.productList;
    $(document).ready(function(){
      $(".all-products").removeClass('d-none').siblings().addClass('d-none');
    })
  }

  public electronics :any = [] ;
  showElectronics(){
    this.productList.forEach((ele:any) => {
      if(ele.category === "electronics"){
        this.electronics.push(ele);
      }
    });
    $(document).ready(function(){
      $(".electronics").removeClass('d-none').siblings().addClass('d-none');

    });
  }

  public fashions : any = [];
  showFashion(){
    this.productList.forEach((ele:any)=>{
      if(ele.category === "women's clothing"){
        this.fashions.push(ele);
      }
    });
    $(document).ready(function(){
      $(".fashions").removeClass('d-none').siblings().addClass('d-none');
    })
  }

  public jewelery : any = [];
  showJewelery(){
    this.productList.forEach((ele:any) => {
      if(ele.category === "jewelery"){
        this.jewelery.push(ele);
      }
    });
    $(document).ready(function(){
      $(".jewelery").removeClass('d-none').siblings().addClass('d-none');
    })
  }

}
