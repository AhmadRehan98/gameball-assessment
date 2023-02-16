import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { TabsAndFiltersComponent } from './tabs-and-filters/tabs-and-filters.component';
import { NavigationComponent } from 'src/app/sidebar/navigation/navigation.component';
import { interval } from 'rxjs';
import { takeWhile } from 'rxjs/operators';


@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent{
  @ViewChild('tabs_and_filters', {read: ViewContainerRef})
  tabs_and_filters!: ViewContainerRef;

  constructor(){
    var change = false;
    interval(50).pipe(takeWhile(() => true)).subscribe(() => {
      // change happened
      if (change != NavigationComponent.isFood){
        console.log(NavigationComponent.isFood);
        if (NavigationComponent.isFood){
          this.setFood();
        }
        else{
          this.setElectronics();
        }
        change = NavigationComponent.isFood;
      }
    });
  }

  public setFood(){
    this.tabs_and_filters.clear();
    this.tabs_and_filters.createComponent(TabsAndFiltersComponent);
  }

  private setElectronics(){
    this.tabs_and_filters.clear();
  }
}
