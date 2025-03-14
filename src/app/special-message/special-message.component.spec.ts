import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialMessageComponent } from './special-message.component';

describe('SpecialMessageComponent', () => {
  let component: SpecialMessageComponent;
  let fixture: ComponentFixture<SpecialMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SpecialMessageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
