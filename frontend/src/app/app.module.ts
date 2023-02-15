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
import { TableRowComponent } from './main/table-row/table-row.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    NavigationComponent,
    HeaderComponent,
    SidebarComponent,
    TableRowComponent,
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
