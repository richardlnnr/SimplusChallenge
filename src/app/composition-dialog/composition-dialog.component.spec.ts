import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompositionDialogComponent } from './composition-dialog.component';

describe('CompositionDialogComponent', () => {
  let component: CompositionDialogComponent;
  let fixture: ComponentFixture<CompositionDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompositionDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompositionDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
