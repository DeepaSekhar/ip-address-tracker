import { Component, Input, OnInit } from '@angular/core';
import { UserData } from '../userData'
import { Observable } from 'rxjs';
import { Loader } from '../loader';

@Component({
  selector: 'ip-address-tracker-geoloccation',
  templateUrl: './geoloccation.component.html',
  styleUrls: ['./geoloccation.component.scss']
})

export class GeoloccationComponent implements OnInit {
  @Input() userData$: Observable<UserData>
  @Input() isLoading: Loader
  isLoding: true
  constructor() {
    console.log("geoloccation is loading value", this.isLoading)
  }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    console.log("geoloccation isLoading ng After viewinit", this.isLoading);
  }
}
