import { NgModule, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './sidebar/footer/footer.component';
import { NavigationComponent } from './sidebar/navigation/navigation.component';
import { HeaderComponent } from './sidebar/header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainBodyComponent } from './main/main-body/main-body.component';
import { MainHeaderComponent } from './main/main-header/main-header.component';
import { TabsAndFiltersComponent } from './main/main-header/tabs-and-filters/tabs-and-filters.component';
import { NameCellComponent } from './main/main-body/name-cell/name-cell.component';
import { PriceCellComponent } from './main/main-body/price-cell/price-cell.component';
import { BuyButtonCellComponent } from './main/main-body/buy-button-cell/buy-button-cell.component';
import { CellDirectiveComponent } from './main/main-body/cell-directive/cell-directive.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    NavigationComponent,
    HeaderComponent,
    SidebarComponent,
    MainBodyComponent,
    MainHeaderComponent,
    TabsAndFiltersComponent,
    NameCellComponent,
    PriceCellComponent,
    BuyButtonCellComponent,
    CellDirectiveComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
