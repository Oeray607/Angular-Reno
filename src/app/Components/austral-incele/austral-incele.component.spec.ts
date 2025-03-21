import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AustralInceleComponent } from './austral-incele.component';

describe('AustralInceleComponent', () => {
  let component: AustralInceleComponent;
  let fixture: ComponentFixture<AustralInceleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AustralInceleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AustralInceleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
