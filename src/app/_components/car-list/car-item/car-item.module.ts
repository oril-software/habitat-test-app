import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarItemComponent } from 'src/app/_components/car-list/car-item/car-item.component';

@NgModule({
  declarations: [CarItemComponent],
  imports: [
    CommonModule
  ],
  exports: [CarItemComponent]
})
export class CarItemModule { }
