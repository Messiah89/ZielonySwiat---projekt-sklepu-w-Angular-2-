import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MojeRealizacjeComponent } from './moje-realizacje.component';

describe('MojeRealizacjeComponent', () => {
  let component: MojeRealizacjeComponent;
  let fixture: ComponentFixture<MojeRealizacjeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MojeRealizacjeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MojeRealizacjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
