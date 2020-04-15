import { Car } from '../car/car';

export class Rentacar {
    public serviceName: string;
    public address: string;
    public description: string;
    public rating: number;
    public carList: Array<Car> = [
        new Car('BMW', '320d', 2012, 55),
        new Car('Audi', 'A4', 2015, 75, false),
        new Car('Audi', 'RS5', 2018, 499),
        new Car('Mercedes', 'GLE220', 2015, 255),
    ];
    // polje cenovnik usluga
    public filijale: string[] = [
				'Nemanjina 14, Beograd, Srbija',
				'Shakarid 55b, Dubai, UAE',
				'Dublin, Ireland',
				'asd 15, Budapest, Hungary',
    ];


    constructor(name: string, address: string, desc: string, rating: number) {
        this.serviceName = name;
        this.address = address;
        this.description = desc;
        this.rating = rating;
    }
}
