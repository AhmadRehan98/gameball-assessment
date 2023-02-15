import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Component, OnInit, Injectable } from '@angular/core';
import { dbArray } from 'src/app/sidebar/navigation/navigation.component';

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
  constructor(){

  }
  public populateTable(dbarray : any){
    for (let i = 0; i < dbarray.length; i++) {
      // for each one table data entry{name, type, price}
      const element: dbRowdata = dbarray[i];
      const name = element.name, type = element.type, price = element.price
      
    }
  }
}
