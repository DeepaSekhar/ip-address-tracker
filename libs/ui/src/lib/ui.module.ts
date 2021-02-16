import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { InfoComponent } from './info/info.component';
import { MapComponent } from './map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GeoloccationComponent } from './geoloccation/geoloccation.component'

@NgModule({
  imports: [CommonModule, HttpClientModule, FormsModule],
  declarations: [NavbarComponent, SearchComponent, InfoComponent, MapComponent, GeoloccationComponent],
  exports: [NavbarComponent, SearchComponent, InfoComponent, MapComponent, GeoloccationComponent],
})
export class UiModule { }
