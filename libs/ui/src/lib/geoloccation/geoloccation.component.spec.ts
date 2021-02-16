import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoloccationComponent } from './geoloccation.component';

describe('GeoloccationComponent', () => {
  let component: GeoloccationComponent;
  let fixture: ComponentFixture<GeoloccationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoloccationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoloccationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
