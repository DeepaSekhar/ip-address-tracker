import { Injectable } from '@angular/core';
import { Tracker } from './tracker'
import { Asn } from './asn'
import { LatLng, Location } from './location'
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import * as L from 'leaflet';
import { Subject } from 'rxjs/internal/Subject';
import { tap, map } from 'rxjs/operators';
import { Loader } from './loader'



@Injectable({
  providedIn: 'root'
})

//create observable location,loccationdata

export class TrackerService {

  private dataSubject = new BehaviorSubject<Tracker>(null);
  data$: Observable<Tracker>
  // private locationSubject = new BehaviorSubject<LatLng>({ lat: 51.505, lng: -0.09 });

  location$: Observable<LatLng>
  loader$: Observable<Loader>
  tracker$: Observable<Tracker>
  private loaderSubject = new BehaviorSubject<Loader>({ isLoading: false })
  private locationSubject = new ReplaySubject<LatLng>(1);
  readonly URL = 'https://geo.ipify.org/api/v1?apiKey=at_KjnMsuWTla8gMD1WaVSvnko6EMXaa&ipAddress=8.8.8.8';


  constructor(private http: HttpClient,) {

    // whenever subject updates, observable is updated
    this.data$ = this.dataSubject.asObservable()
    this.location$ = this.locationSubject.asObservable()
    this.loader$ = this.loaderSubject.asObservable()

    //! IF USING SUBJECT
    // this.location$ = this.locationSubject.asObservable()
    console.log("loccation from service", this.location$)

    this.location$ = this.locationSubject.asObservable()


    // this.location$ = this.data$.pipe(
    //   map((data) => { data.location.lat, data.logitude })

  }
  getUserGeoLoccation() {
    navigator.geolocation.getCurrentPosition(res => {
      console.log("geoloccation", res.coords.longitude, res.coords.latitude)
      const lat = res.coords.latitude;
      const lng = res.coords.longitude;
      this.locationSubject.next({ lat, lng });

    })
  }

  getTrack() {

    this.tracker$ = this.http.get<Tracker>('https://geo.ipify.org/api/v1?apiKey=at_KjnMsuWTla8gMD1WaVSvnko6EMXaa&ipAddress=8.8.8.8')
    console.log("tracking result", this.tracker$);
    return this.tracker$

  }
  getMapIp(inputIp: string): void {
    this.loaderSubject.next({ isLoading: true })

    console.log("from service", inputIp)
    this.http.get<Tracker>(`https://geo.ipify.org/api/v1?apiKey=at_KjnMsuWTla8gMD1WaVSvnko6EMXaa&ipAddress=${inputIp}`)
      .pipe(

        tap(res => {
          console.log("response from related Ip", res);
          this.dataSubject.next(res);
          this.locationSubject.next({ lat: res.location.lat, lng: res.location.lng });
          this.loaderSubject.next({ isLoading: false })

        })

      )
      .subscribe(),


      console.log("requst been send");

  }

}








