import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/_services/car.service';
import { ICar} from 'src/app/_models/car';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  cars: ICar[];

  constructor(private carService: CarService) { }

  ngOnInit() {
    this.carService.getCars().subscribe(cars => {
      this.cars = cars.map(car => {
        return {
          id: car.ID,
          name: car.Name,
          description: car.Description,
          imageLink: car.ImageLink
        }
      });
    });

  }

}
