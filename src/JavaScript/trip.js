export class Trip {
    constructor(leg, alternative, valid, cancelled) {
        this.Leg = leg;
        this.alternative = alternative && alternative || false;
        this.valid = valid && valid || false;
        this.cancelled = cancelled && cancelled || false;
    }
}
