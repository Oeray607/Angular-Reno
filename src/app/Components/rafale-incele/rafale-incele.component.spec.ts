import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RafaleInceleComponent } from './rafale-incele.component';

describe('RafaleInceleComponent', () => {
  let component: RafaleInceleComponent;
  let fixture: ComponentFixture<RafaleInceleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RafaleInceleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RafaleInceleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
