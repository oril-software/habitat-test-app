import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarListComponent } from 'src/app/_components/car-list/car-list.component';
import { CarItemModule } from 'src/app/_components/car-list/car-item/car-item.module';

@NgModule({
  declarations: [CarListComponent],
  imports: [
    CommonModule,
    CarItemModule
  ],
  exports: [CarListComponent]
})
export class ReceiptsListModule { }
