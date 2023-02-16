import { Component } from '@angular/core';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent {

  public static getInnerHTML(){
    return `
    <div class="table_row">
    <div class="table_cell_1">
        <div>Null</div>
    </div>    
    <div class="table_cell_2">
        <div class="table_cell_2_text">$0.00</div>
    </div>  
    <div class="table_cell_3">
        <div class="table_cell_3_button">
            <div class="table_cell_3_text">Buy Now</div>
        </div>
    </div>
</div>
    `
  }
}
