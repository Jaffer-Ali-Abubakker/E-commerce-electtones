import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from, map, of } from 'rxjs';
import { productList } from './productType';
import { productslist } from './sample-product';
import * as UUID from 'uuid';
import { ParamMap } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ProductService {

  productSubject: BehaviorSubject<productList[]> = new BehaviorSubject<productList[]>([]);
  productInCard?: productList[] = [];

  constructor(private http:HttpClient) {
    localStorage.setItem('products', JSON.stringify(productslist));
  }

  setProductList() {
    const product = JSON.parse(localStorage.getItem('products') || '{}')
    this.productSubject.next(product)
  }
  getProductList() {
    return this.productSubject.asObservable();
  }

  addNewProduct(product: productList[]) {
    if (!product) return;
    const setProduct = {
      id: UUID.v4(),
      ...product
    };
    productslist.push(setProduct)
    localStorage.setItem('products', JSON.stringify(productslist));
    return true;
  }

  editProductList(product: productList){
    return of(product).pipe(map((product: productList) => {
      const existingProduct = productslist.findIndex(p => p.id === product.id);
      if (existingProduct !== -1) {
        productslist[existingProduct] = { ...productslist[existingProduct], ...product };
        localStorage.setItem('products', JSON.stringify(productslist));
        return true;
      } else {
        return false;
      }
    }));
  }

  deleteProduct(product: productList){
    return of(product).pipe(map((product: productList) => {
      const existingProduct = productslist.findIndex(p => p.id === product.id);
      if (existingProduct !== -1) {
        productslist.splice(existingProduct, 1);
        localStorage.setItem('products', JSON.stringify(productslist));
        return true;
      } else {
        return null;
      }
    }));
  }

  getProductDetailsById(params: ParamMap){
   const id = params.get('id')
   const product:productList[] = JSON.parse(localStorage.getItem('products') || '{}')
   return of(product).pipe(map((product:productList[]) => {
    const foundProduct = product.find((p) => p?.id === id);
    return foundProduct ? [foundProduct] : [];
   }))
  }

  productAddToCard(product: productList){
    this.productInCard?.push(product)
    return true;
  }

}
