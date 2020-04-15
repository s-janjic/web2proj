import {
  Component,
  OnInit
} from '@angular/core';
import {
  Rentacar
} from '../entities/rentacar/rentacar';
import {
  Airlinecompany
} from '../entities/airlinecompany/airlinecompany';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public rentacar: Rentacar = new Rentacar('UNITED Rent-a-Car', 'Bulevar BB', 'Promo description', 4.6);
  public airlines: Airlinecompany[] = [
    new Airlinecompany('First class', 'Air Serbia', 'Nemanjina 14, Beograd, Srbija', 'First class travel with Serbian company', 4.8),
    new Airlinecompany('Premium Economy', 'Dubai Airline', 'Shakarid 55b, Dubai, UAE', 'First class Dubai Airline', 4.4),
    new Airlinecompany('Economy', 'RyanAir', 'Dublin, Ireland', 'Low cost Irish Air company', 4.1),
    new Airlinecompany('Economy', 'Wizz Air', 'asd 15, Budapest, Hungary', 'Low cost company from Hungary', 4.5),
  ];

  constructor() {}

  ngOnInit(): void {}

}
