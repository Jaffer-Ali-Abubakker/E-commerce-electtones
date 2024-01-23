import { Component, EventEmitter, Input, Output} from '@angular/core';
import { productList } from '../services/productType';

@Component({
  selector: 'app-product-container',
  templateUrl: './product-container.component.html',
  styleUrls: ['./product-container.component.css']
})
export class ProductContainerComponent  {

  @Output() editProductEmit: EventEmitter<productList> = new EventEmitter();
  @Output() deleteProductEmit: EventEmitter<productList> = new EventEmitter();
  @Output() viewProductEmit: EventEmitter<productList> = new EventEmitter();
  @Input() products?: productList[]

  editProduct(product:productList){
   this.editProductEmit.emit(product)
  }
  deleteProduct(product:productList){
    this.deleteProductEmit.emit(product)

  }
  viewProduct(product:productList){
    this.viewProductEmit.emit(product)
  }

}
