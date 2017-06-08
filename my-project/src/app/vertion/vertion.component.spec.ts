import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VertionComponent } from './vertion.component';

describe('VertionComponent', () => {
  let component: VertionComponent;
  let fixture: ComponentFixture<VertionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VertionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VertionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
