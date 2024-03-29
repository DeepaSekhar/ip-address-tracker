import { Injectable } from '@angular/core';
import { Tracker } from './tracker'
import { Asn } from './asn'
import { LatLng, Location } from './location'
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, ReplaySubject } from 'rxjs';
import * as L from 'leaflet';
import { Subject } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import { Loader } from './loader'
import { UserData } from './userData'


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
  userData$: Observable<UserData>
  private loaderSubject = new BehaviorSubject<Loader>({ isLoading: false })
  private locationSubject = new ReplaySubject<LatLng>(1);
  private geoloccationSubject = new Subject<UserData>();
  readonly URL = 'https://geo.ipify.org/api/v1?apiKey=at_KjnMsuWTla8gMD1WaVSvnko6EMXaa&ipAddress=8.8.8.8';


  constructor(private http: HttpClient,) {

    // whenever subject updates, observable is updated
    this.data$ = this.dataSubject.asObservable()
    this.location$ = this.locationSubject.asObservable()
    this.loader$ = this.loaderSubject.asObservable()
    this.userData$ = this.geoloccationSubject.asObservable()
    //! IF USING SUBJECT
    // this.location$ = this.locationSubject.asObservable()
    console.log("loccation from service", this.location$)

    this.location$ = this.locationSubject.asObservable()


    // this.location$ = this.data$.pipe(
    //   map((data) => { data.location.lat, data.logitude })

  }
  getUserGeoLoccation() {
    navigator.geolocation.getCurrentPosition(res => {
      console.log("geoloccation", res)
      const lat = res.coords.latitude;
      const lng = res.coords.longitude;
      this.locationSubject.next({ lat, lng });

    })
  }

  getUserLoccationData() {
    console.log("the geo loccation function being called before")
    this.http.get<UserData>(`https://geolocation-db.com/json/09068b10-55fe-11eb-8939-299a0c3ab5e5`)

      .subscribe(res => {
        console.log("geoloccation user", res)
        this.dataSubject.next({ location: { city: res.city }, ip: res.IPv4, timezone: res.country_code, isp: res.country_name });
      })
    console.log("the geo loccation function being called")
  }


  getTrack() {

    this.http.get<Tracker>(`https://geo.ipify.org/api/v1?apiKey=at_KjnMsuWTla8gMD1WaVSvnko6EMXaa&ipAddress=8.8.8.8`)
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








