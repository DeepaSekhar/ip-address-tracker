import { Injectable } from '@angular/core';
import { Tracker } from './tracker'
import { Asn } from './asn'
import { Location } from './location'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as L from 'leaflet';


@Injectable({
  providedIn: 'root'
})
export class TrackerService {

  readonly URL = 'https://geo.ipify.org/api/v1?apiKey=at_KjnMsuWTla8gMD1WaVSvnko6EMXaa&ipAddress=8.8.8.8';
  tracker$: Observable<Tracker>
  loccation$: Observable<Tracker>
  constructor(private http: HttpClient) {

  }
  getTrack() {
    this.tracker$ = this.http.get<Tracker>(this.URL)
    console.log("tracking result", this.tracker$);
    return this.tracker$

  }
  // makeMarkers(map: L.map): void {

  //   this.http.get(this.URL).subscribe(res=>{
  //     const lat=res.location.lat;
  //     const lon=res.location.long;
  //     const marker=L.marker([lon,lat]).addTo(map)
  //   })


}


