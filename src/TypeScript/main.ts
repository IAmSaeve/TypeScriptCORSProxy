import { Trip } from "./trip";

const date: Date = new Date();
const today: string = date.getDate() + "." +
    (date.getMonth() + 1) + "." +
    (date.getFullYear().toString().split("20")[1]);
console.log(today);

// Request URL with CORS proxy (http://cors-anywhere.herokuapp.com/)
// Ty to this nice guy -> https://gist.github.com/jesperorb/6ca596217c8dfba237744966c2b5ab1e
const url  = "http://cors-anywhere.herokuapp.com/http://xmlopen.rejseplanen.dk/bin/rest.exe/trip?originId=8600617" +
            "&destCoordX=12565562&destCoordY=55673063&destCoordName=K%C3%B8benhavn%20H&date=" + today +
            "&time=10:58&useBus=0&format=json";

// This part can probably be done wiCth Axios instead
// New HttpRequest object
const xhr  = new XMLHttpRequest();

// Opens async GET request to URL with XMLHttpRequest as sender header
xhr.open("GET", url, true);
console.log("Sending request");
xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

// Do magic here.
console.log("Request sent. Waiting for response");
xhr.onload = () => {
    const TripArray: Trip[] = JSON.parse(xhr.responseText);

    console.log("Got response: " + xhr.status + xhr.statusText);
    if (xhr.readyState === 4 && xhr.status === 200) {
        console.log(TripArray);
    } else {
        console.error(TripArray);
    }
};
// Send the request
xhr.send(null);
