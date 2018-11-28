export class Trip {
    constructor(legs, alternative, valid, cancelled) {
        this.Legs = legs;
        this.Alternative = alternative && alternative || false;
        this.Valid = valid && valid || false;
        this.Cancelled = cancelled && cancelled || false;
    }
}
