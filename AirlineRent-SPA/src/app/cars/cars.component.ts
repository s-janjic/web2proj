import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  public exampleCarListSearch = [
    { brand: 'Audi', model: 'A6', year: 2013, dailyPrice: 55, isAvailable: true },
    { brand: 'BMW', model: '540', year: 2011, dailyPrice: 100, isAvailable: false },
    { brand: 'Mercedes', model: 'GLE200', year: 2017, dailyPrice: 345, isAvailable: true },
  ];

  public isFindCar = false;

  constructor() { }

  ngOnInit(): void {
  }

  searchCars(): void {
    this.isFindCar = true;
  }
}
