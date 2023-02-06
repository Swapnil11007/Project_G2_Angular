import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselPComponent } from './carousel-p.component';

describe('CarouselPComponent', () => {
  let component: CarouselPComponent;
  let fixture: ComponentFixture<CarouselPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselPComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarouselPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
