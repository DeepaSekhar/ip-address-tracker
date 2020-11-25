import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { InfoComponent } from './info/info.component';
import { MapComponent } from './map/map.component';

@NgModule({
  imports: [CommonModule],
  declarations: [NavbarComponent, SearchComponent, InfoComponent, MapComponent],
  exports: [NavbarComponent, SearchComponent, InfoComponent, MapComponent],
})
export class UiModule {}
