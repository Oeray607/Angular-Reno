import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DusterComponent } from './duster.component';

describe('DusterComponent', () => {
  let component: DusterComponent;
  let fixture: ComponentFixture<DusterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DusterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
