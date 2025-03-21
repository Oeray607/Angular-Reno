import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturInceleComponent } from './captur-incele.component';

describe('CapturInceleComponent', () => {
  let component: CapturInceleComponent;
  let fixture: ComponentFixture<CapturInceleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapturInceleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapturInceleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
