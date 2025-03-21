import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaliantInceleComponent } from './taliant-incele.component';

describe('TaliantInceleComponent', () => {
  let component: TaliantInceleComponent;
  let fixture: ComponentFixture<TaliantInceleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaliantInceleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaliantInceleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
