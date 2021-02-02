import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'ip-address-tracker-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() childEvent: EventEmitter<string> = new EventEmitter();


  searchStr: string;

  constructor() { }

  ngOnInit(): void {
  }

  searchStringEmt(value: string) {
    console.log(this.searchStr);
    console.log("value", value)
    this.childEvent.emit(value);

  }

}
