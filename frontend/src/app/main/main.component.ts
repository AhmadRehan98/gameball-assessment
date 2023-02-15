import { HttpClient } from '@angular/common/http'
import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { TableRowComponent } from './table-row/table-row.component';

interface dbArray {
  [key: string]: Number[];
}

interface dbRow {
  name: string;
  type: string;
  price: Number;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent {
  @ViewChild('row', { read: ViewContainerRef })
  row!: ViewContainerRef;
  constructor(private http: HttpClient){}



  public populateTable(){
    this.http.get<dbArray>('/api/products/fruits').subscribe((res) =>{
      this.row.clear()
      const dbarray = res['fruits'];
      for (let i = 0; i < dbarray.length; i++) {
        // for each one table data entry{name, type, price}
        const element: dbRow = (dbarray[i] as any);
        const name = element.name, price = element.price;
        console.log(name);
        this.row.createComponent(TableRowComponent);
      }
    })
  }
}
