import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesBuilderComponent } from './invoices-builder.component';

describe('InvoicesBuilderComponent', () => {
  let component: InvoicesBuilderComponent;
  let fixture: ComponentFixture<InvoicesBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InvoicesBuilderComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoicesBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
