import { Component, OnInit } from '@angular/core';
import { Rentacar } from '../entities/rentacar/rentacar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public rentacar: Rentacar = new Rentacar('UNITED Rent-a-Car', 'Bulevar BB', 'Promo description', 4.6);

  constructor() { }

  ngOnInit(): void {
  }

}
