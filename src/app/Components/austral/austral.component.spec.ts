import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AustralComponent } from './austral.component';

describe('AustralComponent', () => {
  let component: AustralComponent;
  let fixture: ComponentFixture<AustralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AustralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AustralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
