import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SysinfoComponent } from './sysinfo.component';

describe('SysinfoComponent', () => {
  let component: SysinfoComponent;
  let fixture: ComponentFixture<SysinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SysinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SysinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
