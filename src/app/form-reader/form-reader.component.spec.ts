import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormReaderComponent } from './form-reader.component';

describe('FormReaderComponent', () => {
  let component: FormReaderComponent;
  let fixture: ComponentFixture<FormReaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormReaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
