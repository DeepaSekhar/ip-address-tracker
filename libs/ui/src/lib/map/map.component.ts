import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { TrackerService } from '../tracker.service'


@Component({
  selector: 'ip-address-tracker-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements AfterViewInit {

  private map;


  constructor(private trackerService: TrackerService) { }

  ngAfterViewInit(): void {
    // this.trackerService.makeMarkers(this.map);
    this.initMap();
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    console.log('ngafterviewinit')
    tiles.addTo(this.map);
  }


  private initMap(): void {
    this.map = L.map('map', {
      // center: [39.8282, -98.579],
      center: [10.8505, 76.2711],

      zoom: 3
    });
    console.log("initmap")

  }

}
