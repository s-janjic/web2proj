import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {

  vidimse: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showflights(){
    this.vidimse = true;
  }

}
