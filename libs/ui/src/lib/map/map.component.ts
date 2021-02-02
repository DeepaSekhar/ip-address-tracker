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

  // @Input() private loccation$: Observable<LatLng>
  @Input() private loccation$: Observable<LatLng>

  constructor(private trackerService: TrackerService) { }
  ngOnInit() {

    this.loccation$
      .pipe(
        skip(1),
        takeUntil(this.unsubscribe$)
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
      })
  }


  private setMapView(loccation: LatLng): void {
    this.map = L.map('map').setView([loccation.lat, loccation.lng], 13);

    console.log("initmap")
  }
  private flyTo(loccation: LatLng): void {
    this.map.flyTo([loccation.lat, loccation.lng], 13)
    // =L.map('map').setView([loccation.lat, loccation.lng], 13);
  }

  private getTile(): void {

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
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
