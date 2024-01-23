import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ngMaterialModule } from '../ng-material.module';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductContainerComponent } from './components/product-container/product-container.component';
import { ProductBaseComponent } from './components/product-base/product-base.component';
import { AddEditProductComponent } from './components/add-edit-product/add-edit-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddToCardComponent } from './components/view-product/view-product.component';
import { CartComponent } from './components/cart/cart.component';



const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
  {
    path: 'view-product/:id',
    component: AddToCardComponent,
  },
  {
    path: 'cart/:id',
    component: CartComponent
  }
];

@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    ProductContainerComponent,
    ProductBaseComponent,
    AddEditProductComponent,
    AddToCardComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
		FormsModule,
    ngMaterialModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModule { }
