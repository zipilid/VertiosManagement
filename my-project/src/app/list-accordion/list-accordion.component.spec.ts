import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAccordionComponent } from './list-accordion.component';

describe('ListAccordionComponent', () => {
  let component: ListAccordionComponent;
  let fixture: ComponentFixture<ListAccordionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAccordionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
