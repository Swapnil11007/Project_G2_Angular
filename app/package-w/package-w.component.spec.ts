import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageWComponent } from './package-w.component';

describe('PackageWComponent', () => {
  let component: PackageWComponent;
  let fixture: ComponentFixture<PackageWComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageWComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackageWComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
