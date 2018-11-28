export class Destination {
    constructor(name, type, time, date, routeIdx, track, rtTime, rtDate, rtTrack) {
        this.Name = name;
        this.Type = type;
        this.Time = time;
        this.Date = date;
        this.RouteIdx = routeIdx && routeIdx || 0;
        this.Track = track && track || "";
        this.RtTime = rtTime && rtTime || "";
        this.RtDate = rtDate && rtDate || "";
        this.RtTrack = rtTrack && rtTrack || "";
    }
}
