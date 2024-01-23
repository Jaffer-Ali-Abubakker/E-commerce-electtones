import { Component, OnInit, WritableSignal, inject, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../services/product-management.service';
import { productList } from '../services/productType';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  productService = inject(ProductService)
  products!:productList[];
  count: WritableSignal<number> = signal(1);
  productPrice: WritableSignal<any>  = signal(0)

  constructor(private route: ActivatedRoute){}


  ngOnInit() {
      this.getProductById();
  }


  getProductById(){
    this.route.paramMap.pipe(switchMap(params => {
      return this.productService.getProductDetailsById(params).pipe(map((product:productList[]) => {
        this.products = product
         this.productPrice.set(this.products[0].price);
      }))
    })).subscribe()
   }


  decrementCount(){
    this.count.update((c) => {
      if (c > 1) {
        this.productPrice.update((price) => price - this.products[0].price!)
        return c - 1;
      }
      return c;
    })
  }

  incrementCount(){
   this.count.update((c) => c + 1)
   this.productPrice.update((price) => price + this.products[0].price)
  }

}
