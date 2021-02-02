import { Injectable } from '@angular/core';
import { Tracker } from './tracker'
import { Asn } from './asn'
import { LatLng, Location } from './location'
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import * as L from 'leaflet';
import { Subject } from 'rxjs/internal/Subject';
import { tap, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

//create observable location,loccationdata

export class TrackerService {

  private dataSubject = new BehaviorSubject<Tracker>(null);
  data$: Observable<Tracker>
  private locationSubject = new BehaviorSubject<LatLng>({ lat: 51.505, lng: -0.09 });
  location$: Observable<LatLng>

  readonly URL = 'https://geo.ipify.org/api/v1?apiKey=at_KjnMsuWTla8gMD1WaVSvnko6EMXaa&ipAddress=8.8.8.8';
  tracker$: Observable<Tracker>
  // loccation$: Observable<Tracker>
  constructor(private http: HttpClient,) {
    // whenever subject updates, observable is updated
    this.data$ = this.dataSubject.asObservable()
    this.location$ = this.locationSubject.asObservable()
    //! IF USING SUBJECT
    // this.location$ = this.locationSubject.asObservable()
    console.log("loccation from service", this.location$)



    // this.location$ = this.data$.pipe(
    //   map((data) => { data.location.lat, data.logitude })


  }
  getTrack() {

    this.tracker$ = this.http.get<Tracker>('https://geo.ipify.org/api/v1?apiKey=at_KjnMsuWTla8gMD1WaVSvnko6EMXaa&ipAddress=8.8.8.8')
    console.log("tracking result", this.tracker$);
    return this.tracker$

  }
  getMapIp(inputIp: string): void {
    console.log("from service", inputIp)
    this.http.get<Tracker>(`https://geo.ipify.org/api/v1?apiKey=at_KjnMsuWTla8gMD1WaVSvnko6EMXaa&ipAddress=${inputIp}`)
      .pipe(
        tap(res => {
          console.log("response from related Ip", res);
          this.dataSubject.next(res);
          this.locationSubject.next({ lat: res.location.lat, lng: res.location.lng });

        })
      )
      .subscribe()

    console.log("requst been send");

  }
}


  // makeMarkers(map: L.map): void {

  //   this.http.get(this.URL).subscribe(res=>{
  //     const lat=res.location.lat;
  //     const lon=res.location.long;
  //     const marker=L.marker([lon,lat]).addTo(map)
  //   })// makeMarkers(map: L.map): void {

  //   this.http.get(this.URL).subscribe(res=>{
  //     const lat=res.location.lat;
  //     const lon=res.location.long;
  //     const marker=L.marker([lon,lat]).addTo(map)
  //   })






