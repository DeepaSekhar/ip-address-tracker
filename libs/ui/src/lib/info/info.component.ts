import { Component, OnInit } from '@angular/core';
import { TrackerService } from '../tracker.service'
import { Tracker } from '../tracker'
import { Observable } from 'rxjs';
import { Location } from '../location'
import { Input } from '@angular/core';


@Component({
  selector: 'ip-address-tracker-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  trackers$: Observable<Tracker>
  @Input() data$: Observable<Tracker>
  constructor(private trackerService: TrackerService) { }

  ngOnInit(): void {
    // this.trackers$ = this.trackerService.getTrack()
    // console.log(this.trackers$)


  }

}
