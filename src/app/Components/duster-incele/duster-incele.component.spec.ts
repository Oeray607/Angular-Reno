import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DusterInceleComponent } from './duster-incele.component';

describe('DusterInceleComponent', () => {
  let component: DusterInceleComponent;
  let fixture: ComponentFixture<DusterInceleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DusterInceleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DusterInceleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
