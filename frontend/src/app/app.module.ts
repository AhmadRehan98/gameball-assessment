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
