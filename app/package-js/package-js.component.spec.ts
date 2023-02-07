import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageJSComponent } from './package-js.component';

describe('PackageJSComponent', () => {
  let component: PackageJSComponent;
  let fixture: ComponentFixture<PackageJSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageJSComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackageJSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
