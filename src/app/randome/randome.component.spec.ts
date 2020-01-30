import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomeComponent } from './randome.component';

describe('RandomeComponent', () => {
  let component: RandomeComponent;
  let fixture: ComponentFixture<RandomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
