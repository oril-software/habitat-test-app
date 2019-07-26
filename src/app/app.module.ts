import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CarListComponent } from './_components/car-list/car-list.component';
import { CarItemComponent } from './_components/car-list/car-item/car-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CarListComponent,
    CarItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
