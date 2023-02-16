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

  constructor(mainbodyComponent: MainBodyComponent){
    this.mainbodyComponent= mainbodyComponent;
  }
  onFoodFetch(){
    this.fetchFood()
  }
  onElectronicsFetch(){
    this.fetchElectronics()
  }

  private fetchFood(){
    NavigationComponent.isFood = true;
    this.mainbodyComponent.populateTable('food');
  }

  private fetchElectronics(){
    NavigationComponent.isFood = false;
    this.mainbodyComponent.populateTable('electronics');
  }
}
