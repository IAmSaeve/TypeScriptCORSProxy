export class Origin {
    constructor(name, type, time, date, routeIdx, track, rtTime, rtDate, rtTrack) {
        this.name = name;
        this.type = type;
        this.time = time;
        this.date = date;
        this.routeIdx = routeIdx && routeIdx || 0;
        this.track = track && track || "";
        this.rtTime = rtTime && rtTime || "";
        this.rtDate = rtDate && rtDate || "";
        this.rtTrack = rtTrack && rtTrack || "";
    }
}
