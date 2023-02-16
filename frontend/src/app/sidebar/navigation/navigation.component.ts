import { HttpClient } from '@angular/common/http'
import { Component} from '@angular/core';
import { MainBodyComponent } from 'src/app/main/main-body/main-body.component';
export interface dbArray {
  [key: string]: Number[];
}

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent{
  static isFood: boolean = true;
  mainbodyComponent: MainBodyComponent;

  constructor(private http: HttpClient, mainbodyComponent: MainBodyComponent){
    this.mainbodyComponent= mainbodyComponent;
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
    NavigationComponent.isFood = true;
    // returns observable
    this.http.get('/api/products/food').subscribe((res) =>{
      console.log(res);
      this.mainbodyComponent.populateTable('food');
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
    NavigationComponent.isFood = false;
    // returns observable
    this.http.get('/api/products/electronics').subscribe((res) =>{
      console.log(res);
      this.mainbodyComponent.populateTable('electronics');
    })
  }
}
