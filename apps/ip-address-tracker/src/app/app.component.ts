import { Component } from '@angular/core';
import { Tracker } from 'libs/ui/src/lib/tracker';
import { TrackerService } from 'libs/ui/src/lib/tracker.service';
import { Observable } from 'rxjs';
import { Location, LatLng } from 'libs/ui/src/lib/location';
import { Loader } from 'libs/ui/src/lib/loader'
import { UserData } from 'libs/ui/src/lib/userData'

@Component({
  selector: 'ip-address-tracker-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  trackers$: Observable<Tracker>
  data$: Observable<Tracker>
  public loader$: Observable<Loader>
  public location$: Observable<LatLng>
  public userData$: Observable<UserData>


  // dataFromSearch: string;
  constructor(private trackerService: TrackerService) {
    this.data$ = this.trackerService.data$;
    this.location$ = this.trackerService.location$
    this.trackerService.getUserGeoLoccation();
    this.loader$ = this.trackerService.loader$
    this.trackerService.getUserLoccationData();
    this.userData$ = this.trackerService.userData$



  }

  //sending ip value to sevice which received from search

  searchIp(inputVal: string) {
    console.log("from app", inputVal)
    this.trackerService.getMapIp(inputVal);

  }

}

