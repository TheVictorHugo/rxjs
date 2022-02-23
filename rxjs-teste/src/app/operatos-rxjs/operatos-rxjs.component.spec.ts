import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatosRxjsComponent } from './operatos-rxjs.component';

describe('OperatosRxjsComponent', () => {
  let component: OperatosRxjsComponent;
  let fixture: ComponentFixture<OperatosRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperatosRxjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatosRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
