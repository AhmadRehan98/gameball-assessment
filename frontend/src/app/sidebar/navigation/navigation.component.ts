import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Component, OnInit, Injectable } from '@angular/core';
import { MainBodyComponent } from 'src/app/main/main-body/main-body.component'; 

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
  mainBodyComponent: MainBodyComponent;
  constructor(private http: HttpClient, mainBodyComponent: MainBodyComponent){
    this.mainBodyComponent = mainBodyComponent;
  }
  ngOnInit(){
    // this.fetchFood()
  }

  onFoodFetch(){
    this.fetchFood()
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
      // console.log(res);
      // console.log(res['food']);
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
