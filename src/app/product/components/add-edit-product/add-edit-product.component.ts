import { Component, Inject, Input, OnInit, inject } from '@angular/core';
import { UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product-management.service';
import { productList } from '../services/productType';
import { map, of } from 'rxjs';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-edit-product',
  templateUrl: './add-edit-product.component.html',
  styleUrls: ['./add-edit-product.component.css']
})
export class AddEditProductComponent implements OnInit {

  productForm!: UntypedFormGroup;
  productService = inject(ProductService)
  editStatus?: boolean;


  constructor(
    private formBuilder:UntypedFormBuilder, 
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public product: productList
    ){}

  ngOnInit() {
     this.buildForm()
     this.patchProductValue()
  }

  buildForm(){
    this.productForm = this.formBuilder.group({
      id: new UntypedFormControl(''),
      name: new UntypedFormControl('', [Validators.required]),
      category: new UntypedFormControl('', [Validators.required]),
      description: new UntypedFormControl('', [Validators.required]),
      price: new UntypedFormControl('', [Validators.required])
    });
  }

  patchProductValue(){
    if(this.product === null || undefined) return;
    this.editStatus = true;
    this.productForm.patchValue({
      id: this.product.id,
      name: this.product.name,
      category: this.product.category,
      description: this.product.description,
      price: this.product.price
    })
  }

  add(){
     if(this.productForm.invalid) return;
     const productFormValue: productList[] = this.productForm.value;
     return of(this.productService.addNewProduct(productFormValue)).pipe(map((added) => { 
      if(added) 
      this.snackBar.open('product added successfully', 'Down...!!!', { duration: 3000 })
      this.dialog.closeAll(); 
      this.productService.setProductList();
     })).subscribe()
  }
  edit(){
    const productValue: productList = this.productForm.value;
    return this.productService.editProductList(productValue).pipe(
      map((editProduct) => {
        if(editProduct){
          this.snackBar.open('product edited successfully', 'Down...!!!', { duration: 3000 })
          this.dialog.closeAll(); 
          this.productService.setProductList();
        }
      })).subscribe()
  }
}
