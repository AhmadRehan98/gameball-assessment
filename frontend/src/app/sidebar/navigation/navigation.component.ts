import { HttpClient } from '@angular/common/http'
import { Component, Injectable} from '@angular/core';


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
@Injectable({
  providedIn: 'root',
})
export class NavigationComponent{

  constructor(private http: HttpClient){
  }

  onFoodFetch(){
    this.fetchFood()
    // const viewContainerRef = this.cellHost.viewContainerRef;
    // const componentRef = viewContainerRef.createComponent(NameCellComponent);
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


  public fetchFood(){
    // returns observable
    this.http.get<dbArray>('/api/products/food').subscribe((res) =>{
      // this.mainComponent.populateTable();
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
