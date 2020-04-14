import { Component, OnInit } from '@angular/core';
import { AirRoutes } from '../entities/airroutes/airroutes.model';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

    datum:Date = new Date(2020,3,24);
    routes: AirRoutes[] = [
      new AirRoutes('Belgrade','Dubai',new Date(2020,4,16),250,10,'First Class'),
      new AirRoutes('Berlin','Los Angeles',new Date(2020,4,16),150,15,'Premium Economy'),
      new AirRoutes('Belgrade','Berlin',new Date(2020,4,17),35,25,'Economy'),
      new AirRoutes('London','Belgrade',new Date(2020,4,17),75,40,'Economy'),
      new AirRoutes('Dubai','Los Angeles',new Date(2020,4,18),250,45,'Premium Economy'),
      new AirRoutes('Belgrade','Dubai',new Date(2020,4,18),350,55,'First Class'),

    ];
  vrsta: string[] = [
    'Round Trip',
    'One way Trip',
  ];
  index: number;
  
  roundtrip: boolean = false;
  onewaytrip: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showflights(){
    this.roundtrip = true;
    console.log(this.routes);
    console.log(this.datum);
  }

  getValueFromTrip(){
    
  }

}
