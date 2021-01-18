import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { InfoComponent } from './info/info.component';
import { MapComponent } from './map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

@NgModule({
  imports: [CommonModule, HttpClientModule, FormsModule],
  declarations: [NavbarComponent, SearchComponent, InfoComponent, MapComponent],
  exports: [NavbarComponent, SearchComponent, InfoComponent, MapComponent],
})
export class UiModule { }
