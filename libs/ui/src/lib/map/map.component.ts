import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { TrackerService } from '../tracker.service'
import { Location, LatLng } from 'libs/ui/src/lib/location';
import { Observable, Subject } from 'rxjs';
import { take, takeUntil, skip } from 'rxjs/operators';

import { Input } from '@angular/core';
@Component({
  selector: 'ip-address-tracker-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit, OnInit {

  private map;
  private unsubscribe$ = new Subject();
  private zoom = 13;
  // @Input() private loccation$: Observable<LatLng>
  @Input() private loccation$: Observable<LatLng>


  constructor(private trackerService: TrackerService) { }
  ngOnInit() {

    this.loccation$
      .pipe(
        skip(1),
        takeUntil(this.unsubscribe$),

      )

      .subscribe(res => {
        console.log("latlng", res);
        this.flyTo(res)
        // this.getTile()
        this.getMarker(res);

      })


  }


  ngAfterViewInit() {
    console.log(this.loccation$);
    this.loccation$
      .pipe(take(1))
      .subscribe(res => {
        this.setMapView(res)
        this.getTile()
        this.getMarker(res)
      })
  }


  private setMapView(loccation: LatLng): void {
    this.map = L.map('map', { zoomControl: false }).setView([loccation.lat, loccation.lng], this.zoom);


    console.log("initmap")
  }
  private flyTo(loccation: LatLng): void {
    this.map.flyTo([loccation.lat, loccation.lng], this.zoom)
    // =L.map('map').setView([loccation.lat, loccation.lng], 13);
  }

  private getTile(): void {

    // const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    // attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    // maxZoom: 18,
    // tileSize: 512,
    // zoomOffset: -1,

    const tiles = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGVlcGFha2hpbCIsImEiOiJja2t5bHB1OGswNTlhMm9tbGpxOXZ2a3ZlIn0.zA63CvCd0amANa_njPEx3g', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'your.mapbox.access.token'


    })

    tiles.addTo(this.map);

  }

  private getMarker(loccation: LatLng) {
    // const marker = L.marker([51.5, -0.09])
    console.log("loccation", loccation);
    const marker = L.marker([loccation.lat, loccation.lng])
    marker.addTo(this.map)
  }

}
