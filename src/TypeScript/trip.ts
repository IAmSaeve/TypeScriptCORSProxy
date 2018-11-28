import { Leg } from "./leg";

export class Trip {
    public Alternative: boolean;
    public Cancelled: boolean;
    public Valid: boolean;
    public Legs: Leg[];

 constructor(legs: Leg[], alternative?: boolean, valid?: boolean, cancelled?: boolean) {
    this.Legs = legs;

    this.Alternative = alternative && alternative || false;
    this.Valid = valid && valid || false;
    this.Cancelled = cancelled && cancelled || false;
}

}
