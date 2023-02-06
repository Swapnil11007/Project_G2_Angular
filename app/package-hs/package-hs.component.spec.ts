import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageHSComponent } from './package-hs.component';

describe('PackageHSComponent', () => {
  let component: PackageHSComponent;
  let fixture: ComponentFixture<PackageHSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageHSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackageHSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
