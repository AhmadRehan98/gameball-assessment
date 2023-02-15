import { HttpClient } from '@angular/common/http'
import { Component, OnInit, Injectable, ViewChild, ViewContainerRef } from '@angular/core';
import { MainBodyComponent } from 'src/app/main/main-body/main-body.component'; 
import { CellDirectiveComponent } from 'src/app/main/main-body/cell-directive/cell-directive.component'
import { NameCellComponent } from 'src/app/main/main-body/name-cell/name-cell.component';

export interface dbArray {
  [key: string]: Number[];
}

interface dbRow {
  name: string;
  type: string;
  price: Number;
}


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{
  @ViewChild(CellDirectiveComponent, {static: true})
  cellHost!: CellDirectiveComponent;
  // container1!: ViewContainerRef;
  mainBodyComponent: MainBodyComponent;

  constructor(private http: HttpClient, mainBodyComponent: MainBodyComponent){
    this.mainBodyComponent = mainBodyComponent;
  }
  ngOnInit(){
    // this.fetchFood()
  }

  onFoodFetch(){
    // this.fetchFood()
    const viewContainerRef = this.cellHost.viewContainerRef;
    const componentRef = viewContainerRef.createComponent(NameCellComponent);
  }

  onFruitsFetch(){
    this.fetchFruits()
  }

  onVegetablesFetch(){
    this.fetchVegetables()
  }

  onElectronicsFetch(){
    this.fetchElectronics()
  }


  private fetchFood(){
    // returns observable
    this.http.get<dbArray>('/api/products/food').subscribe((res) =>{
      this.mainBodyComponent.populateTable(res['food']);
    })
  }

  private fetchFruits(){
    // returns observable
    this.http.get('/api/products/fruits').subscribe((res) =>{
      console.log(res);
    })
  }

  private fetchVegetables(){
    // returns observable
    this.http.get('/api/products/vegetables').subscribe((res) =>{
      console.log(res);
    })
  }

  private fetchElectronics(){
    // returns observable
    this.http.get('/api/products/electronics').subscribe((res) =>{
      console.log(res);
    })
  }
}
