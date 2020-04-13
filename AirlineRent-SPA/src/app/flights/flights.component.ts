import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

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
  }

  getValueFromTrip(){
    
  }

}
