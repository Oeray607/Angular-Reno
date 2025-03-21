import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoleosInceleComponent } from './koleos-incele.component';

describe('KoleosInceleComponent', () => {
  let component: KoleosInceleComponent;
  let fixture: ComponentFixture<KoleosInceleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KoleosInceleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KoleosInceleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
