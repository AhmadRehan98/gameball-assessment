import { HttpClient } from '@angular/common/http'
import { Component, ViewChild, ViewContainerRef, Injectable} from '@angular/core';
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
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
@Injectable({
  providedIn: 'root',
})
export class MainBodyComponent{
  // tableRowComponent: TableRowComponent;
  constructor(private http: HttpClient){
    // this.tableRowComponent = tableRowComponent;
  }

  
  public populateTable(){
    this.http.get<dbArray>('/api/products/fruits').subscribe((res) =>{
      const tableElement = document.querySelector('.table');
      // console.log(tableElement);
      tableElement!.innerHTML = ''
      const dbarray = res['fruits'];
      for (let i = 0; i < dbarray.length; i++) {
        // for each one table data entry{name, type, price}
        const element: dbRow = (dbarray[i] as any);
        const name = element.name, price = element.price;
        // console.log(name);
        // console.log(rowElement);
        tableElement!.innerHTML += TableRowComponent.getInnerHTML(name, price);
        this.applyStyle();
      }
    })
  }

  private applyStyle(){
    const text = document.querySelector('.table_cell_1_text');
    console.log(text);
    text?.classList.add('table_cell_1_text');
  }
}
