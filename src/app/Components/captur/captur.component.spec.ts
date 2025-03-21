import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturComponent } from './captur.component';

describe('CapturComponent', () => {
  let component: CapturComponent;
  let fixture: ComponentFixture<CapturComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapturComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
