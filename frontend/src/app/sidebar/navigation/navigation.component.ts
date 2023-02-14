import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit{
  constructor(private http: HttpClient){

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
    this.http.get('/api/products/food').subscribe((res) =>{
      console.log(res);
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
