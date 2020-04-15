export class Car {
    public brand: string;
    public model: string;
    public year: number;
    public dailyPrice: number;
    public isAvailable: boolean;
    
    constructor(brand: string, model: string, year: number, dailyPrice: number, isAvailable: boolean = true) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.dailyPrice = dailyPrice;
        this.isAvailable = isAvailable;
    }
}
