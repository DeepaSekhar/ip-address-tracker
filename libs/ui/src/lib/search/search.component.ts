import { AfterViewInit } from '@angular/core';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Loader } from '../loader';


@Component({
  selector: 'ip-address-tracker-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements AfterViewInit, OnInit {
  @Output() childEvent: EventEmitter<string> = new EventEmitter();
  searchStr: string;

  @Input() isLoading: Loader

  constructor() {

  }
  ngOnInit(): void {
    console.log("isLoading ngoninIt", this.isLoading);
  }
  ngAfterViewInit(): void {
    console.log("isLoading ng After viewinit", this.isLoading);
  }




  searchStringEmt(value: string) {
    console.log(this.searchStr);
    console.log("value", value)
    this.childEvent.emit(value);


  }


}
