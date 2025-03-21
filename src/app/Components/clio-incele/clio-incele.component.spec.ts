import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClioInceleComponent } from './clio-incele.component';

describe('ClioInceleComponent', () => {
  let component: ClioInceleComponent;
  let fixture: ComponentFixture<ClioInceleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClioInceleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClioInceleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
