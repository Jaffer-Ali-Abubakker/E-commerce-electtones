import { Component, Input, inject } from '@angular/core';
import { ProductService } from '../services/product-management.service';
import { productList } from '../services/productType';
import { map } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AddEditProductComponent } from '../add-edit-product/add-edit-product.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-base',
  templateUrl: './product-base.component.html',
  styleUrls: ['./product-base.component.css']
})
export class ProductBaseComponent {

  productService = inject(ProductService)
  @Input() products?: productList[];

  constructor(public dialog: MatDialog, private snackBar: MatSnackBar, private router: Router){}


  ngOnInit() {
    this.productService.setProductList()
    this.getProducts()
    
  }

  getProducts() {
    return this.productService.getProductList().pipe(map((product: productList[]) => this.products = product)).subscribe()
  }

  editProduct(product: productList){
    const enterAnimationDuration = '2000ms'
    const exitAnimationDuration = '1000ms'
    this.dialog.open(AddEditProductComponent, {
      width: '440px',
      data: product,
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
  deleteProduct(product: productList){
    return this.productService.deleteProduct(product).pipe(
      map((deleted) => {
        if(deleted){
          this.snackBar.open('product deleted successfully', 'Down...!!!', { duration: 3000 })
          this.productService.setProductList();
        }
      })
    ).subscribe()
  }
  viewProduct(product: productList){
    this.router.navigate(['/view-product', product.id]);
  }
}
