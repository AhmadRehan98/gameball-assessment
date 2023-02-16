import { HttpClient } from '@angular/common/http'
import { Component, Injectable} from '@angular/core';
import { TableRowComponent } from './table-row/table-row.component';
import { PageNumberComponent } from './page-number/page-number.component';
import { last } from 'rxjs';

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
  dbArray: any;
  dbPagesArray: any;
  isAscending: boolean = true;

  constructor(private http: HttpClient){}

  private insertPageNumber(numOfPages: Number){
    // this.page_number.clear();
    const pageNumber = document.querySelector('.pagination_numbers');
    // empty any previous numbers
    pageNumber!.innerHTML = '';
    for(let i=1; i<=numOfPages; i++){
      pageNumber!.innerHTML += PageNumberComponent.getInnerHTML(i);
    }
  }

  public populateTable(type: string){
    // empty dbTables from previous queries
    this.dbArray = []
    this.dbPagesArray = []

    // communicate with backend to get products of <type> 
    this.http.get<dbArray>(`/api/products/${type}`).subscribe((res) =>{
      // query by class name
      const tableElement = document.querySelector('.table');

      // empty the table
      tableElement!.innerHTML = ''
      this.dbArray = res[type];

      // calculate number of pages required
      const itemsPerPage = 9;
      const numberOfPages = Math.ceil(this.dbArray.length / itemsPerPage);
      this.insertPageNumber(numberOfPages);

      // fill <itemsPerPage> items in each dbPagesArray index
      for (let i=0; i <this.dbArray.length; i+=itemsPerPage){
        this.dbPagesArray.push(this.dbArray.slice(i, i + itemsPerPage));
      }
      // console.log(this.dbPagesArray);

      // show items from dbPagesArray[0]. the default is as if we clicked page number 1.
      this.showOnePage(1);
    })
  }

  private showOnePage(num: number){
    // for each one table data entry
    const pageNumber = num - 1;

    // empty table from previous content
    const tableElement = document.querySelector('.table');
    tableElement!.innerHTML = ''

    // check for sort order


    for (let i=0; i<this.dbPagesArray[pageNumber].length; i++) {
      const element: dbRow = (this.dbPagesArray[pageNumber][i] as any);
      var name = element.name, price = element.price;

      /* block to capitalize names */
      const name_array = name.split(" ");
      for (let i = 0; i < name_array.length; i++) {
        name_array[i] = name_array[i][0].toUpperCase() + name_array[i].substr(1);
      }
      name = name_array.join(" ");
      /* end of block */

      // append one row to the table
      tableElement!.innerHTML += TableRowComponent.getInnerHTML(name, price);
      
      // JS to console.log item bought. can't get exact item name.
      document.addEventListener('click', event => {
          if (event.target instanceof Element){
            if(event.target.className=="table_cell_3_button"){
              console.log("Item Bought!");
            }
          }
          lastMove = Date.now();
      });

      // // event listener for sort button
      // document.getElementById('sort_button')!.addEventListener("click", function(event) {
      //   (function(event: any) {
      //     console.log(`Sort Button`);
      //   }).call(document.getElementById('sort_button'), event);
      // })

      // event listener for page number buttons
      var lastMove = 0;
      document.addEventListener('click', event => {
        // only do clicks every 100ms
        if(Date.now() - lastMove > 100) {
          if (event.target instanceof Element){
            if(event.target.className=="pagination_number_container"){
              this.showOnePage(parseInt(event.target.innerHTML));
            }
          }
          lastMove = Date.now();
        }
      });
    }
  }
}
