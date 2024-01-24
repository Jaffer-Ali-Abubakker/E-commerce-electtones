import { Component, NgIterable, OnInit, Signal, WritableSignal, inject, signal } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, of, switchMap } from 'rxjs';
import { ProductService } from '../services/product-management.service';
import { productList } from '../services/productType';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class AddToCardComponent implements OnInit {

   productService = inject(ProductService)
   products!:productList[];

   constructor(private route: ActivatedRoute, private snackBar: MatSnackBar, private router:Router) { }

   ngOnInit() {
     this.getProductById();
   }

   getProductById(){
    this.route.paramMap.pipe(switchMap(params => {
      return this.productService.getProductDetailsById(params).pipe(map((product:productList[]) => {
        this.products = product
      }))
    })).subscribe()
   }


  addToCart(product: productList){
     return of(this.productService.productAddToCard(product)).pipe(map((productAddtoCard)=> {
      if(productAddtoCard) {
        this.snackBar.open('product Added to card', 'Down...!!!', { duration: 3000 })
        this.router.navigate(['/cart', product.id]);
      }
     })).subscribe()
  }

}
