import { Leg } from "./leg";

export class Trip {
    public alternative: boolean;
    public cancelled: boolean;
    public valid: boolean;
    public Leg: Leg[];

 constructor(leg: Leg[], alternative?: boolean, valid?: boolean, cancelled?: boolean) {
    this.Leg = leg;

    this.alternative = alternative && alternative || false;
    this.valid = valid && valid || false;
    this.cancelled = cancelled && cancelled || false;
}

}
