import { Component, Injectable, ViewChild, ViewContainerRef, OnInit} from '@angular/core';
import { NameCellComponent } from './name-cell/name-cell.component';

interface dbRowdata {
  name: string;
  type: string;
  price: Number;
}

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
@Injectable({
  providedIn: 'root',
})
export class MainBodyComponent{
  @ViewChild('container1', {read: ViewContainerRef})
  container1!: ViewContainerRef;

  constructor(public viewContainerRef: ViewContainerRef){
    // this.addRowText('b');
  }

  private onInit(){
    this.addRowText('b');
  }

  public populateTable(dbarray: any){
    for (let i = 0; i < dbarray.length; i++) {
      // for each one table data entry{name, type, price}

      // clear ALL container1 (name of product)... how?
      // this.container1.clear();
      const element: dbRowdata = dbarray[i];
      const name = element.name, price = element.price;
      // this.container1.clear();
      this.addRowText(name);
      this.addRowPrice(price);
      this.addRowBuyButton();
    }
  }

  public addRowText(name: String){
    // const buttonElement = document.querySelector('.column_1');
    // console.log(buttonElement)
    this.container1.createComponent(NameCellComponent);
  }

  private addRowPrice(price: Number){

  }
  private addRowBuyButton(){

  }

}
