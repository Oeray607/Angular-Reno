import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeganeInceleComponent } from './megane-incele.component';

describe('MeganeInceleComponent', () => {
  let component: MeganeInceleComponent;
  let fixture: ComponentFixture<MeganeInceleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeganeInceleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeganeInceleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
