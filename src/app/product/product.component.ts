import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products:Product[] = []

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit():void {
    console.log("Activated route data in component", this.activatedRoute)
    this.activatedRoute.data.subscribe(
      (response:any)=>{
        console.log("response", response)
        this.products = response.products
      }
    )
  }

}
