import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ip-address-tracker-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchStr: string;

  constructor() { }

  ngOnInit(): void {
  }

  searchMap() {
    console.log(this.searchStr);
  }
}
