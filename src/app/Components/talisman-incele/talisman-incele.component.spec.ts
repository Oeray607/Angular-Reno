import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalismanInceleComponent } from './talisman-incele.component';

describe('TalismanInceleComponent', () => {
  let component: TalismanInceleComponent;
  let fixture: ComponentFixture<TalismanInceleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalismanInceleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalismanInceleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
