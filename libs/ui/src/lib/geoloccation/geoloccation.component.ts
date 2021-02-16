import { Component, Input, OnInit } from '@angular/core';
import { UserData } from '../userData'
import { Observable } from 'rxjs';

@Component({
  selector: 'ip-address-tracker-geoloccation',
  templateUrl: './geoloccation.component.html',
  styleUrls: ['./geoloccation.component.scss']
})

export class GeoloccationComponent implements OnInit {
  @Input() userData$: Observable<UserData>
  constructor() {
    console.log("userdata geo loccation", this.userData$)
  }

  ngOnInit(): void {
  }

}
