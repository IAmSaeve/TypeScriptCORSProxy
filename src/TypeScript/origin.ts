export class Origin {
    public Name: string;
    public Type: string;
    public RouteIdx: number;
    public Time: string;
    public RtTime: string;
    public Date: string;
    public RtDate: string;
    public Track: string;
    public RtTrack: string;

    constructor(name: string, type: string, time: string, date: string,
                routeIdx?: number, track?: string, rtTime?: string, rtDate?: string, rtTrack?: string ) {
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
