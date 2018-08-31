import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DomainlistComponent } from './domainlist.component';

describe('DomainlistComponent', () => {
  let component: DomainlistComponent;
  let fixture: ComponentFixture<DomainlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DomainlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DomainlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
