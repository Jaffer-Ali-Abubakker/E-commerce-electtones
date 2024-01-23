import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditProductComponent } from '../add-edit-product/add-edit-product.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(public dialog: MatDialog){}

  addProduct(enterAnimationDuration: string, exitAnimationDuration: string){
    this.dialog.open(AddEditProductComponent, {
      width: '440px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
  }
   
}
