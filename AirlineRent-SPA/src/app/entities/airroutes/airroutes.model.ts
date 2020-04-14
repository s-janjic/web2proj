export class AirRoutes{
    public from: string;
    public to: string;
    public depart: Date;
    public price: number;
    public seats: number;
    public type: string;

    constructor(from2:string,to2:string,depart2:Date,price2:number,seats2:number,type2:string){
        this.from = from2;
        this.to = to2;
        this.depart = depart2;
        this.price = price2;
        this.seats = seats2;
        this.type = type2;
    }
}