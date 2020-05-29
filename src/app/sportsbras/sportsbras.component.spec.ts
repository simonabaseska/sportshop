import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsbrasComponent } from './sportsbras.component';

describe('SportsbrasComponent', () => {
  let component: SportsbrasComponent;
  let fixture: ComponentFixture<SportsbrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsbrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsbrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
