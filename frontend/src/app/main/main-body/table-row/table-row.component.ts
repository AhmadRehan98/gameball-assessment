import { Component } from '@angular/core';

@Component({
  selector: 'app-table-row',
  templateUrl: './table-row.component.html',
  styleUrls: ['./table-row.component.css']
})
export class TableRowComponent {

  public static getInnerHTML(name: string, price: Number){
    return `
    <div class="table_row" style="display: flex; 
    flex-direction: row; 
    align-items: flex-start; 
    padding: 0px; 
    width: 582px;
    flex: none; 
    order: 0; 
    flex-grow: 1;">

    <div class="table_cell_1" style="box-sizing: border-box;
    align-items: center;
    display: flex;
    flex-direction: row;
    padding: 16px 12px 16px 12px;
    gap: 12px;
    width: 582px;
    height: 72px;
    border-bottom: 1px solid #EAECF0;
    flex: none;
    order: 0;
    align-self: stretch;
    flex-grow: 1;">
        
      <div class="table_cell_1_text" style="width: 39px;
        height: 20px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        color: #101828;
        flex: none;
        order: 1;
        flex-grow: 1;">${name}
      </div>

    </div>    

    <div class="table_cell_2" style="box-sizing: border-box;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 16px 24px;
      width: 209px;
      height: 72px;
      border-bottom: 1px solid #EAECF0;
      flex: none;
      order: 0;
      align-self: stretch;
      flex-grow: 0;"> 

      <div class="table_cell_2_text" style="font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #039855;
        flex: none;
        order: 0;
        flex-grow: 0;">$${price.toFixed(2)}
      </div>

    </div>  

    <div class="table_cell_3" style="box-sizing: border-box;
      display: flex;
      flex-direction: row;
      align-items: center;
      padding: 16px;
      gap: 4px;
      width: 120px;
      height: 72px;
      border-bottom: 1px solid #EAECF0;
      flex: none;
      order: 0;
      align-self: stretch;
      flex-grow: 0;">

        <a href='#' id="buy_now" class="table_cell_3_button" 
        style="box-sizing: border-box;
        text-decoration:none;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        padding: 8px 14px;
        gap: 8px;
        /* width: 88px; */
        /* height: 36px; */
        background: #FDF8F5;
        border: 1px solid #FDF2EC;
        border-radius: 8px;
        flex: none;
        order: 3;
        flex-grow: 0;">

            <div class="table_cell_3_text" style="width: 60px;
            height: 20px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 20px;
            color: #FE6215;
            flex: none;
            order: 1;
            flex-grow: 0;">
              Buy Now
            </div>

        </a>
    </div>
    </div>
    `
  }
  private buyItem(name: string){
    console.log(`Item ${name} bought!`)
  }
}


