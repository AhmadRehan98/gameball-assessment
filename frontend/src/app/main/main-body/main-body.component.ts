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

  public populateTable(type: string){
    if (type == 'fruits'){
      console.log('clicked on fruits')
    }
    else if (type == 'vegetables'){
      console.log('clicked on vegetables')
    }
    else if (type == 'electronics'){
      console.log('clicked on electronics')
    }

    this.http.get<dbArray>(`/api/products/${type}`).subscribe((res) =>{
      const tableElement = document.querySelector('.table');
      // empty the table
      tableElement!.innerHTML = ''
      const dbarray = res[type];
      // for each one table data entry
      for (let i = 0; i < dbarray.length; i++) {
        const element: dbRow = (dbarray[i] as any);
        var   name = element.name, price = element.price;
        // block to capitalize names
        const name_array = name.split(" ");
        for (let i = 0; i < name_array.length; i++) {
          name_array[i] = name_array[i][0].toUpperCase() + name_array[i].substr(1);
        }
        name = name_array.join(" ");

        // append one row to the table
        tableElement!.innerHTML += TableRowComponent.getInnerHTML(name, price);

        // JS to console.log item bought. can't get exact item name.
        document.getElementById('buy_now')!.addEventListener("click", function(event) {
          (function(event: any) {
            console.log(`Item Bought!`);
          }).call(document.getElementById('buy_now'), event);
          })
      }
    })
  }
}
