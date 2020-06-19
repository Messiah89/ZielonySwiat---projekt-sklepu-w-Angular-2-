import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JakDbacOSloikComponent } from './jak-dbac-osloik.component';

describe('JakDbacOSloikComponent', () => {
  let component: JakDbacOSloikComponent;
  let fixture: ComponentFixture<JakDbacOSloikComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JakDbacOSloikComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JakDbacOSloikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
