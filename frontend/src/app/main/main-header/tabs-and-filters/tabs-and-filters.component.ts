import { Component } from '@angular/core';
import { MainBodyComponent } from '../../main-body/main-body.component';

@Component({
  selector: 'app-tabs-and-filters',
  templateUrl: './tabs-and-filters.component.html',
  styleUrls: ['./tabs-and-filters.component.css']
})
export class TabsAndFiltersComponent {
  mainbodyComponent: MainBodyComponent;

  constructor(mainbodyComponent: MainBodyComponent){
    this.mainbodyComponent = mainbodyComponent;
  }
}
